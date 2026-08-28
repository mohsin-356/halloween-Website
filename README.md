# Shadow Bloom Commerce

You are acting as a senior product designer, UX architect, creative director, senior frontend engineer, ecommerce architect, motion designer, and conversion-rate optimization specialist.

Build a COMPLETE, HIGH-END, PRODUCTION-QUALITY HALLOWEEN E-COMMERCE PLATFORM for the USA market.

This is NOT a simple landing page.

This is NOT a template customization.

This is NOT a generic Shopify clone.

The product must feel like a premium seasonal commerce brand combined with a cinematic Halloween universe.

The final experience should feel:

CINEMATIC

PREMIUM

DARK

SPOOKY

MODERN

IMMERSIVE

FAST

TRUSTWORTHY

HIGH-CONVERTING

PRODUCTION-READY

The website should look like it was designed by a professional ecommerce product team, not generated from a generic website template.

==================================================

1. CORE PRODUCT VISION

==================================================

The website is a premium online Halloween store targeting customers in the United States.

Customers should be able to:

- discover Halloween products

- browse categories

- search products

- filter products

- compare products

- view detailed product information

- add products to cart

- save products to wishlist

- checkout

- track orders

- manage their account

- discover Halloween collections

- create Halloween outfits

- plan Halloween decorations

- discover seasonal deals

- participate in a Halloween product quiz

- explore themed collections

The system should be designed so it can later connect to a real backend, payment provider, inventory system, shipping provider, CMS, analytics platform, and AI services.

Do not build the architecture in a way that requires rewriting the frontend later.

==================================================

2. DESIGN LANGUAGE

==================================================

Design the entire experience around a premium Halloween visual system.

PRIMARY COLORS:

Deep Black: #050505

Black Surface: #0A0A0A

Charcoal: #111111

Soft Charcoal: #171717

Halloween Orange: #FF6A00

Bright Orange: #FF7A00

Golden Yellow: #FFC107

Warm Gold: #FFB000

Cream: #F5F1E8

Muted Gray: #9A9A9A

Dark Red: #7A1200

The website must be predominantly black.

Orange and gold are accent colors.

Do NOT turn every section orange.

Do NOT use excessive neon.

Do NOT make it look like a gaming website.

The visual direction should combine:

- premium fashion ecommerce

- luxury retail UI

- horror movie poster art direction

- cinematic Halloween photography

- modern editorial layouts

- sophisticated dark UI

Use contrast aggressively but tastefully.

==================================================

3. DESIGN PRINCIPLE

==================================================

Use this principle everywhere:

ATMOSPHERE AROUND COMMERCE.

The Halloween decorations create the atmosphere.

The shopping interface remains clean.

Hero:

Highly cinematic.

Campaign sections:

Highly atmospheric.

Product areas:

Clean and conversion-focused.

Checkout:

Extremely clean and distraction-free.

Do NOT place random Halloween objects everywhere.

Every decorative asset must have a reason for being there.

==================================================

4. TYPOGRAPHY SYSTEM

==================================================

Use a sophisticated modern sans-serif for the core interface.

Preferred:

Inter

Manrope

DM Sans

Use a horror/display font only for:

- hero headline

- Halloween campaign headings

- special promotional titles

- seasonal marketing graphics

A display font similar in character to Butcherman can be used.

Do NOT use horror typography for:

- product names

- navigation

- prices

- descriptions

- checkout

- forms

- body text

Maintain excellent readability.

==================================================

5. PROVIDED HALLOWEEN ASSETS

==================================================

IMPORTANT:

Use the provided Halloween visual assets intentionally and extensively throughout the website.

Do not ignore the assets.

Do not replace them with unrelated stock imagery.

Do not randomly duplicate the same asset everywhere.

Create an organized asset system.

Suggested structure:

assets/

  halloween/

    hero/

    pumpkins/

    characters/

    scarecrow/

    clouds/

    smoke/

    moon/

    bats/

    spiders/

    webs/

    ghosts/

    haunted-houses/

    trees/

    candles/

    lanterns/

    graveyard/

    props/

    leaves/

    embers/

    buttons/

    decorative/

    social/

