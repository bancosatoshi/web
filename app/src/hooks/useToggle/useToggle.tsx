import { useState } from "react";

export const useToggle = (defaultState = false): [boolean, () => void] => {
  const [isVisible, setIsVisible] = useState(defaultState);
  const toggle = () => setIsVisible(!isVisible);
  return [isVisible, toggle];
};
