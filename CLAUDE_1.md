# Project Brief — Judith Kelmanson / Applied EdTech Websites

This file carries context from planning done in a separate Claude session (Cowork), so a fresh Claude Code session has it immediately. Copy this same file into the root of BOTH repo folders (appliededtech-site and judithkelmanson-site) before starting Claude Code in either one.

## What we're building
Two separate static HTML/CSS/JS sites (no framework, no CMS, hand-built), one repo each:
- **appliededtech-site** → will serve appliededtech.com — the commercial front door: consulting, PD, workshops, courses, newsletter for primary teachers.
- **judithkelmanson-site** → will serve judithkelmanson.com — simpler personal credibility site (bio, about, links out to Applied EdTech). Not used for invoicing/contracts.

Rule of thumb: Judith Kelmanson = one-to-one personal trust touchpoints. Applied EdTech = public-facing / money / contract touchpoints. Both are one person (sole trader, ABN), described as "Applied EdTech, led by Judith Kelmanson."

## Brand identity (from the confirmed brand guide)
**Formal line:** "Applied EdTech — practical AI & tech PD for primary teachers, led by Judith Kelmanson."
**Brand promise:** "Save Time · Spark Creativity · Add Depth & Clarity · Amplify Excellent Teaching."
**Working tagline (leading candidate, not fully finalised):** "Practical AI & Tech Skills for Schools and Teachers."
**Audience:** teachers + school leaders. **Positioning:** confident authority, classroom-tested. **Imagery:** warm/real photography, never stock.

**Colour palette — "Bright Berry"**
| Colour | Hex | Role |
|---|---|---|
| Magenta | #E01A6F | Primary accent — buttons/large text only (4.6:1 on white) |
| Deep Violet | #3B2D6B | Anchor — headlines & body (11.8:1 on white, safe for all text) |
| Charcoal | #1F1F2E | Alt text / grounding (16.2:1 on white, safe for all text) |
| Tangerine | #FF7A33 | Energy / CTA — use dark text on top, not white |
| Lime | #A9CC3E | Fresh/growth accent — needs a dark backdrop (8.8:1 on charcoal) |

**Typography:** Playfair Display for brand/marketing headlines, Inter for UI/body text.

**Logo:** wordmark "Applied EdTech" (Playfair Display weight 500, Deep Violet, thin Lime rule beneath, no all-caps, no icon) is Applied EdTech's alone. Compact marks use "AE" initials (stacked badge for square spaces, split lockup for horizontal spaces — magenta divider). The Judith Kelmanson personal site uses plain type ("Judith Kelmanson"), no logo mark.

Full brand guide PDF exists (Applied EdTech Brand Guide.pdf) if deeper detail is ever needed — this summary covers what's needed to start building.

## Hosting & infrastructure plan (already decided)
- **Hosting:** GitHub Pages, one repo per site, both public repos. Push to the repo's default branch → live in ~1 minute, no extra service needed.
- **DNS/redirects:** Cloudflare (free) handles DNS for all domains — not hosting. judithkelmanson.com.au and appliededtech.com.au are ccTLD variants that just 301-redirect to their .com counterparts via free Cloudflare Redirect Rules. This is separate infrastructure work, not part of the site code itself.
- **Email:** a domain-linked inbox via Zoho Mail (free tier, or Lite plan ~US$1/user/month for normal mail-app access) — separate from the website build.
- **Enquiry form:** Web3Forms (free, 250 submissions/month) — a plain HTML `<form>` posting to Web3Forms' endpoint with an access key, no backend needed. Needs to exist on at least the Applied EdTech site (contact/enquiry page).
- **Password protection:** NOT needed for real security anywhere right now. If a "gated" page is ever wanted (e.g. a lead-magnet delivery page), it only needs the cosmetic pattern seen elsewhere in the wild: a URL query parameter or simple keyword check in page JS that reveals a content section. This is a UX reveal, not real access control — don't build anything more elaborate than that unless asked.

## Content approach
No final page copy exists yet — draft placeholder content in the brand voice (confident, classroom-tested, practical-over-hype) for Judith to edit once pages are live. Suggested starting pages:
- Applied EdTech: Home, About/Judith's bio, Workshops/PD, Courses, Resources, Contact (with the Web3Forms enquiry form).
- Judith Kelmanson (personal): Home/About, a short bio, links out to Applied EdTech.

## Open items not yet resolved
- Final tagline (leading candidate above vs. a runner-up, or something new).
- Exact page list/structure beyond the suggestions above.
- Cloudflare + DNS setup and email account creation — separate from this code build, don't block on them.
