import CommonForm from "@/components/shared/common-form";
import { Button } from "@/components/ui/button";
import { loginFormControls } from "@/config/forms-data";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="h-full flex flex-col items-start justify-center w-full max-w-2xl mx-auto px-4 space-y-8">
      <h2 className="text-2xl font-bold">Register Today</h2>
      <div className="w-full">
        <CommonForm formControls={loginFormControls} />
        <Button variant={"link"}>
          <Link href="/forgot-password">Forgot Password</Link>
        </Button>
        <Button variant={"link"}>
          <Link href="/login">Already have an account?</Link>
        </Button>
      </div>
    </div>
  );
};

export default RegisterPage;
