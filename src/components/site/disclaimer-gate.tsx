import { cookies } from "next/headers";
import { DisclaimerGateClient } from "./disclaimer-gate-client";

const STORAGE_KEY = "sra_disclaimer_accepted_v1";

/**
 * Server component disclaimer gate.
 *
 * Reads the acceptance cookie on the server BEFORE rendering, so the
 * initial HTML response already contains either:
 *  - the disclaimer gate (first-time visitor, no cookie), OR
 *  - the website (returning visitor, cookie present).
 *
 * This eliminates the blank dark screen that appeared while a client
 * component waited for useEffect/localStorage. Legal pages bypass the
 * gate entirely.
 *
 * Acceptance is persisted as a first-party cookie (1-year expiry) by the
 * client component when the visitor proceeds.
 */
export async function DisclaimerGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const accepted = cookieStore.get(STORAGE_KEY)?.value === "1";

  // If accepted, render the website immediately — no gate, no placeholder.
  if (accepted) {
    return <>{children}</>;
  }

  // First-time visitor: render the disclaimer gate in the initial HTML.
  // The client component handles the checkbox + proceed interaction.
  return <DisclaimerGateClient>{children}</DisclaimerGateClient>;
}
