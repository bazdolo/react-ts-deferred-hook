import * as React from 'react';
import { useRef } from 'react';

type DeferredPromise = {
  resolve: (value: boolean) => void;
  reject: (value: unknown) => void;
  promise: Promise<boolean>;
};

export function useDeferredPromise() {
  const deferRef = useRef(null);

  const defer = () => {
    const deferred = {} as DeferredPromise;

    const promise = new Promise<boolean>((resolve, reject) => {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });

    deferred.promise = promise;
    deferRef.current = deferred;
    return deferRef.current;
  };

  return { defer, deferRef: deferRef.current };
}
