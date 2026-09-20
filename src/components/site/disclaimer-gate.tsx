import { DisclaimerGateClient } from "./disclaimer-gate-client";

export function DisclaimerGate({ children }: { children: React.ReactNode }) {
  return <DisclaimerGateClient>{children}</DisclaimerGateClient>;
}