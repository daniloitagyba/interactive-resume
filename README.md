# Interactive Resume

A modern, high-performance, responsive, and bilingual professional portfolio.

Preview: https://itagyba.work/

## Technologies
- **React 18** (Functional components, Hooks, Suspense)
- **Vite** (Next-generation frontend tooling)
- **TypeScript** (Robust static typing)
- **Tailwind CSS v4** (Advanced utility-first styling)
- **Framer Motion** (Production-ready animations)
- **Lucide React** (Modern icon set)

## Key Features
- **Dark/Light Theme**: Theme engine with localStorage persistence.
- **Bilingual Support (EN/PT)**: Scalable translation system using React Context.
- **Single Source of Truth**: Unified data file with translatable fields and auto-generated periods from real dates.
- **Optimized Performance**: Code Splitting and Lazy Loading for fast initial paint.
- **Accessibility (a11y)**: Semantic HTML and ARIA attributes for screen reader support.
- **Mobile First**: Fluid layouts optimized for smartphones, tablets, and desktops.
- **CI/CD**: Automated deployment to VPS via GitHub Actions over Cloudflare Tunnel.

## Setup & Execution
1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Run development server**:
   ```bash
   npm run dev
   ```
3. **Build for production**:
   ```bash
   npm run build
   ```

## Local Resume Editor

Run `npm run dev` and open [http://localhost:5173/editar](http://localhost:5173/editar), or use the pencil button in the local navigation bar.

- The editor covers the bilingual summary, experience, skills, education, and languages.
- Descriptions and technologies use one item per line, matching the current UI data model.
- Saving validates the data and rewrites `src/constants/resume-data.ts` and `src/constants/tech-stack.ts`; Vite then refreshes the preview through HMR.
- The route, navigation button, and write API are development-only. The API additionally rejects non-loopback connections.
- Review the generated diff and run `npm run build` before committing or deploying.

## Project Structure
- `src/constants/resume-data.ts`: Single source of truth for all portfolio content with `{en, pt}` translatable fields.
- `src/constants/data.ts`: Resolves resume data into language-specific `PortfolioData`.
- `src/constants/translations.ts`: UI labels and navigation translations.
- `src/components/`: UI components organized by layout, sections, and ui.
- `src/context/`: Global state management for Theme and Language.
- `src/hooks/`: Custom hooks for translations and visibility logic.
- `src/utils/`: Helpers for class merging (`cn`) and date formatting.

## Deployment
Automated via GitHub Actions on push to `main` or manual `workflow_dispatch`. The workflow builds the Vite app, syncs `dist` to the VPS over Cloudflare Tunnel, and serves it with PM2 on port `3001`.

Required GitHub configuration:
- Secret: `VPS_SSH_KEY`
- Repository variables, or existing secrets as fallback: `VPS_HOST`, `VPS_USER`

No credential values are stored in the repository.
