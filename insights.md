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

**Finding:** 5 live flows have sent ZERO messages in 90+ days. 5 more had zero sends in the last 30 days but did send in the prior 60.

**Zero sends in 90 days (candidates for draft):**
| Flow | ID | Trigger | Last Updated |
|------|----|---------|--------------|
| Devotion - Onboarding & Gifting Reminder | RNKa8r | Added to List | Apr 2025 |
| Leads \| Sunrise Flow | Ty9mwJ | Added to List | Aug 2025 |
| Leads \| F7D Holdout | XnAtrm | Added to List | May 2025 |
| Devotion - Cold Outreach | Y7UFvn | Added to List | Apr 2025 |
| Ambassador/Influencer Flow - Outersignal | YksgL8 | Added to List | Aug 2025 |

**Zero sends in last 30d, but active in 90d:**
| Flow | ID | 90d Recipients | Notes |
|------|----|---------------|-------|
| Leads \| SMS Welcome Flow | VbPx4p | 1,208 | Dropped to zero recently — SMS list growth may have stalled |
| Leads \| Okendo Referral Invitation - Recipient | US2U2x | 183 | Low volume, event-driven |
| Leads \| Sunset Flow | VwDvzt | 124,376 | Massive volume in 90d, zero in 30d — likely a batch list add completed |
| Leads \| Okendo Referral Opt In | TUUBpH | 113 | Low volume, event-driven |
| Shipment \| Delivery Failed Notification | Xy4Hhb | 485 | New (Feb 2026), may have paused |

**Signal strength:** High
**So what:** 5 live flows are doing nothing. They clutter the workspace, and "Added to List" triggers that never fire suggest abandoned initiatives or lists that are no longer being populated. The SMS Welcome Flow dropping to zero in 30d is a specific concern — if SMS list growth has stopped, that's an acquisition channel going dark.
**Action:** Switch the 5 zero-90d flows to draft. Investigate why SMS Welcome Flow stopped. Confirm whether Sunset Flow completed a batch or if list additions truly stopped.

---

### 3.2 Are recipient figures time-boxed?

**Finding:** Yes. All flow performance data in this audit is **12-month trailing** (March 2025–March 2026). Confirmed via API query parameters and Klaviyo report settings. The 30-day and 90-day reports pulled during this investigation confirm the numbers are period-specific, not lifetime.

**Signal strength:** Low (resolved)
**Action:** None needed — figures are correctly time-boxed.

---

### 3.3 Flows to switch to draft

**Finding:** Beyond the 5 zero-send flows above, the landscape inventory already identifies 7 [DRAINING] flows and ~30+ draft/manual flows that are unused. The 5 identified in 3.1 should be added to the cleanup list.

**Additional flows worth reviewing for draft:**
- **Sunrise Flow (Ty9mwJ)** — live, zero sends in 90d, hasn't been updated since Aug 2025
- **F7D Holdout (XnAtrm)** — holdout experiment from Feb 2025, never updated since May 2025. Likely completed.

**Signal strength:** Medium
**Action:** Switch the 5 from 3.1 to draft. Consolidate with the housekeeping list for a single cleanup pass.

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

> **NEEDS HUMAN INTERVENTION — email template review required**

The API does not expose email template content for flow messages (only for standalone templates). The contradictory "halfway there" vs "almost at full month" copy and the mismatched progress bar were observed during a previous manual review and cannot be re-verified programmatically.

**Action:** Pull up the specific flow message in the Klaviyo email editor. Fix the copy to be consistent. This is a quick content fix once identified.

---

### 3.9 Orphan test content throughout flows

**Partial finding from API data:** Several flow message names suggest test/copy content that may be orphaned:

- "Copy of 05.12.2025 | Refill Reminder - 2nd refill..." (RzDGEq in TcGQ3t) — "Copy of" prefix, sending to 986 recipients in 30d. Is this intentional or a forgotten duplicate?
- "08.13.2025 | Refill Reminder - 1st refill - Gifting Journey - Educational **Test**" (Tprgkw) — "Test" in the name, sending to 1,901 recipients. Is this still a test or has it graduated to production?
- The Shipment Notifications flow is named "Tapp Test" (VSjPq3) — sending 9K/month. Still a test?

> **NEEDS HUMAN INTERVENTION** — a full sweep of message names and content across all flows is needed to identify orphan test blocks, placeholder copy, and "Copy of" duplicates.

**Signal strength:** Medium
**Action:** Flow-by-flow content audit in Klaviyo UI.

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

The brand factsheet confirms a kids gummy product existed (for children on stimulant medication) and sold out. Thesis plans to ramp it back up. When they do, they'll be starting from scratch on the Klaviyo side — no flows, segments, or campaign templates exist for this product line.

**Signal strength:** Low (informational — becomes high when product relaunches)
**Action:** Flag for Dan that when the kids product relaunches, they'll need: a dedicated segment, onboarding flow, refill flow, and potentially compliance-reviewed messaging given the audience (parents of children on medication).

---

*Section 3 investigation complete. 5 of 11 items fully resolved from data. 6 items require human intervention in Klaviyo UI.*
