import React from "react";

interface Props {
  size?: "sm" | "md" | "lg";
}

function Spinner({ size = "lg" }: Props) {
  if (size === "sm") {
    return (
      <div
        className={`h-6 w-6 animate-spin rounded-full border-2 border-solid border-r-transparent `}
        role="status"
      ></div>
    );
  } else if (size === "md") {
    return (
      <div
        className={`h-12 w-12 animate-spin rounded-full border-2 border-solid border-r-transparent `}
        role="status"
      ></div>
    );
  } else if (size === "lg") {
    return (
      <div
        className={`h-24 w-24 animate-spin rounded-full border-2 border-solid border-r-transparent `}
        role="status"
      ></div>
    );
  } else {
    return (
      <div
        className={`h-12 w-12 animate-spin rounded-full border-2 border-solid border-r-transparent `}
        role="status"
      ></div>
    );
  }

  //   return (
  //     <div
  //       className={`h-[${s}px] w-[${s}px] animate-spin rounded-full border-2 border-solid border-r-transparent `}
  //       role="status"
  //     ></div>
  //   );
}

export default Spinner;
