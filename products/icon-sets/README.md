# Modern SVG Icon Pack

> 200+ premium SVG icons for web and mobile interfaces
> Clean, consistent, scalable — ready for any project

## Contents

```
icon-sets/
├── outline/          # 60 outline icons (1.5px stroke)
│   ├── navigation/   # Arrow, menu, close, hamburger
│   ├── actions/      # Edit, delete, share, download, upload
│   ├── social/       # Twitter, GitHub, LinkedIn, Instagram
│   ├── media/        # Play, pause, volume, camera, mic
│   ├── commerce/     # Cart, bag, credit card, tag, star
│   └── communication/# Mail, chat, bell, notification
├── solid/            # 60 solid/filled icons
│   ├── navigation/
│   ├── actions/
│   ├── social/
│   ├── media/
│   ├── commerce/
│   └── communication/
├── brand/            # 30 brand & logo icons
├── animated/         # 10 animated SVG icons (CSS keyframes)
└── helpers/          # Spritesheet generator, Figma plugin link
```

## Format

- Each icon is a standalone `.svg` file
- Viewport: 24x24
- Stroke width: 1.5px (outline) / filled (solid)
- Stroke: `currentColor` — easy to customize
- Rounded caps and joins for a modern look
- Compatible with React, Vue, Angular, and plain HTML

## Usage

```html
<!-- Direct SVG -->
<img src="outline/actions/edit.svg" alt="Edit" />

<!-- Inline (customizable) -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
  <use href="sprite.svg#edit" />
</svg>

<!-- React -->
import { EditIcon } from './icons'
<EditIcon size={24} color="#6c5ce7" />
```

## Preview

All icons are designed on a consistent 24x24 grid with
proper padding (2px internal margin) for visual balance.

## License

MIT License — Free for personal and commercial use.
Attribution appreciated but not required.

---

Designed by Codex AI
