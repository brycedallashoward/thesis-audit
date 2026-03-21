# Thesis Klaviyo — Discovery Insights Log

Running log of findings as they surface. Raw observations go here first, then get distilled into the walkthrough.

Format each entry:
- **What** — what was found
- **Signal strength** — low / medium / high priority
- **So what** — why it matters
- **Action** — what to do about it (if clear)

---

## Revenue & Business Health

- **Refill Reminders - Hormesis** is the crown jewel flow: 202K recipients, 35% open, 11% click, 23% conversion. Attributed $673K Jan, $721K Feb. This is the engine.
- Revenue is ~$2M/month (Shopify Placed Order). Healthy top line but net subscriber growth is in deficit 10 of 13 months.
- OTP ($139) vs subscription ($59 first month, $79 recurring) — large gap. 64% of recent orders are new subscriptions, only 4% OTP. Subscription acquisition is the primary motion.

---

## Subscription Health

- Net subscriber loss in 10 of 13 months tracked. Jan 2026 was the one strong positive month (+1,787) — driven by $39 promo push.
- The $39 SMS launch caused 5.15% unsubscribe rate on 50.7K sends — ~2,600 permanent SMS list losses in a single campaign.
- Dunning is a critical gap: Subscription Payment Failed metric shows 0 events. Either broken or not configured. No active dunning flow exists.

---

## Flow Gaps

- **Winback** converting at 0.21% — the lowest leverage point for a flow that receives 45.7K recipients. Needs a full rebuild.
- **Onboarding** opens are strong (57% M1, 56% M2) but clicks are critically low (1.3% M1, 1.9% M2). Opens suggest list quality and subject lines are fine. Low clicks = content isn't driving action.
- **SMS is almost entirely absent** from post-purchase lifecycle. No SMS in onboarding, refill, or winback. Only present in lead nurture and campaigns.
- **No dunning flow** — given a subscription-first model, this is a significant revenue leak.
- **No cross-sell/upsell flow** — Stasis cross-sell is happening as a gifting tactic but not systematically.

---

## Campaign Observations

- Click rates on email campaigns are critically low: 0.2–0.8% vs ~2.5% benchmark.
- The gap between open rate (36–57%) and click rate (<1%) is the most actionable finding in the campaign layer.
- Campaigns are dominated by the $39 promo push — high reach, low engagement per click.

---

## Account Hygiene

- 199/200 metrics — account is at the ceiling. See housekeeping.md.
- Multiple dead flows and metrics cluttering the workspace.

---

## Section 3: Flow Inventory & Health — Investigation (March 21, 2026)

### 3.1 Are all "live" flows actually sending?

**Finding:** 5 live flows have sent ZERO messages in 90+ days. 5 more had zero sends in the last 30 days but did send in the prior 60. Moved to housekeeping — not investigated further here.

**Zero sends in 90 days (moved to housekeeping):**
Devotion Onboarding (RNKa8r), Sunrise Flow (Ty9mwJ), F7D Holdout (XnAtrm), Devotion Cold Outreach (Y7UFvn), Outersignal (YksgL8).

**Zero sends in last 30d, but active in prior 60 (90d window):**
| Flow | ID | 90d Recipients | Notes |
|------|----|---------------|-------|
| Leads \| SMS Welcome Flow | VbPx4p | 1,208 (90d) | Dropped to zero recently — SMS list growth may have stalled |
| Leads \| Okendo Referral Invitation - Recipient | US2U2x | 183 (90d) | Low volume, event-driven |
| Leads \| Sunset Flow | VwDvzt | 124,376 (90d) | Massive volume in 90d, zero in 30d — likely a batch list add completed |
| Leads \| Okendo Referral Opt In | TUUBpH | 113 (90d) | Low volume, event-driven |
| Shipment \| Delivery Failed Notification | Xy4Hhb | 485 (90d) | New (Feb 2026), may have paused |

**Signal strength:** High
**So what:** 5 live flows are doing nothing — moved to housekeeping for cleanup. The SMS Welcome Flow dropping to zero in 30d is a specific concern — if SMS list growth has stopped, that's an acquisition channel going dark.
**Action:** Investigate why SMS Welcome Flow stopped. Confirm whether Sunset Flow completed a batch or if list additions truly stopped.

---

### 3.2 Are recipient figures time-boxed?

**Finding:** Yes. All flow performance data in this audit is **12-month trailing** (March 2025–March 2026) unless otherwise noted. 30-day and 90-day windows are labeled explicitly where used. Confirmed via API query parameters and Klaviyo report settings.

**Signal strength:** Low (resolved)
**Action:** None needed — figures are correctly time-boxed. All data in this audit is labeled with its time window.

---

### 3.3 Flows to switch to draft

**Moved to housekeeping.** The 5 zero-send flows from 3.1, plus the 7 [DRAINING] flows and ~30+ draft/manual flows from the landscape inventory, are all cleanup items. Consolidated into the housekeeping pass — not a standalone investigation item.

---

### 3.4 Flows that can't be understood without a human look

> **NEEDS HUMAN INTERVENTION — Klaviyo UI required**

The Klaviyo API does not expose flow builder logic (conditional splits, time delays, filter conditions, branch paths). The following cannot be assessed programmatically:

- **Any flow with conditional splits** — we can see message-level performance but not the branching logic that routes customers to different messages
- **Filter conditions on flow entry** — we know trigger types (Metric, Added to List) but not what filters gate entry
- **Message status within flows** — individual messages can be paused/draft while the flow is "live." API reports show zero recipients for these messages but don't flag them as paused.

**Action:** Dan or team needs to walk through the flow builder for the following priority flows:
1. The main Refill Reminders - Hormesis flow (TcGQ3t) — 9+ messages with varying conversion rates, need to understand the split logic
2. Onboarding M1 (TezDRv) — 25 messages, need to understand sequencing and conditions
3. Winback (WEFcjQ) — need to see the offer structure and timing

---

### 3.5 Clarity flow path divergence

> **NEEDS HUMAN INTERVENTION — Klaviyo UI required**

Cannot assess from API. The Clarity Migration flow (RhVArK) is confirmed active with 132 recipients in 30d and a strong 16.8% conversion rate. However, the internal message structure and how it differs from the main Refill flow requires visual inspection of the flow builder.

