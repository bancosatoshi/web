import { useState, useRef, useCallback, useEffect } from "react";

/*stolen from https://github.com/antonioru/beautiful-react-hooks/blob/master/src/useTimeout.ts
  added a modification
*/

export type UseTimeoutOptions = {
  cancelOnUnmount?: boolean;
};

const defaultOptions = {
  cancelOnUnmount: true,
};

export const useTimeout = <T extends (...args: any[]) => any>(
  fn: T,
  state: any[],
  milliseconds: number,
  options: UseTimeoutOptions = defaultOptions,
): [boolean, () => void] => {
  const opts = { ...defaultOptions, ...(options || {}) };
  const timeout = useRef<NodeJS.Timeout>();
  const callback = useRef<T>(fn);
  const [isCleared, setIsCleared] = useState<boolean>(false);

  const clear = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      setIsCleared(true);
    }
  }, []);

  useEffect(() => {
    if (typeof fn === "function") {
      callback.current = fn;
    }
  }, [fn]);

  useEffect(() => {
    if (typeof milliseconds === "number") {
      timeout.current = setTimeout(() => {
        callback.current();
      }, milliseconds);
    }
    return clear;
  }, [milliseconds, ...state]);

  useEffect(
    () => () => {
      if (opts.cancelOnUnmount) {
        clear();
      }
    },
    [],
  );

  return [isCleared, clear];
};
