

## Plan: Add Dynamic Meta Titles and Descriptions Per Page

### Problem
All pages currently share the same static `<title>` and meta description from `index.html` ("Lovable App" / "Lovable Generated Project"). Each page needs its own title and description based on its content.

### Approach
Use `react-helmet-async` to set `<title>`, `<meta name="description">`, and Open Graph tags dynamically on each page.

### Changes

1. **Install `react-helmet-async`** and wrap the app in `<HelmetProvider>` in `src/App.tsx`.

2. **Update `index.html`** - Set fallback title to "The Birthday Club" and a generic description.

3. **Add `<Helmet>` to each page** with content-derived titles and descriptions:

   | Page | Title | Description |
   |------|-------|-------------|
   | **Index** | The Birthday Club - Turn Birthday Visitors Into Lifelong Regulars | We help restaurant owners build a customer list that drives repeat visits on demand using our proven Birthday Free Entree system. |
   | **Services** | Our Services - The Birthday Club | Everything you need to turn birthday visitors into lifelong regulars. Local ads, birthday funnels, list building, remarketing, and reporting. |
   | **ServiceDetail** | {service.title} - The Birthday Club | {service.meta} (already defined in `serviceData`) |
   | **About** | About Us - The Birthday Club | We help restaurants stop gambling on unpredictable marketing and start building a customer list that drives repeat visits on demand. |
   | **Contact** | Contact Us - The Birthday Club | Fill out the form or call (331) 234-5060. No pressure, we'll map out a plan and tell you if it's a fit. |
   | **NotFound** | Page Not Found - The Birthday Club | The page you're looking for doesn't exist. |

4. **Each page** will also set `og:title` and `og:description` to match.

### Files Modified
- `package.json` (add `react-helmet-async`)
- `index.html` (update defaults)
- `src/App.tsx` (add `HelmetProvider`)
- `src/pages/Index.tsx`
- `src/pages/Services.tsx`
- `src/pages/ServiceDetail.tsx`
- `src/pages/About.tsx`
- `src/pages/Contact.tsx`
- `src/pages/NotFound.tsx`

