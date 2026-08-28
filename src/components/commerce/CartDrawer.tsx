import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { formatPrice } from "@/lib/catalog";
import { FREE_SHIPPING_THRESHOLD, useStore } from "@/lib/store";

export function CartDrawer() {
  const { cartOpen, setCartOpen, detailedLines, totals, updateQty, removeLine } = useStore();
  if (!cartOpen) return null;

  const progress = Math.min(100, (totals.subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="animate-in fade-in absolute inset-0 bg-ink/80" onClick={() => setCartOpen(false)} />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-border bg-surface shadow-lift">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase">Your Haunt</h2>
          <button onClick={() => setCartOpen(false)} aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="border-b border-border px-5 py-3">
          <p className="text-xs text-muted-foreground">
            {totals.freeShippingRemaining > 0
              ? `Add ${formatPrice(totals.freeShippingRemaining)} for free US shipping`
              : "Free US shipping unlocked"}
          </p>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-charcoal">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,var(--ember),var(--gold))] transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {detailedLines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Your cart is empty. The night is still young.
            </p>
            <Link
              to="/shop"
              onClick={() => setCartOpen(false)}
              className="rounded-full bg-primary px-5 py-2.5 text-[11px] font-bold tracking-[0.16em] text-primary-foreground uppercase"
            >
              Start shopping
            </Link>
          </div>
        ) : (
          <>
            <ul className="scroll-slim flex-1 divide-y divide-border overflow-y-auto px-5">
              {detailedLines.map(({ line, product }, index) => (
                <li key={`${product.id}-${index}`} className="flex gap-3 py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 w-20 shrink-0 rounded-lg bg-charcoal object-contain p-2"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {[line.size, line.color].filter(Boolean).join(" · ") || product.subcategory}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center rounded-full border border-border">
                        <button
                          onClick={() => updateQty(index, line.qty - 1)}
                          aria-label="Decrease quantity"
                          className="grid h-7 w-7 place-items-center"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-xs">{line.qty}</span>
                        <button
                          onClick={() => updateQty(index, line.qty + 1)}
                          aria-label="Increase quantity"
                          className="grid h-7 w-7 place-items-center"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeLine(index)}
                        aria-label={`Remove ${product.name}`}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <span className="ml-auto text-sm font-bold">
                        {formatPrice(product.price * line.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="space-y-2 border-t border-border px-5 py-4 text-sm">
              <Row label="Subtotal" value={formatPrice(totals.subtotal)} />
              {totals.discount > 0 && (
                <Row label="Discount" value={`-${formatPrice(totals.discount)}`} accent />
              )}
              <Row
                label="Shipping"
                value={totals.shipping === 0 ? "Free" : formatPrice(totals.shipping)}
              />
              <Row label="Estimated tax" value={formatPrice(totals.tax)} />
              <div className="hairline-top flex items-center justify-between pt-3 text-base font-bold">
                <span>Total</span>
                <span>{formatPrice(totals.total)}</span>
              </div>
              <Link
                to="/checkout"
                onClick={() => setCartOpen(false)}
                className="mt-2 block rounded-full bg-primary py-3 text-center text-[11px] font-bold tracking-[0.18em] text-primary-foreground uppercase"
              >
                Secure checkout
              </Link>
              <Link
                to="/cart"
                onClick={() => setCartOpen(false)}
                className="block py-1 text-center text-xs text-muted-foreground hover:text-foreground"
              >
                View full cart
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className={accent ? "text-gold" : undefined}>{value}</span>
    </div>
  );
}
