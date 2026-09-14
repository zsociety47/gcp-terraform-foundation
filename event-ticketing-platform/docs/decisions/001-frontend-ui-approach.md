# ADR-001: Frontend UI Approach

## Status
Proposed — awaiting confirmation

## Context
The ticketing platform frontend needs three screens (event page, checkout, organizer dashboard) with agent-driven UI elements. No existing design system. A low-fidelity cosmic/space reference exists for structural flow only — visual styling should be independent.

## Decision (Proposed)

- **Framework:** React 18 + TypeScript (strict) + Vite
- **Styling:** Tailwind CSS v4 with custom design tokens (brand orange, slate surfaces)
- **Components:** Custom-built for Day 0; evaluate headless UI kit (Radix/Headless UI) before adding modals/complex patterns
- **Routing:** React Router v7
- **Data:** Mock/stub data for agent responses until LangGraph agents are wired

## Open Questions

1. **Component library:** Custom vs Radix UI vs Headless UI?
2. **Visual style:** Confirm the proposed warm-orange-on-slate direction, or provide alternative preferences
3. **Auth UI:** Google Identity Platform / Firebase Auth integration pattern (not yet built)

## Consequences

**Positive:** Lightweight scaffold, no lock-in, mock data enables parallel frontend/backend development.
**Negative:** Complex a11y patterns (modals, comboboxes) will need more effort without a headless kit.
**Next step:** User confirms component library and visual direction before Day 2 frontend work.
