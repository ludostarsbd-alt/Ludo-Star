import { useEffect, useState } from 'react';

/**
 * Returns true if `isLoaded` (from Clerk's useUser/useAuth) is still false
 * after `timeoutMs`. Use this to stop showing an infinite spinner — which
 * looks exactly like a blank screen — when Clerk can't load (bad/missing
 * publishable key, no network, blocked domain, etc).
 */
export function useClerkLoadTimeout(isLoaded: boolean, timeoutMs = 8000): boolean {
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setTimedOut(false);
      return;
    }
    const id = setTimeout(() => setTimedOut(true), timeoutMs);
    return () => clearTimeout(id);
  }, [isLoaded, timeoutMs]);

  return timedOut;
}
