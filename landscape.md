# Thesis Klaviyo — Full Account Landscape

*Pulled live from Klaviyo API, March 21 2026. This is the inventory — not analysis.*

---

## Flows

**Total: ~86 flows across 2 pages. ~38 live, ~40 draft/manual, 7 explicitly [DRAINING].**

### Live Flows by Category

#### Lead Acquisition
| Flow | Trigger | Notes |
|------|---------|-------|
| Leads \| Hightouch - AID | Metric | 5.2M recip/12mo, 34% open, 0.4% click |
| Leads \| Hightouch \| SMS - AID | Metric | SMS counterpart |
| Leads \| Hormesis Lead Flow \| Quiz Complete | Metric | 6.7K recip, 48% open, 3.7% click |
| Leads \| Hormesis Lead Flow \| 50% Off [antidote] | Added to List | Created Feb 27, 2026 |
| Leads \| D30+ Engaged | Added to List | 120.9K recip, 64% open, 1.1% click |
| Leads \| Sunrise Flow | Added to List | — |
| Leads \| Sunset Flow | Added to List | — |
| Leads \| SMS Welcome Flow | Metric | — |
| Leads \| F7D Holdout - List subscribe | Added to List | Holdout arm |
| Leads \| Quiz Abandon Research Request | Added to List | — |
| Leads \| Okendo Referral Invitation - Recipient | Metric | — |
| Leads \| Okendo Referral Opt In - Email Verification | Metric | — |
| 50% Off_Leads \| Browse Abandonment | Metric | **NEW — created March 12, 2026** |
| 50% OFF_Leads \| Abandoned Checkout | Metric | **NEW — created March 12, 2026** |

#### Active Customer / Onboarding
| Flow | Trigger | Notes |
|------|---------|-------|
| Active \| M1 \| Onboarding Flow | Metric | 80.9K recip, 57% open, 1.3% click |
| Active \| M2 \| Onboarding Flow | Metric | 33.3K recip, 56% open, 1.9% click |
| Active \| M1 \| NYNM Mindshift Series | Metric | 36.7K recip, 60% open, 6.8% click |
| Active \| Order Confirmation | Metric | 96.9K recip, 44% open, 10.5% click |
| Active \| M1 \| Shipment Notifications \| Legacy Products | Metric | Legacy — pre-Hormesis |
| Active \| Shipment Notifications \| Tapp Test | Metric | 67.5K recip |
| Shipment \| Delivery Failed Notification | Metric | Created Feb 12, 2026 |

#### Retention / Refill
| Flow | Trigger | Notes |
|------|---------|-------|
| Active \| Refill Reminders - Hormesis | Metric | **CROWN JEWEL.** 202K recip, 35% open, 11% click, 23% conv. $673K Jan, $721K Feb attributed |
| Active \| Refill Reminders - Clarity Migration Customer | Metric | 6.3K recip, 52% open, 38.2% conv |
| Active \| Refill Reminders - Hormesis Transition - 01.24.2026 - Motivation Free | Metric | Live |
| Active \| Refill Reminders - Hormesis Transition - 02.18.2026 - Clarity Free | Metric | Live |
| Active \| Refill Reminders - Hormesis Transition - 03.04.2026 - Clarity | Metric | Live |

> **Note:** 3 simultaneous "Hormesis Transition" refill variants still running. Product migration in progress or unfinished.

#### Reviews / Advocacy
| Flow | Notes |
|------|-------|
| Active \| M2 \| Okendo Review Request | 378.5K recip, 25% open, 1% click |
| Active \| M2 \| Okendo Review - Incentive Distribution | Live |
| Active \| M2 \| Okendo Review - Incentive Distribution - Promoter | Live |
| Active \| Okendo Referral Complete - Referrer | Live |
| Active \| M2 \| Ambassador/Influencer Flow - Outersignal | Live |
| Active \| M2 \| Super User Flow | **Manual trigger** — 1.4K recip, 74% open |
| Devotion - Onboarding & Gifting Reminder | Added to List | 1.8K recip, 70% open |
| Devotion - Cold Outreach | Added to List | 15.8K recip, 54% open, 1.2% unsub (HIGH) |

