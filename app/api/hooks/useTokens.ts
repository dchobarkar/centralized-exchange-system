import { useEffect, useState } from "react";
import axios from "axios";

import { TokenDetails } from "@/app/lib/tokens";

export interface TokenWithbalance extends TokenDetails {
  balance: string;
  usdBalance: string;
}

export function useTokens(address: string) {
  const [loading, setLoading] = useState(true);
  const [tokenBalances, setTokenBalances] = useState<{
    totalBalance: number;
    tokens: TokenWithbalance[];
  } | null>(null);

  useEffect(() => {
    axios.get(`/api/tokens?address=${address}`).then((res) => {
      setTokenBalances(res.data);
      setLoading(false);
    });
  }, [address]);

  return {
    loading,
    tokenBalances,
  };
}
