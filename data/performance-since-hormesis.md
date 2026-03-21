# Performance Since Hormesis Launch (May 2025 – Mar 2026)
*Pulled live via Klaviyo API, March 21 2026*

---

## Subscription Flow (ReCharge)

| Month | Sub Starts | Sub Cancels | Net | Cumulative Net |
|-------|-----------|------------|-----|----------------|
| May 2025 | 4,927 | 5,304 | **-377** | -377 |
| Jun 2025 | 4,671 | 4,859 | **-188** | -565 |
| Jul 2025 | 4,288 | 4,941 | **-653** | -1,218 |
| Aug 2025 | 6,596 | 5,012 | **+1,584** | +366 |
| Sep 2025 | 4,897 | 5,357 | **-460** | -94 |
| Oct 2025 | 3,908 | 5,432 | **-1,524** | -1,618 |
| Nov 2025 | 5,702 | 5,313 | **+389** | -1,229 |
| Dec 2025 | 3,322 | 5,171 | **-1,849** | -3,078 |
| Jan 2026 | 7,644 | 5,810 | **+1,834** | -1,244 |
| Feb 2026 | 4,188 | 5,668 | **-1,480** | -2,724 |
| Mar 2026* | 2,762 | 3,689 | **-927** | -3,651 |

*March is partial (through ~Mar 20)*

**Critical observation: Cancellations are a flat floor.**
Cancels have held between 4,859 and 5,810 every single month for 11 months straight — regardless of how many new subscribers came in. The acquisition machine can spike (Aug, Jan, Nov) but cancels barely move. This is structural churn, not reactive churn.

---

## Revenue & Order Volume (Shopify Placed Order)

| Month | Orders | Unique Buyers | Revenue | AOV |
|-------|--------|--------------|---------|-----|
| May 2025 | 24,162 | 20,869 | $2,106,774 | $87 |
| Jun 2025 | 23,586 | 20,665 | $2,088,541 | $89 |
| Jul 2025 | 23,623 | 20,338 | $2,088,413 | $88 |
| Aug 2025 | 25,488 | 21,884 | $2,331,240 | $91 |
| Sep 2025 | 23,930 | 20,738 | $2,133,347 | $89 |
| Oct 2025 | 23,268 | 19,899 | $2,109,893 | $91 |
| Nov 2025 | 24,368 | 20,958 | $2,345,233 | $96 |
| Dec 2025 | 20,878 | 17,547 | $1,898,598 | $91 |
| Jan 2026 | 24,184 | 20,247 | $1,911,647 | $79 |
| Feb 2026 | 21,168 | 18,987 | $1,959,190 | $93 |
| Mar 2026* | 14,208 | 13,487 | $1,235,922 | $87 |

**Revenue has held in a tight $1.9M–$2.3M band for 10 months.**
Despite net subscriber loss every month, revenue is stable. The recurring sub base ($79/mo refills) is propping up revenue even as headcount shrinks. This will not hold indefinitely — it's a lagging indicator.

**January AOV drop to $79** is the $39 promo effect — large flood of first-month new subs at steep discount diluting average.

---

## Recurring Subscription Orders (ReCharge)

| Month | ReCharge Orders | Unique Subscribers |
|-------|----------------|-------------------|
| May 2025 | 12,537 | 11,349 |
| Jun 2025 | 15,336 | 13,472 |
| Jul 2025 | 17,174 | 14,939 |
| Aug 2025 | 18,383 | 15,964 |
| Sep 2025 | 17,830 | 15,610 |
| Oct 2025 | 17,739 | 15,280 |
| Nov 2025 | 19,731 | 17,161 |
| Dec 2025 | 16,612 | 14,094 |
| Jan 2026 | 20,182 | 17,265 |
| Feb 2026 | 18,015 | 16,321 |
| Mar 2026* | 12,265 | 11,895 |

**ReCharge orders grew from May through Aug/Sep, then plateaued ~17-20K.**
This represents the active subscriber base placing monthly refill orders. At a 25-day refill cycle, ~1.2 orders/subscriber/month, the implied active subscriber count is roughly **14,000–17,000** at any given point.

**Implied monthly churn rate: ~30–38%**
5,000–5,800 cancels per month ÷ ~14,000–17,000 active subscribers = 30–38% monthly churn.

---

## Quiz Completions (Top of Funnel)

| Month | Completions | Unique |
|-------|------------|--------|
| May 2025 | 11,110 | 9,583 |
| Jun 2025 | 10,969 | 9,883 |
| Jul 2025 | 13,508 | 12,186 |
| Aug 2025 | 21,693 | 19,731 |
| Sep 2025 | 10,056 | 9,026 |
| Oct 2025 | 10,586 | 9,557 |
| Nov 2025 | 15,830 | 14,232 |
| Dec 2025 | 9,654 | 8,627 |
| Jan 2026 | 18,276 | 16,632 |
| Feb 2026 | 15,285 | 13,907 |
| Mar 2026* | 6,313 | 5,780 |

Quiz completions spike alongside promotions (Aug = Labor Day, Nov = BFCM, Jan = $39). They flatten in non-promo months. The quiz is **driven by paid acquisition, not organic curiosity** — it's a conversion tool for ad traffic, not a standalone lead magnet.

---

## What Klaviyo Cannot Tell Us (True Cohort Retention)

To answer "of the people who subscribed in May 2025, what % are still subscribed today?" requires joining subscription start events to cancel events at the profile level and calculating time-to-cancel distributions. This is a data warehouse query (Hightouch likely has this, or ReCharge's own reporting). Klaviyo's API only gives us **aggregate monthly flows**, not cohort-level survival curves.

**What we can approximate instead:**
If monthly churn is ~30–38%, implied retention curve looks like:
- After Month 1: ~65–70% still active
- After Month 2: ~45–50%
- After Month 3: ~30–35%
- After Month 4: ~20–25%

This is an estimate, not a measurement. But even if the true number is twice as good (15% monthly churn), it's still a serious retention problem for a product that requires 60–90 days of consistent use to prove itself.

---

## The Core Tension

Revenue is stable. Subscriber count is shrinking. These two things are temporarily compatible because the recurring base ($79/mo refills) is a revenue floor. But:

- Every month of net subscriber loss is erosion of that floor
- The floor is masking what the subscriber count is telling you
- The business needs to either fix churn or run acquisition hard enough to outrun it — and the data shows they've been trying acquisition (August, November, January spikes) without solving churn

The acquisition spikes are temporary. The 5,000–5,800 cancel floor is permanent until something changes downstream.
