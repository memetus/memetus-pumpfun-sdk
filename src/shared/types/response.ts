export type TokenResponse = {
  signature: string;
  mint_pubkey: string;
  initial_buy_account_pubkey: string;
  initial_buy_token_account_pubkey: string;
  creator_pubkey: string;
  creator_token_account_pubkey: string;
  initial_buy_amount: number;
  initial_buy_sol_amount: number;
  bondingcurve_pubkey: string;
  market_cap: number;
  name: string;
  symbol: string;
  uri: string;
  timestamp: string;
};