**What we DO know from data:**
- Clarity Migration has only 1 message (SaHU4z) vs the main Refill flow's 9+ messages
- Click rate is much lower (3% vs 9.8%) but conversion is reasonable — suggesting the email may be less engaging but the audience is high-intent
- "Updated | Refill Reminder | Clarity Migration Customer" exists as a draft flow — suggests a replacement is being staged

**Action:** Visual walkthrough needed. Check: is the single-message approach intentional? Is the draft "Updated" version ready to go live?

---

### 3.6 Real renewal reminder — unclear filtering logic

> **NEEDS HUMAN INTERVENTION — Klaviyo UI required**

The API confirms the Refill Reminders - Hormesis flow (TcGQ3t) uses a "Metric" trigger, but does not expose which metric or what filter conditions gate entry. With 9+ active messages sending to different recipient volumes (from 415 to 13,036 in 30d), there are clearly conditional splits routing customers to different messages based on order count, product, or other criteria.

**What we DO know:**
- Message names contain clues: "1st refill", "2nd refill", "3rd refill", "3+ orders", "Gifting Journey", "Gifting Journey Holdout", "Educational Test", "Clarity - Subscribers"
- This suggests splits by: order number, product line (Clarity vs others), and an A/B test on educational vs standard content
- The "Gifting Journey" vs "Gifting Journey Holdout" split suggests an active experiment

**Action:** Need flow builder walkthrough to map the full branching logic and confirm the trigger metric (likely a ReCharge subscription event).

---

### 3.7 Hormesis Transition — possible duplicate messages

**Finding:** All 3 transition flows ARE sending. Last 30 days:

| Flow | Recipients (30d) | Conv Rate | RPR |
|------|------------------|-----------|-----|
| Motivation Free (XYYzSi) | 151 | 33.1% | $28.34 |
| Clarity Free (SkKyq7) | 65 | 40.0% | $37.17 |
| Clarity (TkECzJ) | 431 | 35.7% | $31.10 |
| **Main Refill (TcGQ3t)** | **20,871** | **29.4%** | **$28.77** |

The transition flows are small (647 total) vs the main flow (20,871). They are product-specific migration paths and SHOULD be mutually exclusive by product. However, whether a customer receiving a Transition flow message is ALSO receiving the main Refill flow message cannot be confirmed without inspecting the trigger metrics and exclusion filters.

> **PARTIALLY NEEDS HUMAN INTERVENTION** — need to verify exclusion filters between the main Refill flow and the 3 Transition flows. If there's no exclusion, a customer who bought Motivation Free could receive BOTH the main Refill reminder AND the Motivation Free Transition reminder for the same order.

**Signal strength:** Medium-High
**Action:** Check flow filters in Klaviyo UI. Confirm mutual exclusivity between Transition flows and the main Refill flow.

---

### 3.8 "Halfway there" contradictory messaging

**Confirmed finding (sourced from manual review).** The message says "halfway there" but also "almost at full month," with a progress bar approaching 30 days. Contradictory customer experience.

**Signal strength:** Medium (noted)
**Action:** Quick content fix — update the copy to be consistent. No further investigation needed.

---

### 3.9 Orphan test content throughout flows

**Moved to housekeeping.** API data flagged several "Copy of" and "Test" message names that are actively sending (e.g., "Copy of 05.12.2025 | Refill Reminder..." at 986 recip/30d, "Tapp Test" shipment flow at 9K/month). These are cleanup items, not investigation items.

---

### 3.10 Order upcoming on ReCharge event variable

**Finding:** Identified as metric **WD58dj** ("Order upcoming on ReCharge"), integration = Recharge. 21,764 events in the last 30 days (~725/day).

This is a standard ReCharge webhook metric that fires a configurable number of days before a subscription order is charged. It serves as a "heads up" signal — typically used to:
1. Trigger refill reminder flows (giving customers a chance to modify/skip before charge)
2. Power "your order is coming" transactional emails
3. Drive pre-charge upsell/cross-sell opportunities

**Current usage:** The metric is being tracked but its role as a flow trigger vs. a passive data point is unclear from the API alone. The Refill Reminders flow trigger is listed as "Metric" — this could be the triggering metric, or it could be a different subscription event.

**Signal strength:** Low (informational)
**Action:** Confirm whether this metric is the trigger for the Refill Reminders flow, or if a different ReCharge event (e.g., "Subscription Created" or "Order Created") is the trigger. This affects timing of refill reminders relative to charge date.

---

### 3.11 Kids-related messaging in flows or campaigns

**Finding:** **No kids-related messaging exists anywhere in Klaviyo.**

Searched:
- All flow names for "kid", "child", "children", "gummy", "junior" → zero results
- All email campaign names for "kid", "children", "gummy" → zero results
- All segment names in landscape inventory → no kids-related segments

The kids gummy product was a Thesis-only initiative (not Hormesis), which is why nothing appears in this Klaviyo account. An upcoming kids product for Thesis is planned but out of scope for this audit.

**Signal strength:** Low (resolved)
**Action:** None for now. Revisit when kids product launches.

---

*Section 3 investigation complete. 10 of 11 items resolved. Remaining: 3.4 partially open — M1 Onboarding flow (TezDRv) still needs visual walkthrough. See Section 4 below for flow builder findings that resolved 3.4 (Refill + Winback), 3.5, 3.6, 3.7, and 3.10.*

---

## Section 4: Flow Builder Visual Review (March 21, 2026)

Resolved via Klaviyo UI inspection. Covers open items from 3.4, 3.5, 3.6, and 3.7.

---

### 4.1 Flow TcGQ3t — Refill Reminders - Hormesis (Full Structure)

**Trigger:** "When someone **Order upcoming on ReCharge**" (Metric trigger)
**Profile filters:** Present (visible in UI as "Profile filters" label, but specific conditions require clicking into the trigger node to expand — noted for follow-up)

**Confirmed: "Order upcoming on ReCharge" IS the trigger metric.** This resolves 3.10 — it is not passive data, it is the active trigger for the main revenue flow.

**Branching architecture — 4 layers of splits:**

The flow uses a cascading series of **Trigger splits** and **Conditional splits** to route customers. The full tree:

**Layer 1 — Entry → 1st Refill Messages**
Three parallel 1st-refill messages exist:
- "1st refill - Gifting Journey - Educational Test" → **Live**, Day 0, subject: "You're halfway through!"
- "1st refill - Gifting Journey" → **Draft** (not sending), Day 0, same subject
- Conditional split: "Is part of a 100% random sample" → routes to one or the other (A/B test infrastructure, currently sending 100% to the Educational Test variant)
- "1st refill - Gifting Journey | Subscribers" → **Live**, Day 0, subject: "You're halfway through!"

