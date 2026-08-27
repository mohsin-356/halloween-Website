import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { PRODUCTS, type Product } from "./catalog";

export interface CartLine {
  productId: string;
  qty: number;
  size?: string;
  color?: string;
}

export interface Coupon {
  code: string;
  label: string;
  type: "percent" | "fixed" | "shipping";
  value: number;
}

export const COUPONS: Coupon[] = [
  { code: "HOLLOW15", label: "15% off your haunt", type: "percent", value: 15 },
  { code: "EMBER25", label: "$25 off orders over $150", type: "fixed", value: 25 },
  { code: "FREEFOG", label: "Free express shipping", type: "shipping", value: 0 },
];

export const FREE_SHIPPING_THRESHOLD = 99;
const STANDARD_SHIPPING = 8.95;
const TAX_RATE = 0.0825;

interface StoreValue {
  lines: CartLine[];
  wishlist: string[];
  recentlyViewed: string[];
  coupon: Coupon | null;
  cartOpen: boolean;
  searchOpen: boolean;
  setCartOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  addToCart: (productId: string, options?: { qty?: number; size?: string; color?: string }) => void;
  updateQty: (index: number, qty: number) => void;
  removeLine: (index: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  trackView: (productId: string) => void;
  applyCoupon: (code: string) => { ok: boolean; message: string };
  removeCoupon: () => void;
  itemCount: number;
  detailedLines: { line: CartLine; product: Product }[];
  totals: {
    subtotal: number;
    discount: number;
    shipping: number;
    tax: number;
    total: number;
    freeShippingRemaining: number;
  };
}

const StoreContext = createContext<StoreValue | null>(null);

const KEY = "hollow-hill-store-v1";

function readPersisted() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Partial<Record<string, unknown>>) : null;
  } catch {
    return null;
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [coupon, setCoupon] = useState<Coupon | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const persisted = readPersisted();
    if (persisted) {
      setLines((persisted["lines"] as CartLine[] | undefined) ?? []);
      setWishlist((persisted["wishlist"] as string[] | undefined) ?? []);
      setRecentlyViewed((persisted["recentlyViewed"] as string[] | undefined) ?? []);
      setCoupon((persisted["coupon"] as Coupon | null | undefined) ?? null);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(KEY, JSON.stringify({ lines, wishlist, recentlyViewed, coupon }));
  }, [hydrated, lines, wishlist, recentlyViewed, coupon]);

  const addToCart = useCallback<StoreValue["addToCart"]>((productId, options) => {
    setLines((prev) => {
      const size = options?.size;
      const color = options?.color;
      const qty = options?.qty ?? 1;
      const existing = prev.findIndex(
        (l) => l.productId === productId && l.size === size && l.color === color,
      );
      if (existing >= 0) {
        return prev.map((l, i) => (i === existing ? { ...l, qty: l.qty + qty } : l));
      }
      const line: CartLine = { productId, qty };
      if (size) line.size = size;
      if (color) line.color = color;
      return [...prev, line];
    });
    setCartOpen(true);
  }, []);

  const updateQty = useCallback((index: number, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((_, i) => i !== index)
        : prev.map((l, i) => (i === index ? { ...l, qty } : l)),
    );
  }, []);

  const removeLine = useCallback((index: number) => {
    setLines((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearCart = useCallback(() => {
    setLines([]);
    setCoupon(null);
  }, []);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    );
  }, []);

  const trackView = useCallback((productId: string) => {
    setRecentlyViewed((prev) => [productId, ...prev.filter((id) => id !== productId)].slice(0, 8));
  }, []);

  const detailedLines = useMemo(() => {
    return lines.flatMap((line) => {
      const product = PRODUCTS.find((p) => p.id === line.productId);
      return product ? [{ line, product }] : [];
    });
  }, [lines]);

  const totals = useMemo(() => {
    const subtotal = detailedLines.reduce((sum, { line, product }) => sum + product.price * line.qty, 0);
    let discount = 0;
    let shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
    if (coupon) {
      if (coupon.type === "percent") discount = (subtotal * coupon.value) / 100;
      if (coupon.type === "fixed" && subtotal >= 150) discount = coupon.value;
      if (coupon.type === "shipping") shipping = 0;
    }
    const taxable = Math.max(subtotal - discount, 0);
    const tax = taxable * TAX_RATE;
    return {
      subtotal,
      discount,
      shipping,
      tax,
      total: taxable + shipping + tax,
      freeShippingRemaining: Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0),
    };
  }, [detailedLines, coupon]);

  const applyCoupon = useCallback<StoreValue["applyCoupon"]>((code) => {
    const found = COUPONS.find((c) => c.code.toLowerCase() === code.trim().toLowerCase());
    if (!found) return { ok: false, message: "That code isn't valid this season." };
    setCoupon(found);
    return { ok: true, message: `${found.code} applied — ${found.label}.` };
  }, []);

  const value = useMemo<StoreValue>(
    () => ({
      lines,
      wishlist,
      recentlyViewed,
      coupon,
      cartOpen,
      searchOpen,
      setCartOpen,
      setSearchOpen,
      addToCart,
      updateQty,
      removeLine,
      clearCart,
      toggleWishlist,
      isWishlisted: (id: string) => wishlist.includes(id),
      trackView,
      applyCoupon,
      removeCoupon: () => setCoupon(null),
      itemCount: lines.reduce((n, l) => n + l.qty, 0),
      detailedLines,
      totals,
    }),
    [
      lines,
      wishlist,
      recentlyViewed,
      coupon,
      cartOpen,
      searchOpen,
      addToCart,
      updateQty,
      removeLine,
      clearCart,
      toggleWishlist,
      trackView,
      applyCoupon,
      detailedLines,
      totals,
    ],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
