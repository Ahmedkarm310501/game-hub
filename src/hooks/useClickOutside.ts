import { useEffect, useRef } from "react";

const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);
  console.log(ref);
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [callback]);

  return ref;
};

export default useClickOutside;
