# blank Design Starter

A comprehensive, interactive component showcase and design system starter for Next.js projects optimized for AI-assisted development workflows, part of the blank project.

👉 [View the Live Preview](https://blank-project-gamma.vercel.app/)


## What Is This?

The blank Design Starter is a specialized Next.js template designed to accelerate UI development with a focus on AI-assisted workflows. Unlike typical component libraries or design systems, this project provides:

1. **Live Component Registry** - An interactive showcase of all shadcn/ui components with real-time theme reflection
2. **AI-Optimized Structure** - Organized specifically for effective interaction with AI coding assistants like Cursor
3. **Practical Implementation Path** - Direct bridge between choosing themes on shadcn/ui's themes page and implementing them
4. **Development-Time Resource** - Serves as both documentation and playground during development

This project is specifically designed to complement the [shadcn/ui themes page](https://ui.shadcn.com/themes), providing a working environment where those themes can be directly applied and tested.

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router structure
│   │   ├── page.tsx            # Landing page explaining the starter
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── globals.css         # Global styles and Tailwind directives
│   │   └── registry/           # Component registry (development only)
│   │       └── page.tsx        # Interactive component showcase
│   │
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx      # UI components from shadcn/ui
│   │   │   ├── card.tsx
│   │   │   └── ... (many more)
│   │   │
│   │   ├── theme-provider.tsx  # Theme provider wrapper
│   │   ├── theme-toggle.tsx    # Theme switching component
│   │   ├── theme-import.tsx    # Component to import themes from shadcn/ui
│   │   ├── theme-controls.tsx  # Component to customize theme preview
│   │   ├── styles-showcase.tsx # Theme visualization components
│   │   └── *-examples.tsx      # Category-specific example components (dynamically loaded)
│   │
│   └── lib/                    # Utility functions
│       ├── utils.ts            # Common utility functions
│       └── theme-utils.ts      # Theme processing utility
│
├── public/                     # Static assets
├── components.json             # shadcn/ui configuration
├── next.config.mjs             # Next.js configuration (standard format)
├── tailwind.config.js          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Technical Details

### Core Technologies

- **Next.js 15+** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component collection built on Radix UI
- **Radix UI** - Headless UI primitives
- **Sonner** - Toast notifications
- **Lucide React** - Icon library

### Key Features

1. **Component Registry** (`/registry` route) - Organized by category:
   - Styles (colors, typography, UI styling)
   - Layout components
   - Forms & inputs
   - Feedback components
   - Navigation components
   - Data display components
   - Overlays
   - Date & time components

2. **Theme System**:
   - Light/dark mode toggle
   - System preference detection
   - CSS variables for all theme values
   - Real-time theme preview controls (Primary Color, Border Radius)
   - Shadcn/ui Theme Importer for easy configuration transfer

3. **AI-Assisted Customization**:
   - Instructions for modifying with AI tools
   - Clear file structure for AI context
   - Component examples optimized for prompting

4. **Performance**:
   - Dynamic imports for registry example components
   - Production build script (`build:prod`) to exclude registry

## How to Use This Project

### For Development

1. **Explore Components**: Browse the Registry (`/registry`) to see available components and how they look with current theme settings.
2. **Customize Theme**: 
    - Use the Theme Customizer controls for live preview adjustments.
    - Use the Theme Importer: Copy JSON theme config from [shadcn/ui themes](https://ui.shadcn.com/themes), paste it into the importer, process it, and copy the generated Tailwind snippet.
3. **Apply Theme**: Paste the generated snippet into your `tailwind.config.mjs` file to persist changes.
4. **Modify with AI**: Use AI assistants (like Cursor) to further customize theme variables in `tailwind.config.mjs` or request component usage examples.
5. **Build Your App**: Use the components and themes to build your actual application pages.

### For Production

Before deploying to production, use the `build:prod` script to automatically exclude registry components:
  ```bash
  npm run build:prod
  ```
- This uses environment variables and Next.js redirects to prevent the registry pages from being included in the production build, reducing bundle size.

## Design Decisions & Rationale

This project makes several intentional design decisions based on KISS principles:

1. **Registry as Development Resource**: The registry exists primarily as a development-time tool.
2. **Live Theme Preview & Import**: Provides immediate visual feedback and a simple way to integrate shadcn/ui themes.
3. **AI-Assisted Workflow**: Optimized structure and documentation for AI tools.
4. **shadcn/ui Foundation**: Builds upon shadcn/ui rather than reinventing components.
5. **Simplicity**: Avoids unnecessary abstractions or complexity.

## Working with AI Assistants

This project is specifically designed to work well with AI coding assistants. When using tools like Cursor:

1. **Theme Customization**: Ask the AI to help modify theme variables in `tailwind.config.mjs` based on visual preferences or the output from the Theme Importer.
2. **Component Usage**: Request code examples for specific components, using the registry as reference.
3. **Layout Creation**: Ask for assistance in building page layouts using the available components.
4. **Troubleshooting**: Share both the component registry view and your implementation code for context when debugging.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js](https://nextjs.org/)
- [Sonner](https://sonner.emilkowal.ski/)
