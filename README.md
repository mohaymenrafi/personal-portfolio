# Portfolio — Frontend

Personal portfolio and blog for Abdullah Al Mohaymen Rafi. Built with Next.js, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Auth:** better-auth client (session-based)
- **Rich text:** TipTap
- **Media:** Cloudinary
- **Fonts:** Geist + SF Mono

## Pages

| Route | Description |
|---|---|
| `/` | Portfolio homepage (Hero, About, Experience, Projects, Contact) |
| `/blog` | Blog listing with search and pagination |
| `/blog/[slug]` | Blog post with prev/next navigation |
| `/admin/posts` | Admin — post management (protected) |
| `/admin/posts/new` | Admin — create post |
| `/admin/posts/[id]/edit` | Admin — edit post |
| `/login` | Admin login |

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm
- Backend running (see [portfolio-backend](https://github.com/mohaymenrafi/portfolio-backend))

### Setup

```bash
pnpm install
```

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the dev server:

```bash
pnpm dev
```

App available at `http://localhost:3000`

## Admin Access

Navigate to `/login` and sign in with your credentials. Admin routes are protected by session-based auth — unauthenticated requests are redirected to `/login`.

## Server Wake Handling

The backend is hosted on Render's free tier which spins down after inactivity. The frontend handles this gracefully:

- **Homepage** fires a silent background ping to `/api/health` on load to pre-warm the server
- **Blog pages** fetch client-side and auto-retry every 5 seconds, showing an animated "Server is waking up…" message until the server responds

## Deployment

Deployed on [Vercel](https://vercel.com).

Set the following environment variables in Vercel project settings:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_API_URL` | Backend URL (e.g. `https://your-app.onrender.com`) |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | Cloudinary unsigned upload preset |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
