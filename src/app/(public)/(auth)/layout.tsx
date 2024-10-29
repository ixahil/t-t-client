import SectionLayout from "@/components/layouts/section-layout";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SectionLayout className="max-w-screen py-0">
      <div className="flex flex-col items-center w-full sm:flex-row gap-8 sm:gap-0">
        <div className="min-h-screen w-full bg-black text-white flex items-center justify-center">
          <h1 className="text-7xl font-bold text-center text-primary">
            Incredible India .
          </h1>
        </div>
        <div className="h-full w-full">{children}</div>
      </div>
    </SectionLayout>
  );
};

export default AuthLayout;
