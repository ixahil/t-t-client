import CommonForm from "@/components/shared/common-form";
import { Button } from "@/components/ui/button";
import { loginFormControls } from "@/config/forms-data";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="h-full flex flex-col items-start justify-center w-full max-w-2xl mx-auto px-4 space-y-8">
      <h2 className="text-2xl font-bold">Login Now</h2>
      <div className="w-full">
        <CommonForm formControls={loginFormControls} />
        <Button variant={"link"}>
          <Link href="/register">Not have an account?</Link>
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