Use the supplied assets according to their visual purpose.

==================================================

6. HALLOWEEN ASSET ORCHESTRATION

==================================================

MAP THE PROVIDED ASSETS TO SPECIFIC UI ROLES.

Hero artwork:

Use as cinematic layered environment.

Pumpkin-headed scarecrow:

Use as an important foreground/secondary hero visual and seasonal campaign character.

Large glowing pumpkin:

Use in promotional campaign sections, collection headers, and special CTA sections.

Black/orange/gold cloud assets:

Use as atmospheric background layers and parallax elements.

Spider-web button:

Use for premium seasonal campaign CTAs.

Minimal Halloween button:

Use as secondary marketing CTA where appropriate.

Haunted house:

Use in hero, collection banners, outdoor decoration campaigns, and footer atmosphere.

Moon:

Use behind major Halloween campaign elements.

Bats:

Use sparingly in hero and transition sections.

Spider webs:

Use in selected section corners and campaign cards.

Ghosts:

Use in seasonal campaigns and collection visuals.

Candles and lanterns:

Use in atmospheric promotional areas.

Leaves:

Use as subtle foreground particles.

Embers:

Use very sparingly as ambient animation.

Smoke:

Use to transition between major sections.

Do not use decorative image buttons for regular functional controls such as Add to Cart.

Functional buttons must remain HTML/CSS for accessibility and responsiveness.

==================================================

7. ASSET LAYERING SYSTEM

==================================================

Build a reusable Halloween atmosphere system.

Create reusable components such as:

HalloweenAtmosphere

ParallaxLayer

CloudLayer

SmokeLayer

FloatingBats

FloatingEmbers

HalloweenParticles

DecorativeWeb

HalloweenSectionBackground

The system must support multiple independent layers.

Example:

Layer 1:

Very distant black atmospheric cloud

Layer 2:

Dark orange cloud

Layer 3:

Gold/orange cloud

Layer 4:

Smoke

Layer 5:

Small particles

Layer 6:

Foreground decorative elements

Each layer must have independently configurable:

- speed

- opacity

- scale

- position

- depth

- blur

- movement direction

==================================================

8. HERO EXPERIENCE

==================================================

Build a cinematic full-screen hero.

The hero should feel like the opening shot of a Halloween movie.

BACKGROUND:

Deep black atmosphere.

Layered clouds.

Large glowing moon.

Haunted house.

Twisted trees.

Bats.

Smoke.

Subtle embers.

FOREGROUND:

Pumpkins.

Optional pumpkin-headed scarecrow.

TEXT:

THE NIGHT BEGINS HERE

Subheading:

Everything you need to make Halloween unforgettable.

PRIMARY CTA:

SHOP HALLOWEEN

SECONDARY CTA:

EXPLORE COLLECTION

The text must remain highly readable.

Do not allow decorative graphics to overlap important text.

==================================================

9. HERO PARALLAX

==================================================

Create multi-layer parallax.

On desktop:

Background movement:

very slow

Cloud movement:

slow

Moon:

subtle

House:

medium-slow

Bats:

slightly faster

Foreground:

slightly faster

Use transform/opacity based motion.

Avoid expensive per-frame JavaScript where possible.

Respect prefers-reduced-motion.

On mobile:

Reduce parallax complexity.

Do not sacrifice performance.

==================================================

10. HERO MICRO-INTERACTIONS

==================================================

On load:

- atmospheric fade-in

- headline reveal

- CTA reveal

- moon glow

- slow cloud movement

- subtle particles

On mouse movement:

Create a very subtle depth shift.

Do not create aggressive 3D movement.

CTA hover:

- slight lift

- warm glow

- arrow movement

==================================================

11. ANNOUNCEMENT BAR

==================================================

Create a thin premium announcement bar.

Example:

