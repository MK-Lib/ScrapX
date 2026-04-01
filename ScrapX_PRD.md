# ScrapX — Product Requirements Document
**Version:** 1.0
**Date:** 30 March 2026
**Status:** Draft

---

## 1. Overview

### 1.1 Product Summary
ScrapX is a two-sided mobile marketplace that connects individual scrap metal sellers with licensed scrap yards. Sellers photograph their scrap, receive an AI-generated identification and valuation, then find and transact with the nearest yards — all from their phone. Yards manage incoming requests, confirm weights, and release payments through a dedicated dashboard.

### 1.2 Problem Statement
**For sellers:** The scrap metal selling process today is opaque and inefficient. Sellers don't know what their metal is worth, which yards offer the best price, or whether they'll be treated fairly when they arrive. Most people abandon small quantities of scrap because the friction isn't worth it.

**For yards:** Yards operate on manual, paper-based intake processes with no digital record of buyer history, no structured pricing publication, and no way to attract retail walk-in customers at scale.

### 1.3 Vision
Make selling scrap as simple as taking a photo — and give every scrap yard a digital front door.

---

## 2. Goals & Success Metrics

### 2.1 Business Goals
- Build a two-sided marketplace with network effects across urban markets in the Baltics
- Capture a transaction fee on every completed sale
- Become the primary price-discovery tool for retail scrap sellers

### 2.2 Launch Success Metrics (90 days post-launch)

| Metric | Target |
|---|---|
| Registered sellers | 2,000 |
| Verified scrap yards | 30 |
| Completed transactions | 500 |
| Avg. seller-to-payment time | < 2 hours |
| AI identification accuracy | ≥ 90% |
| Seller app store rating | ≥ 4.5 |

### 2.3 Long-term KPIs
- GMV (gross merchandise value) transacted per month
- Repeat sell rate per seller (target: 40% within 60 days)
- Yard utilisation rate (active jobs / available capacity)
- Price competitiveness index (ScrapX price vs. spot market)

---

## 3. Users & Personas

### 3.1 Retail Seller — "The Renovator"
- **Who:** Homeowner, tradesperson, or small contractor with occasional scrap from renovation, demolition, or equipment clearance
- **Volume:** 1–50 kg per transaction, 2–6 transactions per year
- **Pain:** Doesn't know the value of what they have; intimidated by yard environment; doesn't know which yard to go to
- **Needs:** Quick identification, fair pricing, nearby yards, simple payout

### 3.2 Retail Seller — "The Regular"
- **Who:** Self-employed tradesperson, electrician, plumber who generates scrap weekly
- **Volume:** 5–100 kg per transaction, weekly or biweekly
- **Pain:** Current process wastes time; no price transparency between yards
- **Needs:** Fast repeat flow, price comparison, reliable pickup option

### 3.3 Scrap Yard — "The Independent Operator"
- **Who:** Single-site SME yard owner/manager, 2–15 staff, processing 5–50 tonnes per month
- **Pain:** Inconsistent retail intake volume; manual paperwork; no digital presence
- **Needs:** Predictable request flow, automated pricing, inventory tracking, compliance records

### 3.4 Scrap Yard — "The Regional Chain"
- **Who:** Multi-site operator with a central operations team
- **Pain:** Price consistency across sites; management visibility into retail intake
- **Needs:** Centralised dashboard, branch-level pricing control, reporting exports

---

## 4. Scope

### 4.1 In Scope (v1.0)
- Seller mobile app (iOS + Android via React Native / PWA)
- Yard operator web + mobile dashboard
- AI metal identification (photos → metal type, grade, condition, weight estimate)
- Real-time yard map with condition-adjusted pricing
- Pickup and drop-off request flows
- KYC (seller) and KYB (yard) onboarding
- ScrapX in-app wallet + bank withdrawal
- Digital receipts and transaction history
- Auto and manual pricing modes for yards
- Auto-accept and manual review modes for yards
- Running inventory log per yard

