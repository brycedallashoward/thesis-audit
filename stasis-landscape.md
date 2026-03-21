# Stasis Klaviyo — Account Landscape & Initial Findings

Pulled via Klaviyo API on March 21, 2026. Account ID: YsCgQB. Sender: hello@takestasis.com.

Stasis is a sub-brand under the Thesis umbrella. ADHD-focused supplement line with Day and Night formulas, sold as subscriptions via ReCharge. Newer product line: Stasis Kids (capsules, launched late 2025). Same parent company, separate Klaviyo account.

---

## Account Basics

| Field | Value |
|-------|-------|
| Account | YsCgQB |
| Sender | hello@takestasis.com |
| Timezone | US/Eastern |
| Currency | USD |
| Industry | Ecommerce, Health & Beauty, Supplements |
| Tech stack | Shopify, ReCharge, Okendo (reviews + referrals + loyalty), Zaymo (in-email), Superfiliate, Hightouch, Gorgias, Meta Ads |

---

## Flow Inventory

**Total flows:** ~100 (across multiple pages)
**Live flows:** ~27
**Draft/Manual:** ~73

### Live Flows

| Flow ID | Name | Trigger | Notes |
|---------|------|---------|-------|
| V3TSGy | [25] Lead Flow | Added to List | Top acquisition flow — $107K revenue, 6.4% conv |
| VUD7gW | [26] Quiz Leads - Welcome Offer | Added to List | $19K revenue, 4.2% conv |
| X7M4U4 | SMS Welcome Flow [antidote] | Metric | $15.8K revenue, 3.6% unsub |
| URGzF3 | Abandoned Checkout [antidote] | Metric | $11.6K combined revenue |
| SBYanD | Browse Abandonment [antidote] | Metric | $10.8K revenue |
| SBfWmw | SMS Checkout Abandonment [antidote] | Metric | Small but active |
| UmbR3y | Subscription Post-Purchase - Consolidated Jan.2026 | Metric | Consolidated version, $13K+ across iterations |
| WWKVDT | Shipping [antidote] | Metric | 142K recipients, transactional |
| VEyhPa | Order Confirmation [90d gifting] | Metric | Gifting milestone journey |
| YgVEQB | Subscription Winback [antidote] | Metric | $7.5K revenue, 94K recipients across versions |
| T6Tg5v | 2024_Okendo Review Request | Metric | Active review collection |
| TZE7KT | 2024_Okendo Review - Incentive Distribution | Metric | Review incentive delivery |
| WqdzhE | Okendo Referral Invitation [antidote] | Metric | $1.1K revenue |
| T6Fjr3 | Okendo Referral Complete - Referrer [antidote] | Metric | Referral completion |
| WsF4wL | Leads - Hightouch AID Flow - Email | Metric | Hightouch-triggered, low conv |
| X9rNsj | Upcoming Sub Reminder - Bundle Refills [DEC.2025] | Metric | Active refill reminder |
| X5yHfL | Upcoming Sub Reminder - Legacy and OTP | Metric | Legacy product handling |
| XPMBy5 | Upcoming Sub Reminder - VIP Upgrades [antidote] | Metric | VIP upgrade path |
| T2ZkLW | Upcoming Sub Reminder - Non-Bundle - 90d Gifting | Metric | Gifting milestone |
| ST6yYB | Upcoming Sub Reminder - Stasis Kids [antidote] | Metric | Kids product refills |
| WJWQAM | Post purchase flow - stasis kids [antidote] | Metric | Kids post-purchase |
| W8HpJS | Post purchase - stasis kids - Backorder [antidote] | Metric | Kids backorder handling |
| UH6RGc | kids lead flow [antidote] | Added to List | Kids lead nurture |
| XxMsKk | Kids Quiz -> Quiz Leads | Added to List | Quiz routing |
| WyeFiF | Stasis Kids Waitlist Confirmation | Added to List | Waitlist confirmation |
| VyfyNA | Kid Capsule Backorder | Metric | New (Mar 2026) |
| SNRgeY | Auto-suppression of TikTok Profiles [antidote] | Added to List | Deliverability hygiene |

### Notable Draft/Manual Flows (not live)

| Flow | Status | Notes |
|------|--------|-------|
| RcYt6p - Day + Night Subscription Upgrades | Draft | Created Mar 17, 2026 — brand new, not yet launched |
| RqtsaB - Superfiliate Conversion | Draft | Superfiliate integration, not activated |
| UWTQFM - Subscription Winback Flow [antidote] | Draft | Second winback version, not active |
| Tt2hwZ - SMS Cart Abandonment [antidote] | Draft | SMS cart abandon exists but is draft |
| Y8JL35 - SMS Browse Abandonment [antidote] | Draft | SMS browse abandon exists but is draft |
| SpR87N - LP Quiz Leads - Welcome Series | Draft | Updated Mar 2026 but still draft |
| Tk87BR - Surprise + Delight Flow [antidote] | Draft | Surprise & delight not launched |

---

## Flow Performance (Last 365 Days)

### Revenue Rankings