🎃 HALLOWEEN 2026 COLLECTION IS LIVE — FREE US SHIPPING ON ORDERS $75+

Secondary action:

SHOP NOW →

Optional countdown.

Allow close/dismiss.

Keep it elegant.

==================================================

12. HEADER SYSTEM

==================================================

Create a premium sticky header.

Desktop:

Logo

Shop

Costumes

Decorations

Outdoor

Indoor

Party

Accessories

Right:

Search

Wishlist

Account

Cart

Cart should show item count.

Initially:

Transparent / cinematic overlay.

After scrolling:

Dark glass / charcoal sticky state.

Use:

backdrop blur

subtle border

smooth transition

Header must remain highly usable.

==================================================

13. MEGA MENU

==================================================

Create a premium visual mega menu.

Columns:

COSTUMES

- Men's

- Women's

- Kids

- Couples

- Group

DECORATIONS

- Indoor

- Outdoor

- Yard

- Lighting

- Props

PARTY

- Tableware

- Cups

- Plates

- Invitations

- Party Props

ACCESSORIES

- Masks

- Makeup

- Hats

- Gloves

- Costume Accessories

Include a featured campaign image.

Include:

SHOP THE COLLECTION →

Mega menu animation:

fade + translate + slight scale

Do not make it jumpy.

==================================================

14. HOME PAGE ARCHITECTURE

==================================================

Build the homepage in this exact experience flow:

01 Announcement Bar

02 Cinematic Hero

03 Shop by Category

04 Halloween Favorites

05 Spooky Countdown Sale

06 Shop by Theme

07 Build Your Halloween Look

08 Outdoor Nightmare Experience

09 Indoor Halloween Collection

10 Best Sellers

11 Halloween Quiz

12 Reviews

13 UGC / Social Proof

14 Newsletter

15 Premium Footer

Use strong visual rhythm between sections.

Alternate:

dramatic section

clean section

dramatic section

clean section

Do not make everything visually loud.

==================================================

15. SHOP BY CATEGORY

==================================================

Create large editorial category cards.

Categories:

Costumes

Decorations

Outdoor Décor

Indoor Décor

Pumpkins

Party Supplies

Props

Accessories

Each category card contains:

image

title

short description

product count

arrow

Hover:

subtle image zoom

dark overlay shift

orange/gold glow

arrow animation

Use different supplied assets around the composition.

==================================================

16. PRODUCT SYSTEM

==================================================

Create a realistic product catalog architecture.

At minimum generate:

50+ realistic Halloween products.

Categories:

Costumes

Kids Costumes

Couples Costumes

Group Costumes

Halloween Decorations

Outdoor Decorations

Indoor Decorations

Lighting

Pumpkins

Props

Masks

Makeup

Party Supplies

Accessories

Products need realistic US pricing.

Example price ranges:

$14.99

$24.99

$39.99

$59.99

$79.99

$129.99

$199.99

$299.99

Do not make every product cheap.

Include premium products.

==================================================

17. PRODUCT DATA MODEL

==================================================

Each product should support:

id

name

slug

shortDescription

description

price

compareAtPrice

discount

images

thumbnail

category

subcategory

tags

rating

reviewCount

sizes

colors

variants

stock

sku

isFeatured

isBestSeller

isNew

isLimited

isSale

isOutdoor

isIndoor

theme

shippingInfo

materials

dimensions

Structure this cleanly so real API data can replace mock data later.

==================================================

18. PRODUCT CARD

==================================================

Product cards should NOT look generic.

Use:

dark charcoal surface

subtle border

large image

clean typography

gold/orange price emphasis

Card elements:

Wishlist

Quick View

Product image

Badge

Product name

Rating

Price

Discount

Add to Cart

Badges:

NEW

BEST SELLER

LIMITED

SALE

LOW STOCK

Hover:

image zoom 1.03

card lift

soft glow

secondary controls reveal

Keep animation subtle.

==================================================

19. PRODUCT QUICK VIEW

==================================================

Create a sophisticated Quick View modal.