### 4.2 Out of Scope (v1.0)
- B2B / bulk trading (pallet or container volumes)
- Auction or bidding mechanism
- Multi-currency support (EUR only at launch)
- In-app dispute resolution (handled by support team)
- Native iOS / Android apps (PWA first)
- Yard-to-yard metal trading
- Export to accounting software

---

## 5. Functional Requirements

### 5.1 Onboarding

#### Seller Registration
| ID | Requirement | Priority |
|---|---|---|
| S-ONB-01 | Seller registers via phone number + OTP verification | P0 |
| S-ONB-02 | Seller provides full name and country of residence | P0 |
| S-ONB-03 | Seller uploads government-issued ID for KYC review | P0 |
| S-ONB-04 | Seller enters IBAN / bank account for payouts | P0 |
| S-ONB-05 | Account status shown as Pending until KYC approved | P0 |
| S-ONB-06 | SMS notification sent on KYC approval or rejection | P0 |
| S-ONB-07 | Seller cannot initiate a transaction until KYC is approved | P0 |

#### Yard Registration
| ID | Requirement | Priority |
|---|---|---|
| Y-ONB-01 | Yard registers with company name, registration number, and address | P0 |
| Y-ONB-02 | Director uploads ID document for KYB review | P0 |
| Y-ONB-03 | Yard enters business IBAN for fund settlement | P0 |
| Y-ONB-04 | Yard goes live on the map only after KYB approval | P0 |
| Y-ONB-05 | Yard can configure multiple site locations under one account | P1 |

---

### 5.2 AI Identification

| ID | Requirement | Priority |
|---|---|---|
| AI-01 | Seller captures exactly 3 photos before submission | P0 |
| AI-02 | App provides guided prompts for each photo (front, angle, close-up/scale) | P0 |
| AI-03 | Seller can add a free-text description alongside photos | P1 |
| AI-04 | AI returns identification result in under 10 seconds | P0 |
| AI-05 | AI outputs: metal type, form factor, cleanliness grade, surface condition, condition notes, estimated weight range, estimated value range | P0 |
| AI-06 | Condition is assessed across two axes: Cleanliness (Clean / Mixed / Contaminated) and Surface (Pristine / Oxidised / Rusty / Heavily Corroded) | P0 |
| AI-07 | When confidence is low, AI presents top 2 candidate metal types for seller to confirm | P0 |
| AI-08 | Seller can manually override the identified metal type at any time before submitting a request | P0 |
| AI-09 | AI provides an actionable tip when condition improvements could meaningfully increase payout (e.g. removing fittings) | P1 |
| AI-10 | Estimated value range is adjusted for the identified condition grade, not spot price only | P0 |
| AI-11 | AI model versioning is tracked per transaction for audit and retraining purposes | P1 |

---

### 5.3 Yard Discovery & Map

| ID | Requirement | Priority |
|---|---|---|
| MAP-01 | Seller chooses between current GPS location or a custom pin / address search | P0 |
| MAP-02 | Map displays all verified, active yards within a configurable radius (default: 25 km) | P0 |
| MAP-03 | Each yard pin displays today's price for the seller's identified metal type and condition grade | P0 |
| MAP-04 | Seller can filter yards by: nearest distance, highest price, pickup available | P0 |
| MAP-05 | Seller can toggle between map view and list view | P0 |
| MAP-06 | Tapping a yard pin opens a detail card with name, address, hours, price list, pickup/drop-off badge, and rating | P0 |
| MAP-07 | Yard detail shows full price list for all metal types and condition grades it accepts | P1 |
| MAP-08 | Yards that are closed today are shown greyed-out and excluded from default filter results | P1 |
| MAP-09 | Seller's estimated payout at each yard is shown, calculated from AI weight estimate × yard price | P0 |

---

### 5.4 Request & Matching

