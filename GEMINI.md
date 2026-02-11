# GEMINI.md - Portfolio Project Context

This file provides the necessary instructional context for Gemini to understand and work effectively with this codebase.

## Project Overview

This is a personal professional portfolio for **Danilo G. Itagyba Neto**, a Senior Software Engineer. The project is a modern, responsive, and high-performance web application.

### Main Technologies
- **Core:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (using the `@tailwindcss/vite` plugin)
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **State Management:** React Context API (Theme and Language)

### Architecture
- **Component-Based:** Modular UI components located in `src/components/`.
- **Data-Driven:** All content is centralized in `src/constants/data.ts` to support easy updates and internationalization.
- **Internationalization (i18n):** Built-in support for English (EN) and Portuguese (PT) toggled via `LanguageContext`.
- **Theming:** Primarily focused on a **Midnight Blue** dark theme, managed via `ThemeContext`.

## Building and Running

Commands are managed through `npm`.

- **Development Server:**
  ```bash
  npm run dev
  ```
- **Production Build:**
  ```bash
  npm run build
  ```
- **Local Preview of Build:**
  ```bash
  npm run preview
  ```

## Project Structure

- `src/components/`: Contains functional components for each section (Hero, About, Experience, Skills, etc.).
- `src/constants/data.ts`: The single source of truth for all text content in both supported languages.
- `src/context/`: Contains `LanguageContext.tsx` and `ThemeContext.tsx` for global state.
- `src/hooks/`: Utility functions like `cn` (class merging).
- `src/index.css`: Tailwind CSS entry point with custom theme variables.
- `resume/`: Holds the original PDF documents used as references for the data.

## Development Conventions

1. **Language:** Code comments, documentation, and commit messages should be in **English**.
2. **Typing:** Strict TypeScript usage. Interfaces for all data structures (see `src/constants/data.ts`).
3. **Styling:** Use Tailwind CSS utility classes. For complex class logic, use the `cn` utility from `src/hooks/utils.ts`.
4. **Consistency:** When updating information, always update both the `en` and `pt` keys in `DATA` within `src/constants/data.ts`.
5. **Components:** Prefer functional components and hooks over class components.
6. **Themes:** The project is currently locked to a dark theme (Midnight Blue). Ensure any new components respect the `dark` class or the custom theme variables defined in `index.css`.
