import { MemetusPumpfun } from "@0xobedient/memetus-pumpfun-sdk";

const main = async () => {
  const memetusClient = new MemetusPumpfun();

  const res = await memetusClient.fetchTokenByAddress(
    "7h47P3b173g1nRrtqYNRY9nYwuVcAbM9rtB3DXNypump"
  );

  console.log(res);
};

main();
