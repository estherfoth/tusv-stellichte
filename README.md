# TuSV Stellichte Website

Website for TuSV Stellichte, a local sports club in Stellichte.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Database:** Supabase
- **CMS:** Contentful
- **Styling:** CSS Modules + normalize.css
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Supabase and Contentful credentials

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Required environment variables (see `.env.example`):

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
- `CONTENTFUL_SPACE_ID` - Contentful space ID
- `CONTENTFUL_ENVIRONMENT` - Contentful environment (default: master)
- `CONTENTFUL_DELIVERY_TOKEN` - Contentful delivery API token

## Project Structure

```
src/
├── app/
│   ├── (pages)/      # Route groups for different pages
│   ├── components/   # Reusable components
│   └── ...
├── lib/              # Utilities and helpers
└── types/            # TypeScript type definitions
sql/                  # Database schemas and migrations
```

## Development Status

🚧 This project is in early development.
