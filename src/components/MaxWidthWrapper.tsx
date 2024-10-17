import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

const MaxWidthWrapper = (props: Props) => {
  return (
    <div
      className={cn(
        "h-full w-full mx-auto max-w-screen-lg px-2.5 md:px-20",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default MaxWidthWrapper;
