import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PRODUCTS, formatPrice } from "@/lib/catalog";
import { useStore } from "@/lib/store";

const SUGGESTIONS = ["Scarecrow", "Animatronic", "Witch", "Tombstone", "Projector", "Mask"];

export function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useStore();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSearchOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen, setSearchOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.theme.includes(q),
    ).slice(0, 8);
  }, [query]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-[75]">
      <div className="absolute inset-0 bg-ink/90 backdrop-blur-sm" onClick={() => setSearchOpen(false)} />
      <div className="relative mx-auto mt-24 w-full max-w-2xl px-4">
        <div className="surface-card overflow-hidden rounded-2xl shadow-lift">
          <div className="flex items-center gap-3 border-b border-border px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search costumes, animatronics, props…"
              aria-label="Search products"
              className="flex-1 bg-transparent py-4 text-sm outline-none"
            />
            <button onClick={() => setSearchOpen(false)} aria-label="Close search">
              <X className="h-4 w-4" />
            </button>
          </div>

          {query.trim() === "" ? (
            <div className="p-4">
              <p className="text-eyebrow">Popular searches</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-primary hover:text-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <p className="p-6 text-sm text-muted-foreground">
              Nothing haunting that name. Try “witch”, “fog” or “tombstone”.
            </p>
          ) : (
            <ul className="scroll-slim max-h-[55vh] divide-y divide-border overflow-y-auto">
              {results.map((p) => (
                <li key={p.id}>
                  <Link
                    to="/product/$slug"
                    params={{ slug: p.slug }}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-charcoal"
                  >
                    <img src={p.image} alt="" className="h-12 w-12 object-contain" />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold">{p.name}</span>
                      <span className="block text-xs text-muted-foreground capitalize">
                        {p.category} · {p.subcategory}
                      </span>
                    </span>
                    <span className="text-sm font-bold">{formatPrice(p.price)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
