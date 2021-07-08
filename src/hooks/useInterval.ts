import {useEffect, useRef} from 'react';

export function useInterval(
  callback: (expires_in: number) => void,
  delay: number | null,
) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    console.log('delay', delay);
    // Don't schedule if no delay is specified.
    if (delay === null) {
      return;
    }

    const id = setInterval(() => savedCallback.current(delay), delay);

    return () => clearInterval(id);
  }, [delay]);
}

export function useTimeout(callback: (value: string) => void, value: string) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    if (value === '') {
      return;
    }

    console.log('useInterval', value);

    const id = setTimeout(() => savedCallback.current(value), 1500);

    return () => clearInterval(id);
  }, [value]);
}