Show:

image

product name

rating

price

discount

short description

variants

quantity

Add to Cart

Buy Now

View Full Details

Modal should animate smoothly.

Keyboard accessible.

Close on Escape.

==================================================

20. PRODUCT LISTING PAGE

==================================================

Create a powerful collection/shop page.

Top:

breadcrumb

heading

description

product count

sorting

Desktop:

left filter panel

right product grid

Mobile:

Filter button

Sort button

drawer-based filters

Filters:

Category

Price

Size

Color

Rating

Theme

Indoor/Outdoor

Availability

Discount

Age

Sorting:

Featured

Best Selling

Newest

Price Low to High

Price High to Low

Top Rated

==================================================

21. SEARCH EXPERIENCE

==================================================

Build a full search overlay.

Search should feel premium.

When clicked:

Full-width or large overlay appears.

Header:

SEARCH HALLOWEEN

Input.

Show:

Recent Searches

Trending Searches

Suggested Categories

Suggested Products

Trending:

Halloween Costumes

Outdoor Halloween Decorations

Pumpkin Decorations

Kids Halloween Costumes

Halloween Party Supplies

As the user types:

show instant results.

Include no-result state.

==================================================

22. HALLOWEEN FAVORITES

==================================================

Create:

HALLOWEEN FAVORITES

Tabs:

Trending

Best Sellers

New Arrivals

Limited Edition

Use horizontal scrolling on mobile.

Product card system should remain consistent.

==================================================

23. SPOOKY COUNTDOWN SALE

==================================================

Create a cinematic seasonal sale section.

Headline:

THE SPOOKY SALE

Countdown:

DAYS

HOURS

MINUTES

SECONDS

Add selected products.

Background:

black/orange/gold clouds.

Use subtle glow.

Do not overuse animation.

==================================================

24. SHOP BY THEME

==================================================

Create:

CHOOSE YOUR NIGHTMARE

Themes:

Vampire

Witch

Zombie

Skeleton

Ghost

Pumpkin

Haunted House

Creepy Crawlers

Classic Halloween

Cards should feel like mini movie posters.

Each card contains:

visual

theme title

short description

Shop Theme →

==================================================

25. HALLOWEEN OUTFIT BUILDER

==================================================

Create a multi-step interactive shopping experience.

TITLE:

BUILD YOUR HALLOWEEN LOOK

STEP 1:

Who are you dressing?

Men

Women

Kids

Couples

Groups

STEP 2:

Choose your style.

Vampire

Witch

Zombie

Skeleton

Ghost

Devil

Classic Halloween

STEP 3:

Budget.

Under $50

$50–$100

$100–$200

$200+

STEP 4:

Show a curated outfit.

Example:

Your Vampire Look

Costume

Cape

Fangs

Makeup

Gloves

Display:

total price

savings

individual prices

Buttons:

SHOP THE LOOK

ADD COMPLETE LOOK TO CART

Make this feel like an actual premium product recommendation experience.

==================================================

26. HALLOWEEN QUIZ

==================================================

Create:

FIND YOUR PERFECT HALLOWEEN

Interactive quiz.

Questions:

How scary do you want to be?

Fun

Spooky

Terrifying

Where are you decorating?

Indoor

Outdoor

Party

What is your budget?

Under $50

$50–$100

$100–$200

$200+

Result:

Your Halloween Style

Then recommend relevant products.

Animate the progress smoothly.

==================================================

27. OUTDOOR NIGHTMARE EXPERIENCE

==================================================

Create an immersive section:

TURN YOUR YARD INTO A NIGHTMARE

Use:

haunted house

moon

graveyard

tombstones

trees

ghosts

pumpkins

fog

bats

Offer:

Small Yard

Medium Yard

Large Yard

Show recommended bundles.

Example:

HAUNTED YARD PACK

2 Tombstones

2 Skeletons

1 Giant Spider

3 Ghosts

Orange Lighting

Show:

Bundle Price

Save amount

CTA:

BUILD MY YARD →

