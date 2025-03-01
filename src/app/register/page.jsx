export const metadata = {
  title: "Olympic Fit - Register",
};

import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <RegisterForm />
    </div>
  );
}
