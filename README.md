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
- **CI/CD**: Automated deployment to GitHub Pages via GitHub Actions without repository secrets.

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

## Project Structure
- `src/constants/resume-data.ts`: Single source of truth for all portfolio content with `{en, pt}` translatable fields.
- `src/constants/data.ts`: Resolves resume data into language-specific `PortfolioData`.
- `src/constants/translations.ts`: UI labels and navigation translations.
- `src/components/`: UI components organized by layout, sections, and ui.
- `src/context/`: Global state management for Theme and Language.
- `src/hooks/`: Custom hooks for translations and visibility logic.
- `src/utils/`: Helpers for class merging (`cn`) and date formatting.

## Deployment
Automated via GitHub Actions on push to `main` or manual `workflow_dispatch`. The workflow builds the Vite app and deploys the `dist` artifact to GitHub Pages using the short-lived `GITHUB_TOKEN` provided by GitHub Actions.

For the default project Pages URL, no variables or secrets are required. For a custom domain hosted at the root path, set the public repository variable `BASE_PATH=/`.
