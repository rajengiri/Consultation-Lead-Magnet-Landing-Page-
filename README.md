# Digital Rajen Consultation Landing Page

A focused Next.js landing page for a free one-hour AI marketing consultation, plus a `/thank-you` page.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run typecheck
npm run build
```

## Deploy to Vercel

1. Push the project to a Git repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected framework as **Next.js** and the default build settings.
4. Add `NEXT_PUBLIC_SITE_URL` as the full production URL, such as `https://yourdomain.com`.
5. Deploy, then connect the production domain.

## Before you launch

- Add the Vimeo URL in `lib/config.ts`.
- Add the WhatsApp number in `lib/config.ts` using country code and digits only.
- Add the square favicon when it is available.
- Replace the simulated form submission in `lib/submitLead.ts` with a real backend.
- Set `NEXT_PUBLIC_SITE_URL` to the real production domain.
- Submit a test lead after the backend is connected.