==================================================

28. INDOOR HALLOWEEN EXPERIENCE

==================================================

Create:

BRING HALLOWEEN INSIDE

Categories:

Living Room

Dining Table

Windows

Walls

Entryway

Party Table

Use:

candles

lanterns

pumpkins

spider webs

ghosts

leaves

Keep the section elegant.

==================================================

29. PRODUCT DETAIL PAGE

==================================================

Create a premium PDP.

Left side:

large gallery

thumbnail gallery

zoom

navigation

optional video section

Right:

product name

rating

review count

price

compare-at price

discount

stock status

size

color

variants

quantity

Add to Cart

Buy Now

Shipping information

Trust indicators

Example:

Fast US Shipping

Secure Checkout

Easy Returns

Tracked Delivery

==================================================

30. PRODUCT INFORMATION

==================================================

Below the purchase section:

Description

Details

Materials

Dimensions

Shipping

Returns

Reviews

Desktop:

tabs

Mobile:

accordions

==================================================

31. COMPLETE YOUR HALLOWEEN

==================================================

Create product cross-selling.

Title:

COMPLETE YOUR HALLOWEEN

Example:

Mask

Cape

Gloves

Makeup

Prop

Show:

individual total

bundle price

savings

ADD ALL TO CART

This should work as a bundle UI.

==================================================

32. REVIEWS

==================================================

Create:

LOVED BY HALLOWEEN FANS

Overall rating:

4.8 / 5

Include:

Verified Buyer

Filters:

All

With Photos

With Videos

5 Star

4 Star

3 Star

Review cards should feel premium.

Do not create fake claims presented as real business data.

Use clearly marked demo content where appropriate.

==================================================

33. USER GENERATED CONTENT

==================================================

Create:

#HALLOWEENWITHUS

Grid of Halloween photos.

Hover:

view

Instagram-style overlay

CTA:

SHOW US YOUR HALLOWEEN →

==================================================

34. CART DRAWER

==================================================

Create a premium right-side cart drawer.

Title:

YOUR HAUNTED CART 👻

Show:

product image

name

variant

quantity

price

remove

Free shipping progress.

Example:

$18 AWAY FROM FREE SHIPPING

When reached:

FREE SHIPPING UNLOCKED 🎃

Then:

YOU MAY ALSO LIKE

Show related products.

Primary CTA:

CHECKOUT

Secondary:

CONTINUE SHOPPING

==================================================

35. WISHLIST

==================================================

Create:

MY HALLOWEEN WISHLIST

Display:

image

name

rating

price

availability

discount

Add to Cart

Remove

==================================================

36. ACCOUNT

==================================================

Create:

MY ACCOUNT

Navigation:

Overview

Orders

Wishlist

Addresses

Payment Methods

Recently Viewed

Returns

Account Settings

Build reusable account layouts.

==================================================

37. ORDER TRACKING

==================================================

Create:

TRACK YOUR HALLOWEEN ORDER

Fields:

Order Number

Email

Display tracking timeline:

Order Confirmed

Processing

Shipped

Out for Delivery

Delivered

Use animated progress.

==================================================

38. CHECKOUT

==================================================

Checkout must be intentionally simpler.

Do NOT use heavy Halloween animation here.

Stages:

Information

Shipping

Payment

Review

Show:

Secure Checkout

Encrypted Payment

Tracked Shipping

Easy Returns

Support UI placeholders for:

Visa

Mastercard

Amex

Discover

PayPal

Apple Pay

Google Pay

Architecture must be ready to integrate with Stripe or another payment platform later.

==================================================

39. TRUST SYSTEM

==================================================

Use tasteful trust indicators throughout the commerce experience.

Examples:

Fast US Shipping

Secure Checkout

Easy Returns

Tracked Orders

Customer Support

Never invent fake certifications.

Never invent fake customer counts.

Never present demo data as real business data.

==================================================

40. NEWSLETTER

==================================================

Create a premium campaign section.

Headline:

