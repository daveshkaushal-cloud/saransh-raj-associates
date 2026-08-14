"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * SSR-safe replacement for framer-motion's `useReducedMotion`.
 *
 * The original hook returns `null` during SSR but immediately returns the
 * real `true`/`false` value on the client's **first** render (it reads
 * `window.matchMedia` during lazy state initialisation). Any component that
 * conditionally renders — or sets a different `initial`/`style` — based on
 * that value will produce a hydration mismatch for users who have
 * `prefers-reduced-motion: reduce` enabled:
 *
 *   server:  reduce = null  (falsy)  → renders the "animated" branch
 *   client:  reduce = true  (truthy) → renders the "reduced" branch  ← mismatch
 *
 * This hook returns `false` during SSR **and** the client's first render
 * (guaranteed to match the server's falsy behaviour), then flips to the real
 * preference after mount. Components that branch on the returned value will
 * therefore render identical markup on both sides and only diverge after a
 * post-mount state update — which React handles cleanly, with no hydration
 * error.
 */
export function useMountedReducedMotion(): boolean {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? Boolean(reduce) : false;
}
