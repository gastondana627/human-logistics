# HUMAN LOGISTICS - Landing Page

A sleek, industrial dark-themed landing page for the UPS Peak Season Biometric Audit 2024-2025.

## Features

- **Industrial Dark Theme**: Zinc-950 background with UPS Gold (#FFB500) and ORCID Green (#A6CE39) accents
- **Responsive Bento Grid Layout**: 12-column grid system that adapts to all screen sizes
- **Interactive Cards**: Hover effects with accent color glows
- **Animated Tech Stack**: Scrolling technology showcase
- **Lucide React Icons**: Clean, modern iconography

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app/page.tsx` - Main landing page component
- `/app/layout.tsx` - Root layout with metadata
- `/app/globals.css` - Global styles and custom animations

## Customization

### Colors
The theme uses custom colors defined in `globals.css`:
- UPS Gold: `#FFB500`
- ORCID Green: `#A6CE39`
- Background: `zinc-950`

### Links
Update the following links in `page.tsx`:
- Dashboard URL: `https://logistics-performance-analysis-2025.vercel.app/`
- LinkedIn: `https://www.linkedin.com/in/gaston-dana`
- Kaggle Dataset: `https://www.kaggle.com/code/gastondana/exploratory-analysis-quantifying-human-cost-final`

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy easily with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