GET READY FOR HALLOWEEN 🎃

Subheading:

Get exclusive Halloween deals, new drops & spooky inspiration.

Email input.

CTA:

JOIN THE HAUNT

Secondary message:

10% OFF YOUR FIRST ORDER

Make it feel like a premium email campaign section.

==================================================

41. FOOTER

==================================================

Create a large premium footer.

Columns:

SHOP

Costumes

Decorations

Outdoor

Indoor

Party

Accessories

CUSTOMER CARE

Contact

Shipping

Returns

FAQ

Track Order

COMPANY

About

Our Story

Privacy

Terms

NEWSLETTER

Social:

Facebook

Instagram

X

YouTube

Add subtle atmospheric Halloween artwork.

Do not make the footer cluttered.

==================================================

42. MOBILE EXPERIENCE

==================================================

Treat mobile as a first-class experience.

Do not simply shrink desktop.

Mobile must have:

compact header

sticky shopping controls where useful

touch-friendly targets

horizontal category scrolling

filter drawer

sort drawer

swipe product galleries

mobile-friendly checkout

sticky Add to Cart on product pages where appropriate

Decorative animations should be reduced on mobile.

==================================================

43. RESPONSIVE BREAKPOINT STRATEGY

==================================================

Support:

mobile

tablet

desktop

large desktop

Test layouts around:

360px

390px

430px

768px

1024px

1280px

1440px

1920px

Never allow:

horizontal overflow

text clipping

button overlap

broken imagery

overlapping decorations

==================================================

44. MOTION SYSTEM

==================================================

Build a coherent animation language.

Page entrance:

fade + translate

Section reveal:

soft opacity + vertical movement

Buttons:

small lift

Cards:

subtle lift

Images:

small zoom

Mega menu:

fade + slide

Cart:

slide from right

Modal:

scale + fade

Bats:

slow floating motion

Clouds:

very slow movement

Smoke:

slow drift

Particles:

subtle movement

Everything should feel premium and smooth.

Do not use excessive bounce animations.

==================================================

45. ACCESSIBILITY

==================================================

Implement:

semantic HTML

proper heading hierarchy

ARIA labels

accessible buttons

keyboard navigation

focus states

accessible dialogs

image alt text

sufficient contrast

prefers-reduced-motion

Do not sacrifice usability for visual effects.

==================================================

46. PERFORMANCE

==================================================

This website contains many large Halloween images.

Performance is critical.

Use:

lazy loading

responsive image sizes

WebP/AVIF where possible

image compression

code splitting

deferred non-critical effects

efficient animations

CSS transforms

opacity-based effects

content visibility where appropriate

Do not run expensive animation loops for every decorative element.

Do not load every image at maximum resolution immediately.

==================================================

47. SEO

==================================================

Make every major page SEO-ready.

Pages:

/

 /shop

 /costumes

 /decorations

 /outdoor

 /indoor

 /party

 /accessories

 /collection/[slug]

 /product/[slug]

 /search

 /wishlist

 /cart

 /checkout

 /account

 /track-order

 /about

 /contact

 /faq

Support:

unique page title

meta description

canonical URL

Open Graph

structured product data

semantic headings

clean URLs

==================================================

48. ROUTING

==================================================

All important navigation elements must actually work.

No fake dead links.

No buttons that visually work but do nothing.

Every major CTA should navigate to the appropriate experience.

==================================================

49. SEARCH + FILTER STATE

==================================================

Search, filters, sort, wishlist, and cart should have proper application state.

Examples:

Search term

Selected category

Selected filters

Sort order

Cart quantity

Wishlist state

Product variant

Selected size

Selected color

State should remain consistent while navigating.

==================================================

50. CART STATE

==================================================

Cart should persist during the session.

Support:

add item

remove item

increase quantity

decrease quantity

variant selection

subtotal

shipping

estimated total

coupon

free shipping threshold

==================================================

51. COUPON SYSTEM

==================================================

Prepare coupon architecture.

Example demo coupons:

SPOOKY10