| ID | Requirement | Priority |
|---|---|---|
| REQ-01 | Seller reviews a summary card (yard, metal type, condition, est. weight, est. payout) before submitting | P0 |
| REQ-02 | Today's price is locked at the moment the request is submitted | P0 |
| REQ-03 | Seller chooses delivery mode: Deliver Myself or Request Pickup | P0 |
| REQ-04 | In Auto-Accept mode, yard immediately confirms the request | P0 |
| REQ-05 | In Manual Review mode, yard receives a notification and must Accept or Decline within a configurable window (default: 30 min) | P0 |
| REQ-06 | Yard notification shows: metal type, condition, estimated weight, user location, and all 3 photos | P0 |
| REQ-07 | If yard declines, seller is notified and returned to the map to select another yard | P0 |
| REQ-08 | Seller receives a Matched confirmation screen with directions and tracking link on acceptance | P0 |
| REQ-09 | Seller can cancel a request before arriving at the yard with no penalty | P1 |

---

### 5.5 Delivery & Payment

| ID | Requirement | Priority |
|---|---|---|
| PAY-01 | Yard staff enter the final weighed weight via the dashboard | P0 |
| PAY-02 | Yard staff confirm or adjust the final condition grade | P0 |
| PAY-03 | Final payout is auto-calculated: final weight × locked price | P0 |
| PAY-04 | Seller sees the final payout breakdown and must tap Accept & Get Paid to confirm | P0 |
| PAY-05 | On seller acceptance, funds are immediately released to the seller's ScrapX wallet | P0 |
| PAY-06 | Seller can withdraw wallet balance to their registered bank account at any time | P0 |
| PAY-07 | A digital receipt is generated per transaction, stored in the seller's history | P0 |
| PAY-08 | Withdrawal to bank account settled within 1 business day | P0 |
| PAY-09 | Transaction fees are deducted transparently before release (fee schedule TBD) | P0 |

---

### 5.6 Yard Dashboard

#### Pricing
| ID | Requirement | Priority |
|---|---|---|
| YD-PRC-01 | Yard selects Auto Market Pricing or Manual Pricing mode | P0 |
| YD-PRC-02 | Auto mode: system sets daily prices per metal type and condition grade, derived from LME spot rates with a configurable margin | P0 |
| YD-PRC-03 | Manual mode: yard staff set prices per metal type and condition grade each morning before opening | P0 |
| YD-PRC-04 | Yard can set minimum and maximum price bounds even in Auto mode | P1 |
| YD-PRC-05 | Pricing changes take effect immediately on the map | P0 |
| YD-PRC-06 | Historic price log is retained per yard for compliance review | P1 |

#### Request Handling
| ID | Requirement | Priority |
|---|---|---|
| YD-REQ-01 | Yard selects Auto-Accept or Manual Review mode independently of pricing mode | P0 |
| YD-REQ-02 | Manual review queue shows all pending requests with photos, metal type, weight estimate, and seller distance | P0 |
| YD-REQ-03 | Yard can Accept or Decline individual requests from the dashboard | P0 |
| YD-REQ-04 | Unanswered requests auto-expire after the configured review window | P0 |

#### Inventory
| ID | Requirement | Priority |
|---|---|---|
| YD-INV-01 | Every confirmed and paid transaction is automatically appended to the yard's running inventory log | P0 |
| YD-INV-02 | Inventory log records: metal type, condition grade, final weight, buy price, timestamp, and seller transaction ID | P0 |
| YD-INV-03 | Yard can view current stockpile totals by metal type and grade | P0 |
| YD-INV-04 | Yard can export inventory data as CSV for accounting and compliance | P1 |

---

## 6. Non-Functional Requirements

### 6.1 Performance
- AI identification response: p95 < 10 seconds under normal network conditions
- Map load time: < 2 seconds on 4G
- Payment release: < 5 seconds from seller confirmation to wallet credit

### 6.2 Availability
- App and API uptime: ≥ 99.5% monthly
- Planned maintenance communicated 48h in advance

### 6.3 Security & Compliance
- All KYC / KYB documents stored encrypted at rest (AES-256)
- PII handled in compliance with GDPR (EU)
- Payment flows compliant with PSD2 (EU)
- Transaction records retained for 7 years per AML requirements
- ID documents reviewed by a licensed KYC provider (e.g. Onfido, Veriff)

