/**** 
  IMPORTANT: This page is a Server Component by default. 
  DO NOT add "use client"; unless necessary.
  Keep this as a Server Component for better performance.

  Best Practice:
    - Keep **page.jsx** as a Server Component.
    - Create a separate **Client Component** inside the same folder and import it.
****/

import PricingBanner from './PricingBanner';

export const metadata = {
  title: 'Olympic Fit - Pricing',
}

export default function Pricing() {
  return (
      <main className="min-h-screen">
        <PricingBanner />
      </main>
  );
}