#### Winback / Churn
| Flow | Notes |
|------|-------|
| Churned \| Winback \| Subscription Cancelled \| Email | **45.7K recip, 48% open, 0.9% click, 0.21% conv** |

#### Operations
| Flow | Notes |
|------|-------|
| Operations \| Attribute Creation \| First Order Product | Live |
| Operations \| Attribute Creation \| Quiz Completes | Live |
| Auto-Suppression of TikTok Profiles [antidote] | Live — created Feb 17, 2026 |
| OTP Login | Live |
| Consumer Survey Flow | Live |

---

### Draft / Inactive Flows (not live — cluttering workspace)

| Flow | Status | Notes |
|------|--------|-------|
| [DRAINING] Active \| Shipment Notifications - Hormesis | draft | Emptying |
| [DRAINING] Active \| Order Confirmation - Hormesis | draft | Emptying |
| [DRAINING] Active \| M1 \| Onboarding Flow - Hormesis | draft | Emptying |
| [DRAINING] Active \| M1 \| Onboarding Flow - Hormesis - Fulfilled Order Trigger | draft | Emptying |
| [DRAINING] Active \| M1 \| Onboarding Flow - Tapp Test | draft | Emptying (x2 variants) |
| [DRAINING] Active \| M1 \| Onboarding Flow - Fulfilled Trigger - Tapp Test | draft | Emptying |
| Updated \| M1 \| Shipment Notifications \| Legacy Products | draft | "Updated" prefix = queued replacement? |
| Updated \| M2 \| Onboarding Flow | draft | Same |
| Updated \| Shipment Notifications \| Tapp Test | draft | Same |
| Updated \| Refill Reminder \| Clarity Migration Customer | draft | Same |
| Updated \| Leads \| Sunset Flow | draft | Same |
| Updated \| Okendo Referral Complete - Referrer | draft | Same |
| Updated \| M1 \| Order Confirmation \| Legacy Products | draft | Same |
| Rebrand \| Post-Purchase Onboarding | draft | Old rebrand flow, orphaned |
| Rebrand \| OTP Replenishment | manual | Orphaned |
| Rebrand \| Subscriber Winback | draft | Old winback — superseded |
| Active \| M1 \| Order Confirmation \| Legacy Products | draft | |
| Active \| M2 \| Onboarding Flow (old) | draft | Old version — replaced by X7S3Vd |
| Leads \| D14 Engaged | draft | |
| Leads \| D28 Engaged | draft | |
| Leads \| BFCM Window Shopper | draft | |
| Leads \| Browse Abandonment \| Standard | draft | |
| Leads \| Browse Abandonment [antidote] | draft | |
| Leads \| Abandoned Checkout (draft multi) | draft | |
| Leads \| Hormesis Lead Flow \| Quiz Not Complete | draft | |
| Leads \| Lead Flow \| Quiz Complete | manual | Old version |
| Devotion - Customer Invite | draft | |
| Devotion - Gift not redeemed | manual | |
| Churned \| BFCM Window Shoppers | draft | |
| Social Snowball clones (x4) | draft | Template clones, never cleaned up |
| [TEST] Browse Abandonment | draft | |
| Flow - Sep 30, 2025, 8:20 PM | draft | **Unnamed flow** |
| Testing - CE | draft | |

---

## Campaigns

### Email Campaigns — Pattern by Period

| Period | Theme | Volume | Audience |
|--------|-------|--------|----------|
| Jan 6–31, 2026 | **$39 First Month** (historic low, 70% off) | ~8–10 emails | Leads (380–490K) |
| Nov 11–Dec 7, 2025 | **BFCM** (65% off, 3 months $136) | ~8–10 emails | Leads + Churned |
| Aug 27–Sep 3, 2025 | **Labor Day Sale** (65% off) | ~5 emails | Leads |
| May 2025 | **Hormesis Relaunch** (new formulas, new packaging) | ~5 emails | Leads + Churned |
| Mar–Apr 2025 | Education + brand content | 1–2/week | Leads |
| Ongoing | **Devotion** (influencer/ambassador series) | Sporadic | VGvzt3 list |

