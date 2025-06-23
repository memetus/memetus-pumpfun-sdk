import { MemetusPumpfun } from "@0xobedient/memetus-pumpfun-sdk";

const main = async () => {
  const memetusClient = new MemetusPumpfun();

  const res = await memetusClient.fetchTokenByAddress(
    "8rfZYDPRVBbTky7ZeS69sWXrXzwkQdeCAAMtBckPpump"
  );

  console.log(res);
};

main();