| Rank | Flow | Recipients | Open | Click | Conv | Revenue | RPR |
|------|------|-----------|------|-------|------|---------|-----|
| 1 | [25] Lead Flow | 16,037 (msg 1) + 90K+ (later msgs) | 43–55% | 0.2–8.1% | 0.08–6.4% | **$107K** | $6.74 (msg 1) |
| 2 | [26] Quiz Leads - Welcome Offer | 4,183 (msg 1) + 25K+ | 42–52% | 0.2–5.7% | 0.1–4.2% | **$19K** | $4.64 (msg 1) |
| 3 | SMS Welcome Flow | 11,516 (3 msgs) | — | 3–8% | 0.1–2.6% | **$18K** | $2.58 (msg 1) |
| 4 | Subscription Post-Purchase (all versions) | 14,647 (top msg) + others | 46–61% | 0.5–2.0% | 0.1–1.1% | **$16K** | $0.89 (top) |
| 5 | Browse Abandonment | 10,186 + 9,654 | 47–49% | 1.3–3.4% | 0.4–1.0% | **$15K** | $1.06 |
| 6 | Abandoned Checkout | 3,450 + 7,043 | 44–47% | 2.9–3.5% | 0.6–1.9% | **$12K** | $2.16 |
| 7 | Shipping [antidote] | 142,036 | 26.7% | 11.0% | 0.17% | $10.6K | $0.07 |
| 8 | Subscription Winback | 33,532 + 31K + 29K + 25K | 48–57% | 0.6–2.1% | 0.05–0.25% | **$14K** | $0.23 |
| 9 | Okendo Review Request | 41,467 + 44K | 29–33% | 1.5–11% | 0.06–0.17% | $3.2K | $0.07 |
| 10 | Sub Reminder - Bundle Refills | ~5K across msgs | 47–82% | 5–22% | — | — | Auto-renewal (not flow-driven) |

**Total flow revenue (365d):** $284K from 1.06M recipients
**Total flow conversions:** 2,952

