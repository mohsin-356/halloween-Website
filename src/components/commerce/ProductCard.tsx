import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { formatPrice, type Product } from "@/lib/catalog";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const wished = isWishlisted(product.id);

  return (
    <article
      className={cn(
        "group surface-card relative flex flex-col overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--ember)_45%,transparent)]",
        className,
      )}
    >
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-[4/5] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_75%,color-mix(in_oklab,var(--ember)_22%,transparent),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-[1.07]"
        />
        {product.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-col items-start gap-1">
            {product.badges.slice(0, 2).map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] text-gold uppercase ring-1 ring-[color-mix(in_oklab,var(--gold)_35%,transparent)]"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </Link>

      <button
        type="button"
        onClick={() => toggleWishlist(product.id)}
        aria-label={wished ? `Remove ${product.name} from wishlist` : `Save ${product.name}`}
        className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-ink/75 ring-1 ring-border transition-colors hover:ring-[color-mix(in_oklab,var(--ember)_60%,transparent)]"
      >
        <Heart
          className={cn("h-4 w-4", wished ? "fill-primary text-primary" : "text-muted-foreground")}
        />
      </button>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-[10px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
          {product.subcategory}
        </p>
        <h3 className="text-sm leading-snug font-semibold text-foreground">
          <Link to="/product/$slug" params={{ slug: product.slug }}>
            {product.name}
          </Link>
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          {product.rating.toFixed(1)}
          <span className="opacity-60">({product.reviewCount})</span>
        </div>
        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-foreground">{formatPrice(product.price)}</span>
            {product.compareAt && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.compareAt)}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => addToCart(product.id, product.sizes ? { size: "M" } : undefined)}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-2 text-[11px] font-bold tracking-wide text-primary-foreground uppercase transition-transform hover:scale-[1.04]"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="surface-card overflow-hidden rounded-xl">
      <div className="skeleton-shimmer aspect-[4/5] w-full" />
      <div className="space-y-2 p-4">
        <div className="skeleton-shimmer h-3 w-1/3 rounded" />
        <div className="skeleton-shimmer h-4 w-4/5 rounded" />
        <div className="skeleton-shimmer h-4 w-1/4 rounded" />
      </div>
    </div>
  );
}
