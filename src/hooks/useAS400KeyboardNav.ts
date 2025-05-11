import { useEffect } from "react";

export type AS400KeyboardNavOptions = {
  onF3?: () => void;
  onF12?: () => void;
  onNextPage?: () => void;
  onPrevPage?: () => void;
};

export function useAS400KeyboardNav({ onF3, onF12, onNextPage, onPrevPage }: AS400KeyboardNavOptions) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "F3":
          e.preventDefault();
          onF3?.();
          break;
        case "F12":
          e.preventDefault();
          onF12?.();
          break;
        case "+":
        case "PageDown":
          e.preventDefault();
          onNextPage?.();
          break;
        case "-":
        case "PageUp":
          e.preventDefault();
          onPrevPage?.();
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onF3, onF12, onNextPage, onPrevPage]);
}