BOO15

HALLOWEEN20

FIRSTBOO

Support:

percentage discount

minimum order

expiration

category restrictions

Clearly label demo coupons.

==================================================

52. EMPTY STATES

==================================================

Design beautiful empty states.

Empty cart:

YOUR HAUNTED CART IS EMPTY

Empty wishlist:

NO SPOOKY FAVORITES YET

No search results:

NOTHING HAUNTED CAME UP

No orders:

YOUR HALLOWEEN ADVENTURE HASN'T STARTED YET

Use small Halloween illustrations.

==================================================

53. NOTIFICATION SYSTEM

==================================================

Create elegant toast notifications.

Examples:

Added to your haunted cart 🎃

Added to wishlist ❤️

Removed from wishlist

Coupon applied

Product removed

Order updated

Do not make notifications huge.

==================================================

54. ADMIN-READY DATA ARCHITECTURE

==================================================

Structure the product system so it can later connect to:

Products

Categories

Collections

Inventory

Orders

Customers

Coupons

Reviews

Shipping

Payments

Do not hard-code product UI in dozens of places.

Use reusable data models.

==================================================

55. AI-READY FEATURES

==================================================

Prepare modular architecture for future AI functionality.

Feature 1:

AI HALLOWEEN STYLIST

Example input:

"I need a scary vampire costume under $80."

Return matching products.

Feature 2:

AI DECORATION PLANNER

Example:

"I have a small front yard."

Return recommendations.

These should be architected as modular future integrations.

Do not pretend an AI service is connected if it isn't.

==================================================

56. ANALYTICS READY

==================================================

Prepare event naming architecture for future analytics.

Events could include:

page_view

product_view

search

filter_used

wishlist_added

add_to_cart

remove_from_cart

checkout_started

purchase_completed

quiz_started

quiz_completed

outfit_builder_started

outfit_builder_completed

Do not install unnecessary analytics unless required.

==================================================

57. DESIGN SYSTEM

==================================================

Create reusable design tokens:

colors

spacing

radius

shadows

typography

transitions

z-index layers

Create consistent component primitives.

Avoid random styles.

==================================================

58. COMPONENT ARCHITECTURE

==================================================

Create reusable components such as:

AppShell

AnnouncementBar

Header

MegaMenu

MobileMenu

SearchOverlay

HeroSection

HalloweenAtmosphere

CloudLayer

SmokeLayer

FloatingBats

CategorySection

CategoryCard

ProductCard

ProductGrid

ProductQuickView

FilterPanel

SortControl

CountdownSection

ThemeCard

ThemeGrid

OutfitBuilder

HalloweenQuiz

BundleBuilder

ReviewSection

UGCGallery

NewsletterSection

Footer

CartDrawer

WishlistDrawer

ProductGallery

ProductPurchasePanel

TrustBadges

OrderTimeline

EmptyState

ToastSystem

Keep components modular.

Do not build one massive page component.

==================================================

59. CODE QUALITY

==================================================

Write clean production-quality TypeScript.

Avoid:

duplicated logic

massive components

magic numbers

hard-coded product markup

unnecessary dependencies

unused components

unused CSS

broken imports

Keep code readable and maintainable.

==================================================

60. PRODUCT EXPERIENCE PRIORITY

==================================================

Prioritize the following order:

1. Product discovery

2. Product understanding

3. Product confidence

4. Add to cart

5. Checkout

6. Trust

7. Visual delight

Never sacrifice checkout clarity for visual design.

==================================================

61. VISUAL HIERARCHY

==================================================

The overall experience should alternate between:

Cinematic

Clean

Cinematic

Editorial

Clean

Interactive

Cinematic

Social proof

Conversion

This creates rhythm.

==================================================

62. HALLOWEEN ATMOSPHERE RULES

==================================================

Use assets with restraint.

Maximum visual drama:

Hero

Campaign banners

Seasonal sections

Medium drama:

Category sections

Theme sections

Low drama:

Product grids

Product detail