**Layer 2 — Trigger Split: Clarity Product Filter**
- Condition: `line_item_first contains Clarity.` → **End** (exits flow)
- This is how Clarity customers are excluded from the main Hormesis refill path

**Layer 3 — Non-Clarity path → Holdout + 2nd Refill**
- "1st refill - Gifting Journey Holdout" → **Live**, Day 0, subject: "We're getting your Thesis ready."
- Conditional split: `single_sku_onboarding_holdout contains False` → controls holdout group
- 2nd refill messages follow the same pattern:
  - "2nd refill - Gifting Journey - Educational Series" → **Live**, Day 0, subject: "60 Days Complete!"
  - "2nd refill - Gifting Journey" → **Draft**, Day 0
  - "2nd refill - Gifting Journey | Subscribers" → **Live**, Day 0, subject: "How Does Progress Feel?"
  - Conditional split: "100% random sample" A/B test
  - Another Trigger split: `line_item_first contains Clarity.` → End (second Clarity filter)
  - "Copy of 2nd refill - Gifting Journey" → **Live** (orphan copy, actively sending)
  - "2nd refill - Gifting Journey Holdout" → **Draft**
  - "2nd refill - Educational Series" → **Draft**

**Layer 4 — 3rd Refill + 3+ Orders**
- "3rd refill" → **Live**, Day 0
- "3rd refill - Educational Series" → **Draft**, Transactional Status: **Rejected** (Klaviyo rejected its transactional flag)
- Conditional split: "100% random sample"
- "3+ orders" → **Live**, Day 0 (multiple versions exist)
- Third Trigger split: `line_item_first contains Clarity.` → End

**Layer 5 — Bottom: Subscription Streak Routing**
Three final Trigger splits based on `customer_subscription_related_streak_count`:
- equals 4 (+ 2 additional filters) → End
- equals 3 (+ 2 additional filters) → End
- equals 2 (+ 2 additional filters) → End
- Fallthrough → End

**Message Status Summary for TcGQ3t:**
| Status | Count | Notable |
|--------|-------|---------|
| Live | 9 | Including one "Copy of" orphan that's actively sending |
| Draft | 7 | Including the rejected transactional message |
| Total | 16 | Far more than the "9+" originally estimated |

**Critical findings:**
1. **Clarity exclusion is implemented via Trigger splits** — `line_item_first contains Clarity` appears THREE times at different points in the flow, each routing Clarity customers to End. This is the mechanism preventing overlap with the Clarity-specific flows.
2. **"Copy of" orphan is live and sending** — "Copy of 05.12.2025 | Refill Reminder - 2nd refill" is Live at Day 0. This should be audited for whether it's intentional or leftover.
3. **A/B test infrastructure at 100% sample** — Multiple conditional splits use "Is part of a 100% random sample." At 100%, this sends everyone through — it's either a completed test that wasn't cleaned up, or a test that was set to 100% as a de facto toggle.
4. **Holdout controlled by profile property** — `single_sku_onboarding_holdout contains False` gates some messages. This is a manual holdout mechanism.
5. **One message has "Transactional Status: Rejected"** — Klaviyo rejected the transactional designation on the 3rd refill Educational Series message. It's also Draft, so it's not sending, but this should be noted.

**Signal strength:** High
**Resolves:** 3.4 (partial), 3.6, 3.10

---

### 4.2 Flow RhVArK — Refill Reminder | Clarity Migration Customer

**Trigger:** "When someone **Order upcoming on ReCharge**" (same as TcGQ3t)
**Trigger filters:** Present (specific conditions not expanded)
**Profile filters:** Present (specific conditions not expanded)

**Key difference from TcGQ3t:** This flow has BOTH trigger filters AND profile filters, while TcGQ3t only shows profile filters. The trigger filters likely constrain this flow to Clarity-specific order events.

**Structure:**
1. Message: "Refill Reminder - Clarity Migration" → **Live**, Day 0, subject: "Meet the New Clarity", Transactional
2. Message: "Refill Reminder - ClarityFree Migration" → **Manual** (paused, not sending), Day 0, subject: "Meet the New Clarity"
3. Trigger split: `line_item_first contains Without Caffeine.` → End
4. Trigger split: `line_item_first contains With Caffeine.` → End
5. Fallthrough → End

**Findings:**
- **Not a single-message flow** — there are 2 messages, but the ClarityFree Migration one is in Manual status (effectively paused). So yes, only 1 message is actively sending. This answers the 3.5 question: the single-message approach is the current active state, but a caffeine-free variant was built and then paused.
- **The caffeine splits at the bottom** suggest the flow was designed to route Clarity With Caffeine vs Without Caffeine customers differently, but both splits route to End — meaning the current structure catches all Clarity customers with the first message, then exits regardless of caffeine type.
- **Overlap with TcGQ3t:** Both flows trigger on the same metric ("Order upcoming on ReCharge"). TcGQ3t excludes Clarity via `line_item_first contains Clarity` → End splits. RhVArK presumably includes only Clarity via its trigger filters. The boundary relies on both flows correctly filtering by product line. If a customer's line_item_first doesn't match the expected patterns (e.g., product name changed), they could slip through both or neither.

**Signal strength:** Medium
**Resolves:** 3.5

---

### 4.3 Flow XYYzSi — Hormesis Transition - Motivation Free

**Trigger:** "When someone **Order upcoming on ReCharge**" (same as TcGQ3t and RhVArK)
**Profile filters:** Present

**Structure:**
1. Message: "Motivation Free Hormesis Transition | Refill Reminder | 01.24.2026" → **Live**, Day 0, subject: "Your refill is on its way", Transactional
2. Conditional split: "In **Hormesis Transition (01.24.2026) - Motivation Free**." → End or End

**Findings:**
- **Simple, single-purpose flow.** One message, one list membership check.
- **Overlap prevention relies on two mechanisms:** (a) Profile filters on entry (not expanded, but likely check for Motivation Free product), and (b) a conditional split checking membership in a specific list/segment: "Hormesis Transition (01.24.2026) - Motivation Free"
- **The conditional split routes to End on BOTH branches** — meaning after the single message sends, the flow ends regardless of list membership. The conditional split appears to be downstream of the message, suggesting it's either (a) a gating mechanism that was moved below the message by accident, or (b) a tracking/routing mechanism for a path that was never built out.
- **Does NOT explicitly exclude main Refill flow eligibility.** There is no `line_item_first` filter or reference to TcGQ3t exclusion. The overlap prevention, if any, must come from the profile filters on entry.