**Key observations:**
- Campaign calendar = **promo-driven.** Non-promo sends go almost exclusively to leads, not customers.
- Education campaigns (willpower, dopamine, ingredients) are lead-only — no active customer education campaigns.
- No campaigns to active subscribers visible in this sample. Customers live almost entirely in flows.
- "Antidote" appears in audience segment names used in Jan 2026 campaigns — unclear origin.

### SMS Campaigns — Pattern by Period

| Period | Theme | Audience |
|--------|-------|----------|
| Jan 6–31, 2026 | $39 promo (8 sends) | TWxn89 (SMS subscribers) |
| Nov–Dec 2025 | BFCM (5+ sends) | XrusxS + exclusions |
| Aug–Sep 2025 | Labor Day (4 sends) | Various |
| May 2025 | Devotion influencer (5 drafts, never sent) | VGvzt3 |

**Key observations:**
- SMS is **100% promotional blast.** Zero lifecycle SMS flows for customers.
- SMS list (TWxn89) was created January 6, 2026 — same day as the $39 launch. The list IS the campaign audience.
- Jan 6 SMS launch had 5.15% unsub rate on 50.7K sends — significant list damage.
- Devotion SMS series was drafted but never sent.

---

## Segments

| Segment | Purpose | Age |
|---------|---------|-----|
| SMS subscribers (TWxn89) | SMS blast audience | Jan 2026 |
| All Subscribers (Active) (Tb44U7) | Core sub base | Sep 2024 |
| Churned Subscribers \| Recent (RP7cJJ) | Winback target | Mar 2024 |
| Churned Subscribers \| Engaged 90d (S4pXG3) | Winback target | Mar 2024 |
| Leads \| D30+ Engaged (Rr3F9Q) | Lead nurture | Apr 2025 |
| Leads \| 180 Day Engaged (TBQbsb) | Lead nurture | Dec 2023 |
| Leads \| At Risk (W8Xvy7) | Suppression/sunset | Mar 2024 |
| Leads \| Disengaged (Stfeai) | Suppression/sunset | Mar 2024 |
| Leads \| High Engagement Non-Purchasers (WnJRyf) | Campaign target | Mar 2025 |
| OTP \| Recent (XbujZD) | OTP retention | Mar 2024 |
| OTP \| At Risk (Surek4) | OTP retention | Mar 2024 |
| OTP \| Churned (ULCTSn) | Winback | Mar 2024 |
| One Time Purchasers (X6Bkvy) | OTP targeting | Jan 2026 |
| Stasis Purchases L30 (REPuYX) | Stasis targeting | **Mar 5, 2026 — brand new** |
| Clarity Migration (XdGuc3) | Migration | Aug 2025 |
| F7D Holdout \| Q1 2025 (Ti5En2) | Testing holdout | Feb 2025 |
| All engaged leads 365d (SXKqi5) | Campaign suppression / BFCM | Nov 2025 |
| Exclusion \| TikTok + others (RPusDV) | Suppression | Feb 2026 |
| Outersignal Influencer >10k (TYJsAr) | Ambassador targeting | Aug 2025 |
| Bounced Email Suppression (TBFZ8F) | Deliverability | Oct 2024 |
| Suppressed User showing activity (SaRvMJ) | Re-engagement monitor | Aug 2025 |
| Unsubscribed/suppressed >365d (Wjmy9q) | Cleanup | Jan 2026 |
| HAS Received Emails L90D \| Unengaged (UeL5j3) | Suppression | Apr 2025 |
| BFCM Window Shoppers — Leads (X6zjxA) | Seasonal | Nov 2024 |
| BFCM Window Shoppers — Purchasers (TXfuge) | Seasonal | Nov 2024 |
| Single SKU Onboarding - Test Variant (XMVQJ9) | Test variant | Nov 2024 |

**Notable gaps in segments:**
- No segment for active subscribers by product (Clarity, Motivation, Stress Reset, Neuroprotection)
- No segment for subscription tenure (new sub vs. 3mo+ vs. 6mo+)
- No segment for Stasis subscribers specifically (the Mar 2026 one is only L30 purchasers)
- No LTV / spend-tier segmentation visible

---

## Lists

**50+ lists total across multiple pages. Most are stale.** Key active/functional ones:

