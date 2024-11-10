import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import React, { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      <Steps/>
      {children}
    </MaxWidthWrapper>
  );
};

export default layout;
