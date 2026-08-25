import { cookies } from "next/headers";
import { DisclaimerGateClient } from "./disclaimer-gate-client";

const STORAGE_KEY = "sra_disclaimer_accepted_v1";

/**
 * Server component disclaimer gate.
 *
 * Reads the acceptance cookie on the server BEFORE rendering, so the
 * initial HTML response contains either the disclaimer gate (first-time
 * visitor) or the website (returning visitor). No blank screen.
 */
export async function DisclaimerGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const accepted = cookieStore.get(STORAGE_KEY)?.value === "1";

  if (accepted) {
    return <>{children}</>;
  }

  return <DisclaimerGateClient>{children}</DisclaimerGateClient>;
}