| List | Purpose | Status |
|------|---------|--------|
| Newsletter | Original email list | Old — likely still in flows |
| Devotion - Community Members (QVwQnc) | Influencer/ambassador community | Active |
| Devotion Applicants (SUfMD7) | Ambassador pipeline | Active |
| Thesis Super User - Brand Community (Rhg7RL) | Super user cohort | Active |
| Checkout Abandon - Non buyer - Josh Feedback Request (QPjhzG) | Research/feedback | Recently active (updated Mar 4 2026) |
| All Subscriber List Holdout (RPB2zZ) | Testing holdout | Oct 2024 |
| Clarity Migration (SLeyWe) | Migration trigger | Apr 2025 |
| Consumer Survey - 90d respondents (RPGn5X) | Survey | Jul 2025 |

**Clearly stale lists (cleanup candidates):**
- DojoMojo Blast (2019), Get Fit Don't Quit (2019), Talon Uploaded by Edison (2019), Stay Strong Live Long (2019)
- LimeLight Orders (2019), Preview List (2019), CSTN Test (2019)
- Multiple "SA | Survey Sample" lists (2021), Mother's Day sends (2022)
- Various "winback_holdout" lists (2023), "Cindy" test lists (2024)
- Multiple webinar/snapshot lists (2024)
- "1/10-1/11 Refill" (2022), "New subs since 2-6" (2020), etc.

---

## Metrics (200/200 — at limit)

**Integrations active:**
- Klaviyo (email/SMS internals)
- Shopify (orders, checkouts, products, fulfillment)
- ReCharge (subscriptions, cancellations, payment events)
- Custom API (Quiz Completed, custom order events, coaching, surveys)
- Zaymo (subscription swap, delay, update quantity, form, review)
- LateShipment.com (10+ shipping status events)
- Social Snowball (affiliate events)
- Okendo (reviews, referrals, loyalty points, tiers)
- Tapp (rewards, points, module completions)
- Hightouch (lead enrichment interactions)
- Gorgias (support tickets — current)
- Zendesk (support tickets — older, possibly migrated from)
- Friendbuy (referrals — older)
- Eventbrite (events — 2024, possibly webinars)
- Meta Ads (lead ad fills)
- Typeform (2 metrics)
- Zapier (1 metric)

**Dead / junk metrics (taking up slots):**
| Metric | ID | Issue |
|--------|-----|-------|
| Placed Order (API) | MHnLLf | Dead — 0 events ever |
| Checkout Order Placed (API) | R6Tcmn | Dead — 0 events |
| Thesis First Subscription Order | X29XjE | Stopped May 2025 |
| Thesis Recurring Subscription Order | WhdHbk | Stopped Jun 2025 |
| Thesis One-Time Order | VDuBqr | Stopped May 2025 |
| Formula First Subscription Order | SyE7cM | Never fired |
| Formula Recurring Subscription Order | UhzfaS | Never fired |
| Formula One-Time Order | Xf7u8v | Never fired |
| Subscription Payment Failed | TFwpvU | Shows 0 — broken or misconfigured |
| Subscription Canceled (custom) | UwyqUs | Shows 0 — duplicate of ReCharge metric |
| "a" | W6v4LX | Named "a" — test metric |

**New metrics worth noting:**
- Added to Cart (XLuKYu) — created **Feb 18, 2026** (brand new Shopify metric)
- Active on Site (XhWNBj) — created **Mar 16, 2026** (also brand new)
- The new Active on Site + the old Active on Site (P6bPCq) = **confirmed duplicate**

---

## What's Notably Missing

| Missing Flow | Why It Matters |
|-------------|---------------|
| Dunning / Payment Failed | Subscription-first business. No active recovery for failed charges. |
| SMS in any active customer flow | Zero lifecycle SMS post-purchase |
| Cross-sell / Upsell flow | Stasis cross-sell exists as gifting only, not systematic |
| Subscription anniversary | No milestone moment for long-term subscribers |
| Product-specific onboarding variants | M1/M2 flows exist but not segmented by product |
| OTP → Subscription conversion flow | OTPs are tracked but no conversion push |
| Loyalty tier upgrade notification | Okendo metric exists (V2hbcg), no flow |
| Post-winback nurture | If someone reactivates, they enter standard flows — no reactivation-specific path |

---

*Raw data. Interpret in context.*
