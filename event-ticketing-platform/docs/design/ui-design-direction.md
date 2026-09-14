# UI Design Direction

## Implemented scope (Day 0)

| Screen | Route | Status |
|---|---|---|
| Public event page | `/events/:eventId` | Implemented — hero, description, ticket tier **display** (mock data) |
| Checkout flow | `/events/:eventId/checkout` | Planned — later sprint day |
| Organizer dashboard | `/organizer/dashboard` | Planned — later sprint day |

Day 0 intentionally has **no** cart quantity controls, checkout summary, or agent-driven widgets in the UI. Types for orders and agents will be added when those features are built.

## Visual Approach (Day 0)

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

## Accessibility (Day 0)

- Semantic HTML (`<article>`, `<section>`, `<dl>`)
- Descriptive text for hero images and tier cards
- Color contrast targets 4.5:1 minimum on slate/orange palette

Future screens (checkout, dashboard) will add `aria-live` regions for fraud check status, keyboard-first forms, and quantity controls with 36px tap targets.

## Mobile Responsiveness (Day 0)

- Single-column layout for event content and tier list
- Responsive hero and typography scaling

Checkout sticky summary and multi-column dashboard layouts are planned with those features.

## Agent-Driven UI Elements (planned)

Not in the Day 0 codebase. When checkout and organizer dashboard are built, UI will consume stubbed then live agent payloads:

1. **FraudCheckStatus** — checkout screening state  
2. **ForecastRecommendationCard** — organizer apply/dismiss  
3. **SelloutRiskIndicator** — dashboard risk meter  
4. **NotificationsFeed** — recent agent/system events  

Mock data will live in `frontend/src/data/mockData.ts` as each screen lands.
