/**** 
  IMPORTANT: This page is a Server Component by default. 
  DO NOT add "use client"; unless necessary.
  Keep this as a Server Component for better performance.

  Best Practice:
    - Keep **page.jsx** as a Server Component.
    - Create a separate **Client Component** inside the same folder and import it.
****/



"use client";
import AuthForm from "./AuthForm";

export default function Login() {
  return (
    <main className="min-h-90 flex items-center justify-center">
      <AuthForm />
    </main>
  );
}
