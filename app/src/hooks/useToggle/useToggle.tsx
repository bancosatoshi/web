import { useState } from "react";

export const useToggle = (init: boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(init);
  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, toggle, open, close };
};
