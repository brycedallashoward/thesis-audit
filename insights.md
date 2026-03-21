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

*Add new findings below as discovery continues*
