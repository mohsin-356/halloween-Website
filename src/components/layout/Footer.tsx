import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { HALLOWEEN } from "@/lib/halloween-assets";
import { CATEGORIES } from "@/lib/catalog";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="hairline-top relative mt-24 overflow-hidden bg-surface/70">
      <img
        src={HALLOWEEN.structures.graveyardRow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full opacity-25"
      />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="flex items-center gap-2">
            <img src={HALLOWEEN.pumpkins.glowing} alt="" className="h-10 w-10 object-contain" />
            <span className="font-display text-base text-gold">Hollow Hill</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Designed-in-house Halloween costumes, decor and animatronics. Limited seasonal runs,
            shipped across the USA.
          </p>
          <form
            className="mt-6 flex max-w-sm gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (email.includes("@")) setSent(true);
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@haunt.com"
              aria-label="Email address"
              className="min-w-0 flex-1 rounded-full border border-border bg-ink px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <button className="rounded-full bg-primary px-4 py-2.5 text-[11px] font-bold tracking-[0.16em] text-primary-foreground uppercase">
              Join
            </button>
          </form>
          {sent && <p className="mt-2 text-xs text-gold">You're on the list. Watch the shadows.</p>}
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <FooterCol title="Shop">
            {CATEGORIES.slice(0, 5).map((c) => (
              <Link key={c.slug} to="/shop" search={{ category: c.slug }}>
                {c.name}
              </Link>
            ))}
          </FooterCol>
          <FooterCol title="Help">
            <Link to="/track">Track order</Link>
            <Link to="/account">Account</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/compare">Compare</Link>
          </FooterCol>
          <FooterCol title="Company">
            <span>About Hollow Hill</span>
            <span>Sustainability</span>
            <span>Careers</span>
            <span>Press</span>
          </FooterCol>
          <FooterCol title="Policies">
            <span>30-day returns</span>
            <span>Shipping</span>
            <span>Privacy</span>
            <span>Terms</span>
          </FooterCol>
        </div>
      </div>
      <div className="hairline-top relative mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>© {new Date().getFullYear()} Hollow Hill Supply Co. All rights reserved.</span>
        <span>Secure checkout · Visa · Mastercard · Amex · Apple Pay</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-eyebrow">{title}</p>
      <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground [&_a:hover]:text-foreground">
        {children}
      </div>
    </div>
  );
}
