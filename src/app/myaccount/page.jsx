/**** 
  IMPORTANT: This page is a Server Component by default. 
  DO NOT add "use client"; unless necessary.
  Keep this as a Server Component for better performance.

  Best Practice:
    - Keep **page.jsx** as a Server Component.
    - Create a separate **Client Component** inside the same folder and import it.
****/

export const metadata = {
  title: 'Olympic Fit - My Account',
}

export default function MyAccount() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-mulish)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        This is the My Account Page
      </main>
    </div>
  );
}
