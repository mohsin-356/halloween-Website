import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, Heart, X, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { CATEGORIES, THEMES } from "@/lib/catalog";
import { useStore } from "@/lib/store";
import { HALLOWEEN } from "@/lib/halloween-assets";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Shop All", to: "/shop" as const },
  { label: "Costumes", to: "/shop" as const, search: { category: "costumes" } },
  { label: "Decor", to: "/shop" as const, search: { category: "decorations" } },
  { label: "Animatronics", to: "/shop" as const, search: { category: "animatronics" } },
  { label: "Compare", to: "/compare" as const },
];

export function Header() {
  const { itemCount, wishlist, setCartOpen, setSearchOpen } = useStore();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled ? "glass-dark" : "bg-transparent",
      )}
    >
      <p className="bg-[linear-gradient(90deg,var(--blood),color-mix(in_oklab,var(--ember)_65%,black),var(--blood))] py-1.5 text-center text-[10px] font-bold tracking-[0.22em] text-cream uppercase">
        Free US shipping over $99 · Haunt-ready by October 31
      </p>

      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-3 px-4 sm:px-6">
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="mr-2 flex items-center gap-2">
          <img src={HALLOWEEN.pumpkins.glowing} alt="" className="h-9 w-9 object-contain" />
          <span className="font-display text-sm leading-none tracking-tight text-gold sm:text-base">
            Hollow Hill
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setMegaOpen(false)}
        >
          <button
            type="button"
            onMouseEnter={() => setMegaOpen(true)}
            onClick={() => setMegaOpen((v) => !v)}
            className="rounded-full px-3 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-colors hover:text-gold"
          >
            Categories
          </button>
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              search={item.search as never}
              onMouseEnter={() => setMegaOpen(false)}
              className="rounded-full px-3 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search products"
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:text-gold"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="relative grid h-10 w-10 place-items-center rounded-full transition-colors hover:text-gold"
          >
            <Heart className="h-[18px] w-[18px]" />
            {wishlist.length > 0 && <Badge>{wishlist.length}</Badge>}
          </Link>
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
            className="relative grid h-10 w-10 place-items-center rounded-full transition-colors hover:text-gold"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {itemCount > 0 && <Badge>{itemCount}</Badge>}
          </button>
          <Link
            to="/account"
            className="ml-1 hidden rounded-full border border-border px-3 py-2 text-[11px] font-bold tracking-[0.16em] uppercase transition-colors hover:border-primary hover:text-gold sm:inline-flex"
          >
            Account
          </Link>
        </div>
      </div>

      {/* mega menu */}
      <div
        onMouseEnter={() => setMegaOpen(true)}
        onMouseLeave={() => setMegaOpen(false)}
        className={cn(
          "absolute inset-x-0 top-full hidden origin-top overflow-hidden border-b border-border bg-surface/95 backdrop-blur-xl transition-all duration-300 lg:block",
          megaOpen ? "max-h-[520px] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="grid grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.slug}>
                <Link
                  to="/shop"
                  search={{ category: cat.slug }}
                  onClick={() => setMegaOpen(false)}
                  className="text-xs font-bold tracking-[0.18em] text-gold uppercase"
                >
                  {cat.name}
                </Link>
                <ul className="mt-2 space-y-1.5">
                  {cat.subcategories.map((sub) => (
                    <li key={sub}>
                      <Link
                        to="/shop"
                        search={{ category: cat.slug, sub }}
                        onClick={() => setMegaOpen(false)}
                        className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-eyebrow">Shop by theme</p>
            {THEMES.slice(0, 4).map((theme) => (
              <Link
                key={theme.slug}
                to="/shop"
                search={{ theme: theme.slug }}
                onClick={() => setMegaOpen(false)}
                className="surface-card flex items-center gap-3 rounded-lg p-2 transition-colors hover:border-[color-mix(in_oklab,var(--ember)_50%,transparent)]"
              >
                <img src={theme.image} alt="" className="h-12 w-12 object-contain" />
                <span>
                  <span className="block text-sm font-semibold">{theme.name}</span>
                  <span className="block text-xs text-muted-foreground">{theme.blurb}</span>
                </span>
                <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-ink/80" onClick={() => setMobileOpen(false)} />
          <div className="scroll-slim absolute inset-y-0 left-0 w-[86%] max-w-sm overflow-y-auto border-r border-border bg-surface p-5">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm text-gold">Hollow Hill</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-6 space-y-5">
              {CATEGORIES.map((cat) => (
                <div key={cat.slug}>
                  <Link
                    to="/shop"
                    search={{ category: cat.slug }}
                    onClick={() => setMobileOpen(false)}
                    className="text-xs font-bold tracking-[0.18em] text-gold uppercase"
                  >
                    {cat.name}
                  </Link>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {cat.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        to="/shop"
                        search={{ category: cat.slug, sub }}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="hairline-top flex flex-col gap-3 pt-4 text-sm">
                <Link to="/compare" onClick={() => setMobileOpen(false)}>
                  Compare products
                </Link>
                <Link to="/wishlist" onClick={() => setMobileOpen(false)}>
                  Wishlist
                </Link>
                <Link to="/track" onClick={() => setMobileOpen(false)}>
                  Track order
                </Link>
                <Link to="/account" onClick={() => setMobileOpen(false)}>
                  Account
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute top-1 right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
      {children}
    </span>
  );
}
