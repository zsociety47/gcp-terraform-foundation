# UI Design Direction

## Visual Approach (Day 0 Proposal)

A clean, professional event platform aesthetic — **not** the cosmic/space reference styling.

| Element | Choice | Rationale |
|---|---|---|
| Typography | Inter (Google Fonts) | Excellent readability, professional |
| Primary palette | Slate/navy (`surface-900`) | Trust, professionalism |
| Accent palette | Warm orange (`brand-500`) | Energy, urgency — appropriate for events/tickets |
| Background | Light gray (`surface-50`) | Clean, high contrast for WCAG 2.1 AA |
| Layout | Max-width container (6xl) | Readable on desktop, responsive on mobile |

## Component Approach

**Current (Day 0):** Custom components built with Tailwind CSS utility classes. No component library dependency.

**Open decision:** Whether to adopt a headless UI kit (Radix UI, Headless UI) for accessible primitives (dialogs, dropdowns, tabs) as the app grows.

| Option | Pros | Cons |
|---|---|---|
| Custom (current) | Full control, no deps, lightweight | More work for complex a11y patterns |
| Radix UI | Excellent a11y, unstyled primitives | Additional dependency, learning curve |
| Headless UI | Tailwind-native, good a11y | Smaller component set |

> **Action needed:** Confirm component library preference before building complex interactive patterns (modals, date pickers, etc.).

## Accessibility

- Semantic HTML throughout (`<article>`, `<section>`, `<dl>`, `<nav>`)
- ARIA labels on interactive elements and status indicators
- `aria-live="polite"` on fraud check status (dynamic updates)
- Color contrast targets 4.5:1 minimum (verified against slate/orange palette)
- Keyboard-navigable quantity controls and form fields
- Screen reader labels via `.sr-only` class

## Mobile Responsiveness

- Single-column layout on mobile, two/three-column on tablet/desktop
- Sticky checkout summary on event page (desktop sidebar, full-width on mobile)
- Touch-friendly quantity buttons (36px minimum tap target)
- Checkout form stacks vertically on all screen sizes

## Agent-Driven UI Elements

Built against stubbed data shapes that match future LangGraph agent responses:

1. **FraudCheckStatus** — pending → cleared animation with status indicator
2. **ForecastRecommendationCard** — apply/dismiss actions with confidence score
3. **SelloutRiskIndicator** — visual meter with risk level badge
4. **NotificationsFeed** — typed notification items from agent events

Mock data lives in `frontend/src/data/mockData.ts`.