**Key observation:** The Lead Flow is the top acquisition flow — $107K from a welcome series to new leads. First message converts at 6.4%. This is valid acquisition revenue (leads who haven't purchased yet). Subscription reminder / refill flows show high attributed revenue but this is auto-renewal — subscriptions charge on schedule regardless of the email.

---

## Campaign Performance (Last 365 Days)

### Email Campaigns

| Metric | Value |
|--------|-------|
| Total campaigns | 157 |
| Total sends | 5.6M |
| Total revenue | $325K |
| Average RPR | **$0.058** |

**Top campaigns by revenue:**

| Campaign | Send Date | Recipients | Click | Conv | Revenue | RPR |
|----------|-----------|-----------|-------|------|---------|-----|
| Anniversary Sale Push / Freedom from Side Effects | 2025-07-15 | 73,214 | 0.29% | 0.234% | $16,186 | $0.22 |
| Letter from Future Self | 2025-08-09 | 146,801 | 0.27% | 0.105% | $15,972 | $0.11 |
| Stasis Kids Announcement | 2026-03-05 | 53,216 | 0.53% | 0.344% | $15,550 | $0.29 |
| Non-Opener Follow-up Anniversary Sale | 2025-07-11 | 116,339 | 0.30% | 0.126% | $15,479 | $0.13 |
| Stop Cancelling Your Plans | 2025-06-22 | 40,103 | 0.51% | 0.350% | $12,537 | $0.31 |
| Beat the Heat | 2025-08-05 | 40,444 | 0.24% | 0.303% | $11,806 | $0.29 |
| Sunday Scaries? Summer Edition | 2025-08-03 | 47,414 | 0.29% | 0.222% | $11,455 | $0.24 |
| Daylight Saving Reset Guide - Purchasers | 2026-03-07 | 14,338 | 0.64% | 0.538% | $6,996 | $0.49 |

**Campaign RPR comparison vs Thesis:**

| Metric | Stasis | Thesis |
|--------|--------|--------|
| Avg campaign RPR | **$0.058** | $0.02 |
| Avg campaign click rate | 0.3–0.6% | 0.2–0.5% |
| Typical audience size | 25–75K | 280–490K |

Stasis campaigns are ~3x more efficient per recipient than Thesis, likely because audience sizes are smaller and more targeted.

### SMS Campaigns

| Metric | Value |
|--------|-------|
| Total campaigns | 37 |
| Total sends | 152K |
| Total revenue | $10K |
| Average RPR | $0.065 |
| List size | 1–7K per send |
| Avg unsub rate | 1.0–2.5% |

SMS list is much smaller than Thesis (~7K vs ~50K). Unsub rates are moderate (1–2.5%) but not catastrophic like Thesis's 5.15% launch day.

---

## Segment Inventory

Stasis segments are **well-organized** with clear naming conventions:

### Cohort Segments
| Segment | Purpose |
|---------|---------|
| [COHORT] Leads | Non-purchasers, subscribed 30+ days |
| [COHORT] Customers | Placed order, active in 180d, non-ReCharge |
| [COHORT] Returning Customers | 2+ orders, active 180d, <$300 LTV, <4 orders |
| [COHORT] VIP OTPs | $300+ LTV or 4+ orders, active 180d |
| [COHORT] Lapsed Customers | Purchased ever, inactive 180d, non-subscriber |
| [COHORT] Churned Subscribers | rc_active_subscriber=false, cancelled, not reactivated |
| [COHORT] Recent Purchasers | Placed order in last 14d |
| [COHORT] 90 Day Unengaged | No opens/clicks in 90d, received 10+ emails |

### Subscription Segments
| Segment | Purpose |
|---------|---------|
| [SUBSCRIPTION] Active - Day Set | Active sub with Day Set product |
| [SUBSCRIPTION] Active - Night Set | Active sub with Night Set product |

### Exclusion Segments
| Segment | Purpose |
|---------|---------|
| [EXCLUDE] Unengaged - Standard | No opens/clicks 90d, 10+ emails, 45+ days old |
| [EXCLUDE] Unengaged - Tight | No opens/clicks 90d, 20+ emails, non-purchaser + non-subscriber |
| [EXCLUDE] Never Engaged - Suppression Candidate | Zero opens/clicks ever, no purchase 365d, 30+ emails, 120+ days old |
| [EXCLUDE] Suppressed & Invalid | Spam complaints, hard bounces, 4+ soft bounces |
| [EXCLUDE] Profiles in Lead and Quiz Flows | Recently received lead/quiz flow messages (13d window) |
| [EXCLUDE] Unengaged - Standard - SMS | SMS equivalent of standard unengaged |
| Exclusion | TikTok/ShopMyShelf email suppression |

**This is dramatically cleaner than Thesis.** Clear naming conventions, proper tiered suppression (Standard → Tight → Never Engaged), product-level subscription segments, and SMS-specific exclusion segments. The [EXCLUDE] Profiles in Lead and Quiz Flows segment prevents flow/campaign overlap.

---

## Integrations & Tech Stack

| Integration | Metrics Present | Notes |
|-------------|----------------|-------|
| Shopify | Placed Order, Started Checkout, Ordered Product, etc. | Primary ecommerce |
| ReCharge | Subscription started/cancelled/paused/reactivated, Order upcoming, etc. | Subscription management |
| Okendo | Review request, review created, referral, loyalty points, survey | Full Okendo suite (reviews + referrals + loyalty) |
| Zaymo | Zaymo Interaction, Zaymo Review Exported | In-email interactive modules |
| Superfiliate | Enrolled, Conversion, Gift Unlocked | Ambassador/affiliate |
| Hightouch | hightouch_interaction | Data sync / audience tool |
| Gorgias | Ticket Created, Resolved, Completed Survey | Support |
| Meta Ads | Filled Out Lead Ad | Facebook lead ads |
| Fairing | Responded to Question | Post-purchase survey |
| Delighted | Survey response | NPS/CSAT |

---

## Initial Observations

### What's Working

1. **Lead Flow is exceptional.** $107K revenue, 6.4% first-message conversion rate, $6.74 RPR. This is the best-performing welcome flow across both Thesis and Stasis accounts.

2. **Segment architecture is clean.** Well-named [COHORT], [EXCLUDE], [SUBSCRIPTION] conventions. Tiered suppression. SMS-specific segments. Flow-overlap prevention. This is a modern, well-maintained setup.

3. **Campaign calendar is active through Q1 2026.** Unlike Thesis which went dark after Jan 31, Stasis has campaigns running through March 2026 (Stasis Kids announcement, Daylight Saving guide, 3PM Wall). Consistent cadence.

4. **Stasis Kids launch is in motion.** Dedicated flows (kids lead flow, kids post-purchase, kids backorder, kids waitlist), new lists (stasis kids email/SMS), and the kids announcement campaign performed well ($15.5K from 53K sends).

5. **ADHD-specific messaging resonates.** Campaign creative is differentiated — "3PM Wall," "Stimulant crash," "Social Battery," "Dopamine Explainer." Not generic supplement copy.

### Gaps & Concerns

1. **SMS Welcome unsub rate is 3.6%.** Not catastrophic like Thesis's 5.15% but still elevated. SMS list is small (~7K) so each unsub hurts more proportionally.

2. **Multiple draft flows that should probably be live.** SMS Cart Abandonment, SMS Browse Abandonment, Surprise & Delight, Day + Night Subscription Upgrades — all built but not launched.

3. **Subscription reminder flows show $0 revenue.** This is expected (auto-renewal attribution, same as Thesis), but there are many iterations and versions of sub reminder flows — some consolidation may help.

4. **Flow proliferation.** ~100 flows with many iterations/clones (multiple versions of welcome, sub reminder, review request). Need to identify which are superseded and can be archived.

5. **Hightouch AID Flow has low performance.** 70K+ recipients across messages but only $800 revenue total. If this is a paid data integration, ROI needs evaluation.

6. **Winback is decent but not great.** $7.5K from 33K sends ($0.23 RPR) is similar to Thesis winback performance. Room for product-specific winback campaigns.

7. **Campaign click rates still low.** 0.2–0.6% click rates, same open-to-click gap as Thesis. Subject lines work but creative isn't driving action.
