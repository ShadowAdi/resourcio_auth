import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col items-center justify-center w-screen min-h-screen ">
      {children}
    </main>
  );
};

export default AuthLayout;
