import { MemetusPumpfun, TokenResponse } from "@0xobedient/memetus-pumpfun-sdk";

const main = async () => {
  const memetusClient = new MemetusPumpfun();

  const res = (await memetusClient.fetchRecentTokens({})) as TokenResponse[];

  console.log(res);
};

main();