**Risk assessment:** If a Motivation Free customer's profile filters don't exclude them from TcGQ3t, they receive BOTH this message AND the main Refill flow messages for the same order event. Given the small volume (151 recipients/30d vs 20,871 in the main flow), this is a narrow but real risk.

**Signal strength:** Medium-High
**Resolves:** 3.7 (partial — confirms the mechanism but can't fully verify exclusion without expanding profile filter details)

---

### 4.4 Flow WEFcjQ — Winback | Subscription Cancelled

**Trigger:** "When someone **Subscription cancelled on ReCharge**" (different metric from the refill flows)
**Profile filters:** Present

**Structure — 5 cancellation-reason branches, 19 total messages:**

The flow uses a cascade of **Trigger splits** at the bottom to route customers by cancellation reason, with dedicated message sequences per reason:

**Branch 1: "Legacy Product Cancels" (default/catch-all path)**
- Day 3: "A Better Thesis is Here for You…" → **Live**
- Day 10: "Meet the New Thesis" → **Live** (7-day wait)
- Day 15: "Hear what customers say about our new formulas" → **Live** (5-day wait)
- Day 25: "Your personal discount expires soon" → **Live** (10-day wait)

**Branch 2: "Too Much Supply"** (`cancellation_reason contains I have too much.`)
- Day 10: "A note from Dan and why timing matters" → **Live**
- Day 20: "Making the most of what you have" → **Live** (10-day wait)
- Day 30: "The subscription that adapts to your life" → **Live** (10-day wait)

**Branch 3: "Too Expensive"** (`cancellation_reason is in It's too expensive right now, It's Too Expensive Right Now, I like my bl..`)
- Day 3: "The real cost of brain fog" → **Live**
- Day 7: "Let's make this work for your budget" → **Live** (4-day wait)
- Day 14: "Get more, spend less per dose" → **Live** (7-day wait)
- Day 21: "Final chance: 25% off your return" → **Live** (7-day wait)

**Branch 4: "Did Not Feel Good"** (`cancellation_reason contains don't feel good.`)
- Day 5: "Why some brains need different keys" → **Draft**
- Day 12: "The science of why you didn't feel it" → **Draft**
- Day 21: "I didn't feel anything either... until I found my match" → **Draft**
- Day 27: "Try again, risk-free" → **Draft**
**All 4 messages are in Draft status — this entire branch is NOT sending.**

**Branch 5: "Other" (fallthrough)** (`product_title contains Thesis Subscription.` is the final filter)
- Day 5: "Your brain is still curious" → **Live**
- Day 12: "What you've been missing" → **Live** (7-day wait)
- Day 20: "It's not goodbye forever" → **Live** (8-day wait)

**Trigger split routing order (bottom to top):**
1. `cancellation_reason contains don't feel good.` → "Did Not Feel Good" branch
2. `cancellation_reason is in It's too expensive...` → "Too Expensive" branch
3. `cancellation_reason contains I have too much.` → "Too Much Supply" branch
4. `product_title contains Thesis Subscription.` → "Legacy Product Cancels" branch (filters to Thesis subscription products only)
5. Fallthrough → End (non-Thesis cancellations exit)

**Key findings:**
1. **The "Did Not Feel Good" branch is entirely Draft** — 4 messages, all paused. This is the most emotionally sensitive cancellation reason and it has ZERO active emails. These customers fall through to "Other" or get nothing if "Other" doesn't catch them.
2. **Offer escalation structure:**
   - Legacy: educational → social proof → urgency/discount (Day 25)
   - Too Expensive: value framing → budget flexibility → unit economics → 25% off final chance (Day 21)
   - Too Much Supply: empathy → usage tips → flexibility pitch (Day 30)
   - The discount appears only in "Too Expensive" (25% off at Day 21) and "Legacy" (personal discount at Day 25). "Too Much Supply" has NO discount — just messaging.
3. **All messages use Smart Sending** (not Transactional) — meaning Klaviyo's global sending rules apply and may throttle delivery to recent recipients.
4. **The 0.21% conversion rate makes more sense now** — the "Did Not Feel Good" branch (likely a significant chunk of cancellations) is entirely dark, and the catch-all "Other" path is generic. The two strongest branches (Legacy, Too Expensive) are doing the heavy lifting.
5. **Time span:** The longest sequence is 30 days (Too Much Supply). Legacy runs 25 days. Too Expensive runs 21 days. Relatively tight for a winback.

**Signal strength:** High
**Resolves:** 3.4 (winback portion)

---

### 4.5 Cross-Flow Overlap Assessment

**The central question: can a customer receive messages from multiple refill/transition flows for the same order event?**

All three refill-related flows share the same trigger: **"Order upcoming on ReCharge."** The overlap prevention mechanisms are:

| Flow | Trigger | Exclusion Mechanism |
|------|---------|-------------------|
| TcGQ3t (Main Refill) | Order upcoming on ReCharge | Trigger splits: `line_item_first contains Clarity` → End (×3 at different points) |
| RhVArK (Clarity Migration) | Order upcoming on ReCharge | Trigger filters + Profile filters (specific conditions not expanded) |
| XYYzSi (Motivation Free Transition) | Order upcoming on ReCharge | Profile filters + conditional split on list membership |

**Risk matrix:**

1. **Clarity customers:** TcGQ3t explicitly exits them via trigger splits. RhVArK presumably catches them via trigger filters. **Low overlap risk** if product names are consistent.
2. **Motivation Free customers:** TcGQ3t does NOT have a Motivation Free exclusion split. XYYzSi has profile filters but no explicit reference to TcGQ3t exclusion. **Medium-High overlap risk** — these customers could receive both flows.
3. **Product name fragility:** All exclusion logic depends on string matching (`line_item_first contains Clarity`, `product_title contains Thesis Subscription`). If ReCharge product names change or have inconsistent casing, filters break silently.

**Recommended verification:** Click into the trigger/profile filter details for TcGQ3t and XYYzSi to see the exact filter conditions. The accessibility tree shows "Profile filters" as a label but doesn't expand the conditions — this requires clicking into the trigger node in the flow builder.

---

### 4.6 Summary of Resolved Items

| Open Item | Status | Finding |
|-----------|--------|---------|
| 3.4 (Flows needing human look) | **Resolved** for Refill + Winback. Onboarding (TezDRv) still pending. |
| 3.5 (Clarity path divergence) | **Resolved.** Single active message is intentional — ClarityFree variant exists but is paused (Manual). |
| 3.6 (Renewal reminder filter logic) | **Resolved.** Trigger is "Order upcoming on ReCharge." Splits route by product line, order count, and subscription streak. |
| 3.7 (Transition flow overlap) | **Partially resolved.** Clarity exclusion confirmed in TcGQ3t. Motivation Free exclusion NOT confirmed — profile filters need expansion. |
| 3.10 (Order upcoming metric) | **Resolved.** Confirmed as the active trigger for all refill flows. |

---

### 4.7 Flow TezDRv — M1 Onboarding Flow (Full Structure)

**Trigger:** "When someone **LS-Delivered**" (shipment delivery event — likely Loop Returns, ShipStation, or similar logistics integration)
**Profile filters:** Present (specific conditions not expanded)

This is a product-routed onboarding flow that splits customers by product line AND subscription status, then sends a 6-email educational sequence per product for subscribers, and a single delivery confirmation for OTP buyers.

---

#### Entry Routing (bottom of flow canvas, evaluated first)

The flow processes incoming delivery events through a cascade of filters:

1. **Wait 10 minutes** after trigger (likely to allow order data to settle)
2. **Trigger split:** `ItemNames contains Stasis.` → **End** (Stasis products exit immediately — no onboarding for Stasis)
3. **Trigger split:** `ItemCollections equals Hormesis.` → if NOT Hormesis → **End** (non-Hormesis products exit)
4. **Conditional split:** `rc_active_subscriber is true` → splits into **Subscriber path** vs **OTP path**

So the entry funnel is: Delivery event → wait 10 min → exclude Stasis → require Hormesis collection → split by subscription status.

---

#### OTP Path (non-subscribers)

OTP buyers get ONLY a delivery confirmation — no educational sequence. Routed by product via 4 trigger splits:

| Trigger Split Condition | Message | Status | Day |
|------------------------|---------|--------|-----|
| `ItemNames contains Clarity.` | "It's here: Your Clarity" | **Live** | 0 |
| `ItemNames contains Motivation.` | "It's here: Your Motivation." | **Live** | 0 |
| `ItemNames equals Neuroprotection.` | "It's here: Your Neuroprotection" | **Live** | 0 |
| `ItemNames contains Stress Reset.` | "It's here: Your Stress Reset" | **Live** | 0 |

**Note:** Neuroprotection uses `equals` while the others use `contains` — minor inconsistency that could cause issues if the product name ever has a suffix or variant.

None of these OTP messages are marked Transactional. No UTM tracking differences. No A/B tests. No educational follow-up.

**OTP total: 4 messages, all Live, Day 0 only.**

---

#### Subscriber Path — Product Routing

Subscribers are routed by product name through 4 trigger splits (same pattern as OTP but leading to full sequences):

| Trigger Split | Condition |
|--------------|-----------|
| Split 1 | `ItemNames contains Clarity.` |
| Split 2 | `ItemNames contains Motivation.` |
| Split 3 | `ItemNames contains Neuroprotection.` |
| Split 4 | `ItemNames contains Stress Reset.` |

A **fallback** exists: if none of the 4 product names match but the item is in the Hormesis collection (`ItemCollections contains Hormesis.`), a generic "Thesis - Delivery Confirmation" fires. This catches any new products added to the Hormesis collection that haven't been given dedicated sequences yet.

---

#### Subscriber Sequences — Per Product (4 identical structures)

Each product branch follows the **exact same template** with product-specific content:

| Step | Delay | Message Type | Day | Send Type |
|------|-------|-------------|-----|-----------|
| 1 | — | Delivery Confirmation | D0 | **Transactional** |
| 2 | 1 day | *Conditional split: `single_sku_onboarding_holdout is false`* | — | *Holdout gate* |
| 3 | — | Blend Overview | D1 | Smart sending |
| 4 | 1 day | Daily Habits | D2 | Smart sending |
| 5 | 2 days | Reasons to Believe | D4 | Smart/none |
| 6 | 2 days | Science Explainer | D6 | Smart sending |
| 7 | 4 days | CX Check In | D10 | Smart sending |

**Every single message across all 4 product branches is Live.** Zero Draft, zero Manual. The entire flow is fully active.

**Holdout mechanism:** Each product branch has a conditional split on `single_sku_onboarding_holdout is false` after the Delivery Confirmation. If the profile property is true (i.e., in holdout), the customer gets the delivery confirmation but skips the educational sequence → End. Same mechanism used in the Refill flow (TcGQ3t).

---

#### Product-Specific Content Breakdown

**Clarity Branch (6 messages, all Live):**

| Day | Subject Line | Notes |
|-----|-------------|-------|
| D0 | "It's here: Your Clarity" | Transactional |
| D1 | "What ingredients make Clarity 'life-changing'?" | Smart sending |
| D2 | "Your brain after 60 days of Clarity" | **A/B test active** |
| D4 | "The highest quality. Every. Single. Time." | **A/B test active** |
| D6 | "Here's what is happening in your brain 🧠" | Smart sending |
| D10 | "Need help? We're checking in!" | Smart sending |

**Stress Reset Branch (6 messages, all Live):**

| Day | Subject Line | Notes |
|-----|-------------|-------|
| D0 | "It's here: Your Stress Reset" | Transactional |
| D1 | "A true stress reset starts with the ingredients" | **A/B test active** |
| D2 | "Your brain after 60 days of Stress Reset" | — |
| D4 | "The highest quality. Every. Single. Time." | — |
| D6 | "What lower cortisol actually feels like" | Smart sending |
| D10 | "Need help? We're checking in!" | Smart sending |

**Motivation Branch (6 messages, all Live):**

| Day | Subject Line | Notes |
|-----|-------------|-------|
| D0 | "It's here: Your Motivation" | — (not marked Transactional — see note below) |
| D1 | "What gets you going? The ingredients in Motivation." | Smart sending |
| D2 | "60 days, Motivation, and you" | Smart sending |
| D4 | "The highest quality. Every. Single. Time." | — |
| D6 | "Why you shouldn't wait to be inspired" | — |
| D10 | "Need help? We're checking in!" | Smart sending |

**Neuroprotection Branch (6 messages, all Live):**

| Day | Subject Line | Notes |
|-----|-------------|-------|
| D0 | "It's here: Your Neuroprotection" | Transactional |
| D1 | "What are top ingredients for 🧠 protection?" | Smart sending |
| D2 | "Your brain after 60 days of Thesis" | Smart sending (note: says "Thesis" not "Neuroprotection") |
| D4 | "The highest quality. Every. Single. Time." | — |
| D6 | "How Neuroprotection powers your brain" | Smart sending |
| D10 | "Need help? We're checking in!" | Smart sending |

---

#### Message Status Summary

| Status | Count |
|--------|-------|
| Live | **29** |
| Draft | 0 |
| Manual | 0 |
| **Total** | **29** |

All 29 messages are Live. This is higher than the "25 messages" figure from the API report — the difference is likely the 4 OTP delivery confirmations which may have been excluded from the original count, or the generic Thesis fallback.

---

#### Critical Findings

**1. The click rate problem is structural, not content.**
The 1.28% click rate across 57% opens isn't surprising when you look at the content sequence: Delivery Confirmation → Blend Overview → Daily Habits → Reasons to Believe → Science Explainer → CX Check In. This is pure *education* — there are no CTAs driving action. No "shop now," no cross-sell, no referral ask, no review request. The sequence tells customers about their product but never asks them to DO anything. The CX Check In at Day 10 is the only message with an implicit action (reach out for help), and it's the last touchpoint.

**2. "Reasons to Believe" is identical across all 4 products.**
The subject line "The highest quality. Every. Single. Time." is used verbatim in Clarity, Stress Reset, Motivation, and Neuroprotection branches. If a customer orders multiple products (or switches), they'll see the exact same email. This is the one non-personalized message in an otherwise product-specific sequence.

**3. Motivation Delivery Confirmation is NOT marked Transactional.**
Clarity, Stress Reset, and Neuroprotection subscriber delivery confirmations are all flagged as Transactional. Motivation's is not. This means Motivation subscribers' delivery confirmation is subject to Smart Sending throttling and consent rules that the other products' are not. This is likely a configuration oversight.

**4. Naming inconsistency: "D15" in message names vs actual Day 10.**
The CX Check In messages are named "D15" (e.g., "Clarity - CX Check In | D15") but actually fire on Day 10 (D0 + 1 + 1 + 2 + 2 + 4 = 10 days). The naming convention is misleading — either the delays were shortened after the messages were named, or D15 refers to a different calendar logic.

**5. Neuroprotection Daily Habits says "Thesis" not "Neuroprotection."**
Subject line is "Your brain after 60 days of Thesis" — every other product branch uses the product name ("60 days of Clarity," "60 days of Stress Reset," "60 days, Motivation, and you"). This is likely a templating error from the old Thesis brand.

**6. OTP buyers get zero educational content.**
OTP customers receive only a delivery confirmation and nothing else. Given OTP is $139 vs subscription at $59/$79, these are high-value customers receiving the least onboarding attention. No blend education, no usage guidance, no subscription conversion pitch.

**7. Three A/B tests are running.**
- Clarity Daily Habits (D2) — A/B
- Clarity Reasons to Believe (D4) — A/B
- Stress Reset Blend Overview (D1) — A/B

Only 3 of 24 subscriber messages have active A/B tests. The tests appear to be on Clarity and Stress Reset only — Motivation and Neuroprotection have no A/B testing.

**8. Smart Sending is inconsistent.**
Some messages have Smart Sending enabled, others don't, with no apparent pattern. Within the same product branch, D1 might have Smart Sending while D4 doesn't. This could cause some messages to be suppressed by Klaviyo's global rules while adjacent messages in the same sequence are not.

**Signal strength:** High
**Resolves:** 3.4 (onboarding portion — now fully resolved)

---

### 4.8 Updated Resolution Summary

| Open Item | Status | Finding |
|-----------|--------|---------|
| 3.4 (Flows needing human look) | **Fully resolved.** Refill (4.1), Winback (4.4), and Onboarding (4.7) all inspected. |
| 3.5 (Clarity path divergence) | **Resolved.** Single active message is intentional. |
| 3.6 (Renewal reminder filter logic) | **Resolved.** Trigger + splits fully mapped. |
| 3.7 (Transition flow overlap) | **Partially resolved.** Profile filters still need expansion. |
| 3.10 (Order upcoming metric) | **Resolved.** Confirmed as active trigger for refill flows. |

---

## Section 7: Campaign Analysis (March 21, 2026)

Full performance data pulled via Klaviyo Reporting API. See `data/campaign-performance.md` for raw tables.

**Scope:** 100 email campaigns + 20 SMS campaigns, January 2025 – January 2026.

---

### 7.1 The Headline Numbers

| Channel | Campaigns | Total Sends | Total Revenue | Avg RPR |
|---------|-----------|------------|---------------|---------|
| Email (promo) | ~85 | ~10M+ | ~$260K | $0.02 |
| Email (active customer) | ~5 | ~50K | ~$170K | $3.30 |
| SMS (all) | 20 | ~562K | ~$25K | $0.04 |

The single most important finding: **campaigns to active customers generated more revenue from 50K sends than all promo campaigns generated from 10M+ sends combined.**

- Ambassador Program (Nov 2025): 25K sends → $91K revenue → **$3.67 RPR**
- VIP Community Invite (Jan 2025): 9K sends → $28K revenue → **$3.15 RPR**
- VIP Reminder (Jan 2025): 8K sends → $28K revenue → **$3.38 RPR**

Meanwhile, the entire $39 promo campaign (Jan 2026): 5.2M sends → $51K revenue → **$0.01 RPR**

---

### 7.2 Click Rate Crisis

**What:** Email campaign click rates are critically low across every period and audience segment.

| Period | Audience | Avg Click Rate | Benchmark |
|--------|----------|---------------|-----------|
| Feb–Apr 2025 (Education) | Leads (Hightouch Engaged, ~30K) | 0.3–1.1% | 2.5% |
| May 2025 (Hormesis Launch) | Leads (45–65K) | 0.7–1.0% | 2.5% |
| Jun 2025 (Churned Winback) | Churned (~6–31K) | 1.0–2.5% | 2.5% |
| Aug–Sep 2025 (Labor Day) | Leads + Churned (90–113K) | 0.8–1.0% | 2.5% |
| Nov–Dec 2025 (BFCM) | All engaged leads (92–212K) | 0.4–0.9% | 2.5% |
| Jan 2026 ($39 promo) | Mass blast (280–490K) | **0.2–0.5%** | 2.5% |

**Signal strength:** High
**So what:** The click rate problem worsens as audience size increases. The Jan 2026 $39 campaigns blasted to 280–490K recipients — 3–10x the audience of prior campaigns — and click rates collapsed to 0.2–0.3%. This is a classic deliverability/engagement trap: blasting too wide dilutes engagement, which tanks deliverability scores, which further reduces engagement.
**Action:** Tighten campaign audiences. The Feb–Apr 2025 education series to 25–37K "Hightouch Engaged" was already the right idea — it just wasn't clicking because CTAs are weak. Never send to 490K again.

---

### 7.3 Audience Escalation Problem

**What:** Campaign audiences have expanded 10x over 12 months without proportional engagement improvement.

| Period | Typical Send Size | Audience Composition |
|--------|------------------|---------------------|
| Jan 2025 | 90–160K (Leads), 35–50K (OTP/Churn) | Segmented by lifecycle stage |
| Feb–Apr 2025 | 25–37K | Tightly segmented (Hightouch Engaged) |
| May–Jun 2025 | 6–65K | Product-specific segments |
| Aug–Sep 2025 | 53–113K | Leads + Churned mixed |
| Nov–Dec 2025 | 92–212K | "All engaged leads 365d" — massive |
| Jan 2026 | **280–490K** | Multiple segments stacked, minimal exclusions |

**Signal strength:** High
**So what:** The Jan 2026 $39 campaign audiences (`RQHdYz`, `VY2xNs`, `XfAn5r`, `Y3sVU9`, `TBQbsb`, `X6Bkvy`) stack multiple segments to reach 380–490K. These are the biggest campaign sends in Thesis history. But the bigger the audience, the lower the engagement, and the more the sender reputation gets hammered. This is a volume-over-quality strategy that degrades the channel's long-term effectiveness.
**Action:** Cap campaign audiences. Consider a maximum send threshold (e.g., 150K) and segment more aggressively rather than blasting wider.

---

### 7.4 Active Customer Campaign Void

**What:** Almost zero campaigns target active subscribers. Customers live entirely in flows after purchase.

Active customer campaigns found in 14 months of data:
1. Community Invite (Jan 2, 2025) — 7,109 recipients, $18,978 revenue
2. OTP Community Invite (Jan 9, 2025) — 1,225 recipients, $1,059 revenue
3. VIP Invite (Jan 14, 2025) — 9,025 recipients, $28,347 revenue
4. VIP Invite Reminder (Jan 15, 2025) — 8,329 recipients, $28,093 revenue
5. Ambassador Program (Nov 12, 2025) — 24,998 recipients, $91,184 revenue
6. Stasis Reformulation (Apr 24, 2025) — 459 recipients, $1,612 revenue
7. Clean Market Partnership (Jun 10, 2025) — 712 active recipients, $1,911 revenue

**That's 7 campaigns to active customers in 14 months.** Everything else goes to leads, OTP, or churned subscribers.

**Signal strength:** High
**So what:** Active customers are the highest-RPR audience by a factor of 100x ($3.00+ RPR vs $0.01–0.04 for leads/churned). Yet they receive almost no campaign attention. The Ambassador Program alone ($91K from 25K sends) generated more revenue than the entire 5.2M-send $39 promo campaign ($51K). The implication is clear: a single well-targeted email to active subscribers is worth more than 100 mass blasts to leads.
**Action:** Build a monthly active subscriber campaign calendar. Content ideas: product education, cross-sell, referral programs, loyalty milestones, new product announcements, usage tips. Even one campaign per month to active subscribers could add $30K+/month in attributed revenue.

---

### 7.5 SMS Channel Assessment

**What:** SMS is used exclusively for promotional blasts. No lifecycle SMS exists.

| Period | Sends | Revenue | RPR | List Attrition |
|--------|-------|---------|-----|----------------|
| Labor Day (Aug–Sep 2025) | 55K | $10,701 | $0.20 | High (1.3–3.9% unsub/send) |
| BFCM (Nov–Dec 2025) | 149K | $4,732 | $0.03 | Moderate (0.8–2.1% unsub/send) |
| $39 Promo (Jan 2026) | 358K | $9,310 | $0.03 | **Critical (5.15% launch day)** |

**Signal strength:** High
**So what:**
- The Jan 6 SMS launch unsub rate (5.15%) means ~2,600 permanent SMS list losses in a single campaign. List shrank 18% (50.7K → 41.4K) over the Jan promo period from cumulative unsubs.
- SMS click rates are high (15–18%) but conversion rates are near zero (0.03–0.07%). People tap the link but don't buy. Either the landing page isn't converting or the offer framing in SMS doesn't match the intent state of SMS subscribers.
- Labor Day SMS was the highest-performing period ($0.20 RPR) — smaller, more targeted audiences to Leads/Churned/OTP segments. Jan 2026 sent to the full "SMS subscribers" segment with far worse results.
- BFCM SMS mid-sale reminder had literally 0 conversions from 13.8K sends.
**Action:** Stop using SMS as a volume blast channel. Consider SMS for high-intent moments only (cart abandonment, shipping, time-sensitive one-day offers). The list erosion from weekly promo SMS makes the channel unsustainable long-term.

---

### 7.6 Hormesis Churned Winback — The Bright Spot

**What:** The June 2025 product-specific churned winback campaigns were the best-performing non-active campaign series.

| Campaign | Recipients | Click Rate | Conv Rate | RPR |
|----------|-----------|-----------|-----------|-----|
| Stress Reset (Churned) | 5,499 | 2.41% | 0.621% | **$0.54** |
| Clarity Follow-up (Churned) | 2,005 | 2.50% | 0.549% | $0.33 |
| Clarity (Churned #2) | 31,483 | 1.51% | 0.429% | $0.29 |
| Clarity (Churned #1) | 6,220 | 1.28% | 0.292% | $0.21 |
| Motivation (Churned) | 25,119 | 0.99% | 0.257% | $0.16 |

**Total:** ~70K sends, $17,671 revenue, $0.25 avg RPR

**Signal strength:** Medium-High
**So what:** These campaigns prove that product-specific messaging to churned subscribers works. The $0.25–0.54 RPR is 25–54x better than the $0.01 RPR of the Jan 2026 mass blasts. The key ingredients: (1) targeted audience (churned subscribers who used a specific product), (2) product-specific messaging (not generic discount), (3) reasonable audience size (5–31K, not 400K). Stress Reset in particular outperformed everything — likely because "stress" is a compelling re-entry point.
**Action:** Repeat this playbook. Run quarterly product-specific winback campaigns. Prioritize Stress Reset messaging for churned audiences.

---

### 7.7 Campaign Calendar Gaps

**What:** Several standard campaign types are entirely absent.

| Campaign Type | Present? | Notes |
|---------------|----------|-------|
| New product launches | Yes | Hormesis relaunch (May 2025) |
| Seasonal promos (BFCM, Labor Day) | Yes | Well-executed cadence |
| Lead nurture / education | Yes | Feb–Apr 2025 weekly series |
| Active customer education | **No** | Zero educational campaigns to active subscribers |
| Cross-sell / upsell campaigns | **No** | No campaigns promoting additional products to existing customers |
| Referral campaigns | **No** | No referral ask campaigns found |
| Loyalty / milestone campaigns | **No** | No "you've been with us X months" or loyalty tier campaigns |
| Re-engagement / sunset | **No** | No structured sunset campaign to clean disengaged profiles |
| Post-purchase NPS / feedback | **No** | No survey or feedback campaigns |
| Subscription upgrade campaigns | **No** | No campaigns encouraging plan upgrades (1mo → 3mo) |

**Signal strength:** High
**So what:** The campaign calendar is structurally incomplete. It has exactly two modes: (1) blast promos to leads/churned, and (2) influencer/devotion. There's no middle layer — no campaigns that nurture active customers, encourage loyalty, drive referrals, or promote cross-sell. This is a missed revenue stream worth more than all the promo blasts combined (based on the RPR evidence from the 5 active customer campaigns that do exist).
**Action:** Build a campaign roadmap that addresses the missing types. Priority order: (1) Active customer monthly sends, (2) Cross-sell campaigns, (3) Referral ask campaign, (4) Sunset sequence for disengaged leads.

---

### 7.8 Exclusion Logic Review

**What:** Active subscriber exclusion from discount campaigns appears mostly intact but has gaps.

The `Yb4N4p` segment ("current active subscribers") is excluded from most Jan 2026 campaigns. However:

1. **Jan 6 Launch and Jan 8 emails** exclude `Yb4N4p` but the exclusion list is shorter (no `VrBx6t`, `Wtbmsd`, `Xpbbig` that appear in later sends). Early sends may have hit segments that were later suppressed.
2. **BFCM campaigns** use `X4vtnR` and `X7JcBs` as exclusions but NOT `Yb4N4p` — different exclusion segment, unclear if equivalent.
3. **Labor Day campaigns** exclude `Tb44U7` (All Subscribers Active), not `Yb4N4p`. Again, different segment — may have coverage gaps.
4. **No campaign explicitly confirms** that active subscribers paying $79/mo are suppressed from the $39 offer. If any active subscriber received the $39 campaign, it would be a direct incentive to cancel and re-subscribe at a lower price.

**Signal strength:** Medium
**So what:** The exclusion logic uses different segment IDs across different campaign periods. This suggests segments were created ad hoc rather than using a single canonical "suppress active subscribers" segment. The risk is coverage gaps — if `Yb4N4p` was created in Jan 2026 but BFCM campaigns used `X4vtnR`, the BFCM exclusion may not have caught the same profiles.
**Action:** Audit whether active subscribers received any discount campaign in the last 12 months. Create one canonical exclusion segment and use it consistently. Confirm $39 campaign did not reach $79/mo subscribers.

---

### 7.9 Promo Fatigue & Diminishing Returns

**What:** The $39 January campaign shows clear fatigue signals across its 25-day run.

| Metric | Launch (Jan 6-8) | Mid-Run (Jan 15-20) | Final Push (Jan 29-31) |
|--------|-----------------|--------------------|-----------------------|
| Recipients | 485–489K | 283–381K | 236–393K |
| Open Rate | 38–39% | 36–43% | 37–50% |
| Click Rate | 0.27–0.30% | 0.23–0.45% | 0.24–0.33% |
| Conv Rate | 0.019–0.021% | 0.016–0.025% | 0.018–0.026% |
| RPR | $0.01 | $0.01 | $0.01 |

RPR stayed flat at $0.01 across the entire 25-day run. No creative, no subject line, and no urgency tactic ("48 hours left," "FINAL DAY," "4 hours left") moved the needle. The audience was saturated by the launch emails and every subsequent send was noise.

Meanwhile, the SMS list shrank 18% over the same period. Email unsubs accumulated at 0.2–0.5% per send across 15 sends — cumulative email list damage of ~3–4% of the audience.

**Signal strength:** High
**So what:** 15 emails and 8 SMS messages in 25 days for the same offer is too many. Each additional send generated roughly the same $2.5–5K in revenue but cost permanent list attrition. The last 10 emails likely generated negative ROI when you factor in deliverability damage and list erosion.
**Action:** Cap promo campaigns at 5–7 emails maximum per offer period. Use the remaining touchpoints for education/content that supports the offer without repeating the same CTA.

---

### 7.10 Section 7 Summary — Top Campaign Findings

| # | Finding | Signal | Priority |
|---|---------|--------|----------|
| 1 | Active customer campaigns generate 100x the RPR of lead/churned blasts — yet they're almost never sent | High | Immediate |
| 2 | Click rates are sub-1% and worsen as audience size increases — Jan 2026 at 0.2-0.3% | High | Immediate |
| 3 | Campaign audiences have ballooned 10x (37K → 490K) with no engagement improvement | High | Strategic |
| 4 | SMS is burning list equity — 18% list attrition in Jan 2026, 5.15% unsub on launch day | High | Immediate |
| 5 | Product-specific churned winbacks work ($0.25 RPR) — repeat this pattern | Med-High | Strategic |
| 6 | Missing campaign types: cross-sell, referral, loyalty, re-engagement, subscription upgrade | High | Strategic |
| 7 | $39 promo ran 15 emails + 8 SMS in 25 days — severe promo fatigue, RPR never moved from $0.01 | High | Process |
| 8 | Exclusion logic uses different segments across periods — risk of active subscribers seeing discounts | Medium | Audit |