Cart

Minimal drama:

Checkout

==================================================

63. NO GENERIC DESIGN

==================================================

Do NOT use:

generic purple gradients

generic SaaS cards

white dashboards

random glassmorphism

default Bootstrap grids

generic stock Halloween illustrations

generic ecommerce templates

random rounded cards everywhere

Do not make every component rounded.

Use shapes intentionally.

==================================================

64. CATALOG VISUAL STYLE

==================================================

Product image containers should feel premium.

Use dark studio-style presentation.

When product images have transparent backgrounds:

allow them to float naturally.

When images need backgrounds:

use:

deep black

charcoal

dark warm gray

Add very subtle orange glow only where appropriate.

==================================================

65. PROMOTIONAL BUTTON SYSTEM

==================================================

Major seasonal campaign CTAs can use provided Halloween artwork.

Examples:

SHOP HALLOWEEN

EXPLORE COLLECTION

READ MORE

DISCOVER MORE

However:

functional ecommerce buttons such as:

ADD TO CART

BUY NOW

CHECKOUT

APPLY COUPON

must use real accessible HTML/CSS controls.

==================================================

66. FOOTER ATMOSPHERE

==================================================

The footer may use:

dark trees

small pumpkins

tiny bats

embers

subtle clouds

Keep all footer text readable.

==================================================

67. ERROR STATES

==================================================

Design:

404

500

Network error

Product unavailable

Payment error

Search error

Use the Halloween visual language but keep the message clear.

==================================================

68. LOADING STATES

==================================================

Build premium skeleton states.

Avoid giant blank pages.

Product loading:

image skeleton

title skeleton

price skeleton

Use subtle movement only.

==================================================

69. FINAL HOMEPAGE QUALITY

==================================================

The homepage should immediately communicate:

THIS IS A PREMIUM HALLOWEEN BRAND.

The first 5 seconds must communicate:

Halloween atmosphere

product quality

trust

clear shopping CTA

==================================================

70. FINAL UX JOURNEY

==================================================

The complete ideal journey is:

LAND

↓

FEEL THE ATMOSPHERE

↓

DISCOVER CATEGORY

↓

EXPLORE PRODUCTS

↓

FILTER / SEARCH

↓

VIEW PRODUCT

↓

BUILD LOOK / BUNDLE

↓

ADD TO CART

↓

DISCOVER CROSS-SELL

↓

CHECKOUT

↓

TRACK ORDER

↓

RETURN FOR MORE

==================================================

71. FINAL IMPLEMENTATION STANDARD

==================================================

Do not stop after building the hero.

Do not create fake sections with placeholder boxes.

Do not leave navigation disconnected.

Do not create static buttons that do nothing.

Do not use repeated placeholder content.

Build the experience as a cohesive system.

The final website should feel like a real premium US Halloween ecommerce platform.

==================================================

72. FINAL QUALITY CHECK

==================================================

Before finishing, inspect the entire application for:

- visual consistency

- responsive behavior

- accessibility

- performance

- spacing

- typography

- asset usage

- image loading

- navigation

- cart state

- wishlist state

- search state

- filter state

- mobile usability

- CTA functionality

- empty states

- loading states

- error states

- SEO structure

Fix issues rather than simply mentioning them.

==================================================

73. FINAL CREATIVE DIRECTION

==================================================

The most important design goal:

DO NOT BUILD:

"A normal ecommerce website with Halloween decorations."

BUILD:

"A premium Halloween world that happens to be an ecommerce store."

The atmosphere should feel cinematic and memorable.

The shopping experience should feel modern and frictionless.

The visual assets should feel art-directed.

Every animation should have a purpose.

Every section should have hierarchy.

Every interaction should feel intentional.

Every CTA should support conversion.

Build the complete system with this philosophy.
ill uploade all the assests so animate these assests like parallex animations with blackish golden yellow clouds also with these image animatre and parallex aniamtions on it

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2896bf4c-c7f0-45e8-b00f-68c5c4ffa032).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
