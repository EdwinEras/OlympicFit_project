/**** 
  IMPORTANT: This page is a Server Component by default. 
  DO NOT add "use client"; unless necessary.
  Keep this as a Server Component for better performance.

  Best Practice:
    - Keep **page.jsx** as a Server Component.
    - Create a separate **Client Component** inside the same folder and import it.
****/

export const metadata = {
  title: "Olympic Fit - Register",
};

import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-90 p-6">
      <RegisterForm />
    </div>
  );
}
