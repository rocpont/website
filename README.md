# roc pont — Portfolio

Personal portfolio website for **roc pont**.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool & dev server
- **Tailwind CSS 4** — styling
- **Framer Motion** — animations
- **i18next** — internationalisation (Catalan, Spanish, English)

## Getting Started

### Prerequisites

- **Node 22** (managed via [Volta](https://volta.sh))
- **pnpm 10**

### Install & Run

```bash
pnpm install
pnpm dev
```

### Build for Production

```bash
pnpm build
pnpm preview
```

## Project Structure

```
src/
├── components/
│   └── ui/          # layout shell
├── lib/             # i18n config & utilities
├── locales/         # ca.json · es.json · en.json
├── App.tsx
└── main.tsx
```