### 6.4 Accessibility
- WCAG 2.1 AA compliance for all primary flows
- Minimum tap target size: 44×44pt
- All AI result text available to screen readers

### 6.5 Localisation
- Launch language: English
- v1.1 target: Latvian, Lithuanian, Estonian
- All prices displayed in EUR

---

## 7. User Flows Summary

### 7.1 Seller Flow
```
Register → Home → Choose Location → Capture 3 Photos
→ AI Analysis (<10s) → Review Result → Find Yards on Map
→ Select Yard → Confirm Request → Matched
→ Deliver / Pickup → Yard Weighs → Accept Payout → Paid
```

### 7.2 Yard Flow
```
Register → Configure Pricing Mode → Configure Acceptance Mode
→ Receive Request Notification → Review / Auto-Accept
→ Active Job (weigh + confirm condition) → Release Payment
→ Inventory Auto-Updated
```

---

## 8. AI Model Requirements

| Requirement | Detail |
|---|---|
| Input | 3 JPEG/PNG images, optional text description |
| Output | Metal type, form factor, cleanliness grade, surface condition, free-text notes, weight range (kg), value range (EUR), confidence score, improvement tip |
| Confidence threshold | If top prediction < 80% confidence, return top 2 candidates for user selection |
| Supported metals (v1) | Copper (pipe, wire, sheet), Aluminium (sheet, extrusion, cast), Steel (structural, mixed, sheet), Brass, Stainless Steel, Lead, Iron |
| Condition grades | Grade 1 (clean/pristine), Grade 2 (mixed/oxidised), Grade 3 (contaminated/heavily corroded) |
| Weight estimation | Based on visual volume estimation + known density per metal type; expressed as a range (±30%) |
| Retraining | Model retrained quarterly using yard-confirmed final weights and conditions as ground truth |

---

## 9. Pricing & Business Model

| Revenue Stream | Mechanism |
|---|---|
| Transaction fee | % of GMV per completed transaction (e.g. 5–8%, exact rate TBD) |
| Yard subscription (optional) | Monthly fee for premium features: analytics, multi-site, API access |
| Auto-pricing service | Included in yard subscription; not charged separately |

**Price lock mechanism:** The price displayed on the map at the time a seller submits a request is the price used for payout calculation, regardless of market movements between submission and delivery.

---

## 10. Open Questions

| # | Question | Owner | Due |
|---|---|---|---|
| 1 | What is the transaction fee rate? Flat or tiered by volume? | Commercial | TBD |
| 2 | Which KYC/KYB provider will be used? (Veriff, Onfido, Jumio?) | Legal / Engineering | TBD |
| 3 | Which payment rails for wallet-to-bank withdrawal? (Banking API, SEPA) | Engineering | TBD |
| 4 | What is the review window for Manual Accept before auto-expiry? | Product | TBD |
| 5 | Will pickup be fulfilled by ScrapX logistics or yard-owned vehicles? | Operations | TBD |
| 6 | Is the AI built in-house or via third-party vision API? (GPT-4o Vision, custom model?) | Engineering | TBD |
| 7 | What is the minimum withdrawal amount from the wallet? | Finance | TBD |
| 8 | How are disputed weights handled? Who arbitrates? | Legal / Operations | TBD |

---

## 11. Milestones

| Milestone | Target Date |
|---|---|
| PRD sign-off | Week 1 |
| Design system & component library complete | Week 3 |
| AI model v1 (prototype accuracy benchmark) | Week 4 |
| Backend API spec + data model finalised | Week 4 |
| Alpha build (seller flow, no payments) | Week 7 |
| KYC/KYB provider integrated | Week 8 |
| Payment rails integrated (wallet + withdrawal) | Week 9 |
| Beta with 5 pilot yards | Week 10 |
| Public launch — Riga | Week 14 |

---

*Document owner: Product
Next review: Weekly until sign-off*
