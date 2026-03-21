# Thesis Klaviyo — Housekeeping Log

Running list of account hygiene issues found during discovery. Each item should have enough context to act on (or brief someone else to act on).

---

## Metric Bloat (Account at limit)

Account is at **199/200 metrics**. Priority: clean dead metrics before adding any new ones.

| # | Issue | Metric ID | Action |
|---|-------|-----------|--------|
| 1 | Dead API Placed Order — 0 events ever | MHnLLf | Delete |
| 2 | Dead Checkout Order Placed — 0 events | R6Tcmn | Delete |
| 3 | Thesis First Subscription Order — stopped May 2025 | X29XjE | Archive/delete |
| 4 | Thesis Recurring Subscription Order — stopped Jun 2025 | WhdHbk | Archive/delete |
| 5 | Thesis One-Time Order — stopped May 2025 | VDuBqr | Archive/delete |
| 6 | Formula First Subscription Order — never fired | SyE7cM | Delete |
| 7 | Formula Recurring Subscription Order — never fired | UhzfaS | Delete |
| 8 | Subscription Payment Failed shows 0 — likely misconfigured | TFwpvU | Investigate + fix or replace |
| 9 | Subscription Canceled (custom) shows 0 — duplicate of ReCharge metric | UwyqUs | Investigate + delete if redundant |
| 10 | Two "Active on Site" metrics — only one maintained | TBD | Identify + delete duplicate |

---

## Flow Hygiene

| # | Issue | Action |
|---|-------|--------|
| 1 | 15+ dead/draining/draft flows cluttering account | Audit + archive after confirming empty |
| 2 | Multiple product migration refill variants still live simultaneously | Consolidate once migration complete |
| 3 | Legacy product flows (Logic, Energy, Creativity, Confidence) still referenced in some flows | Flag for cleanup |

---

## List / Segment Hygiene

| # | Issue | Action |
|---|-------|--------|
| 1 | Lists dating to 2019: "DojoMojo Blast", "Get Fit Don't Quit Giveaway", "Talon Uploaded by Edison" | Confirm inactive, suppress/delete |
| 2 | "antidote" appears in segment names used in campaigns — unclear if legacy brand name or internal code | Clarify meaning, rename if needed |

---

## Other

| # | Issue | Action |
|---|-------|--------|
| 1 | Duplicate "Active on Site" metrics | Identify which is active, remove other |

---

*Last updated: March 2026 — discovery session*
