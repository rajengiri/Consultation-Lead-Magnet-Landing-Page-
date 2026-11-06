# Digital Rajen Consultation Landing Page

A focused Next.js landing page for a free 30-minute AI marketing consultation, plus a `/thank-you` page.

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

- Replace the temporary Vimeo demo URL in `lib/config.ts` with the final video.
- Confirm the WhatsApp number in `lib/config.ts`.
- Add the square favicon when it is available.
- Set `NEXT_PUBLIC_SITE_URL` to the real production domain.
- Submit a real test lead and confirm it appears in the correct Flodesk segment.
- Confirm the Flodesk workflow sends the expected automation email.
