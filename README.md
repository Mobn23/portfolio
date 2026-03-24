# Mohamed Bnshi — Portfolio

Personal portfolio site built with Astro + Tailwind CSS. Bilingual (EN/SV).

## Development

```bash
npm install
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```

## Deployment (Free on Vercel)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Import Project" → select this repo
4. Vercel auto-detects Astro — just click "Deploy"
5. Done! You get a free `.vercel.app` domain (or connect your own)

## Customization

- **Profile photo**: Replace the `MB` placeholder in `src/components/About.astro` with an `<img>` tag
- **LinkedIn/GitHub links**: Update URLs in `src/components/Contact.astro`
- **Content**: Edit translations in `src/i18n/translations.ts`
- **Colors/styling**: Edit `tailwind.config.mjs`
