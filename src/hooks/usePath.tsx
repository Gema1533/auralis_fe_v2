import { useRouter } from "next/router";

export function usePath() {
  const router = useRouter();
  return router.pathname;
}
