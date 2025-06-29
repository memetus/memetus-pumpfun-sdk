import { IMemetusPumpfun } from "./IMemetusPumpfun";
import {
  BASE_ENDPOINT,
  CREATOR_ADDRESS,
  CREATORS,
  DURATION,
  INITIALIZER_ADDRESS,
  INITIALIZERS,
  MARKET_CAP,
  METADATA,
  MINT_ADDRESS,
  MINTS,
  OLDESTS,
  RECENTS,
  SIGNATURE,
} from "../shared/constants/endpoint";
import {
  CreatorsParams,
  DurationParams,
  InitializerParams,
  MarketCapParams,
  MetadataParams,
  RecentsParams,
} from "../shared/types/params";
import { toQueryString } from "../shared/utils/query";
import { TokenResponse } from "../shared/types/response";

export class MemetusPumpfun implements IMemetusPumpfun {
  constructor() {}

  public async fetchRecentTokens(
    params: RecentsParams
  ): Promise<TokenResponse[]> {
    try {
      let query = toQueryString(params);

      const response = await fetch(BASE_ENDPOINT + RECENTS + query);

      return response.json() as Promise<TokenResponse[]>;
    } catch (error) {
      throw error;
    }
  }

  public async fetchOldestTokens(
    params: RecentsParams
  ): Promise<TokenResponse[]> {
    try {
      let query = toQueryString(params);

      const response = await fetch(BASE_ENDPOINT + OLDESTS + query);

      return response.json() as Promise<TokenResponse[]>;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokenByAddress(mint: string): Promise<TokenResponse> {
    try {
      const response = await fetch(BASE_ENDPOINT + MINT_ADDRESS + mint);

      return response.json() as Promise<TokenResponse>;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokenByCreator(account: string): Promise<TokenResponse> {
    try {
      const response = await fetch(BASE_ENDPOINT + CREATOR_ADDRESS + account);

      return response.json() as Promise<TokenResponse>;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokenByInitializer(
    account: string
  ): Promise<TokenResponse> {
    try {
      const response = await fetch(
        BASE_ENDPOINT + INITIALIZER_ADDRESS + account
      );

      return response.json() as Promise<TokenResponse>;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokenBySignature(
    signature: string
  ): Promise<TokenResponse> {
    try {
      const response = await fetch(BASE_ENDPOINT + SIGNATURE + signature);

      return response.json() as Promise<TokenResponse>;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokensByMetadata(
    params: MetadataParams
  ): Promise<TokenResponse[]> {
    try {
      let query = toQueryString(params);

      const response = await fetch(BASE_ENDPOINT + METADATA + query);

      return response.json() as Promise<TokenResponse[]>;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokensByDuration(
    params: DurationParams
  ): Promise<TokenResponse[]> {
    try {
      let query = toQueryString(params);

      const response = await fetch(BASE_ENDPOINT + DURATION + query);

      return response.json() as Promise<TokenResponse[]>;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokensByMarketCap(
    params: MarketCapParams
  ): Promise<TokenResponse[]> {
    try {
      let query = toQueryString(params);

      const response = await fetch(BASE_ENDPOINT + MARKET_CAP + query);

      return response.json() as Promise<TokenResponse[]>;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokensByAddresses(
    addresses: string[]
  ): Promise<TokenResponse[]> {
    try {
      const response = await fetch(BASE_ENDPOINT + MINTS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          addresses,
        }),
      });

      return response.json() as Promise<TokenResponse[]>;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokensByCreators(
    params: CreatorsParams
  ): Promise<TokenResponse[]> {
    try {
      const response = await fetch(BASE_ENDPOINT + CREATORS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...params,
        }),
      });

      return response.json() as Promise<TokenResponse[]>;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokensByInitializers(
    params: InitializerParams
  ): Promise<TokenResponse[]> {
    try {
      const response = await fetch(INITIALIZERS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...params,
        }),
      });

      return response.json() as Promise<TokenResponse[]>;
    } catch (error) {
      throw error;
    }
  }
}
