import Image from "next/image";

import { TokenWithbalance } from "../api/hooks/useTokens";

export function TokenList({ tokens }: { tokens: TokenWithbalance[] }) {
  return (
    <div>
      {tokens.map((t) => (
        <TokenRow key={t.name} token={t} />
      ))}
    </div>
  );
}

function TokenRow({ token }: { token: TokenWithbalance }) {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div>
          <Image
            src={token.image}
            className="h-10 w-10 rounded-full mr-2"
            alt="tokenImg"
          />
        </div>

        <div>
          <div className="font-bold">{token.name}</div>

          <div className="font-slim">
            1 {token.name} = ~${token.price}
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="font-bold flex justify-end">{token.usdBalance}</div>

          <div className="font-slim flex justify-end">{token.balance}</div>
        </div>
      </div>
    </div>
  );
}
