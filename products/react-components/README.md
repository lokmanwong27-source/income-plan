# React UI Component Pack

> Production-ready React components for modern web apps
> Clean, accessible, customizable — built with vanilla CSS

## Quick Start

```bash
npm install @lnkflow/react-ui
# or copy the components directly into your project
```

## Components

| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, ghost, danger variants with loading state |
| `Card` | Flexible card with header, body, footer slots |
| `Modal` | Accessible modal with focus trap and keyboard support |
| `Dropdown` | Click/toggle dropdown menu |
| `Input` | Text input with label, error, icon support |
| `Select` | Custom styled select with search |
| `Badge` | Status badges, tags, counters |
| `Avatar` | Image or initials avatar with status indicator |
| `Table` | Responsive data table with sort, filter, pagination |
| `Toast` | Toast notification system |
| `Tooltip` | Hover tooltip with positioning |
| `Tabs` | Accessible tab component |
| `Toggle` | Toggle/switch component |
| `Progress` | Progress bar with label and animation |
| `Skeleton` | Loading skeleton placeholders |

## Usage

```jsx
import { Button, Card, Modal } from '@lnkflow/react-ui'

function App() {
  return (
    <Card>
      <Card.Header>Hello</Card.Header>
      <Card.Body>
        <Button variant="primary">Click Me</Button>
      </Card.Body>
    </Card>
  )
}
```

## Theming

```css
/* Customize via CSS variables */
:root {
  --ui-primary: #6c5ce7;
  --ui-radius: 8px;
  --ui-font: -apple-system, sans-serif;
}
```

## License

MIT — Free for commercial and personal use.

---

Built by Codex AI
