import axios, { AxiosInstance } from "axios";
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
  SIGNATURE,
} from "src/shared/constants/endpoint";
import {
  CreatorsParams,
  DurationParams,
  InitializerParams,
  MarketCapParams,
  MetadataParams,
} from "src/shared/types/params";
import { toQueryString } from "src/shared/utils/query";

export class MemetusPumpfun implements IMemetusPumpfun {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: BASE_ENDPOINT,
    });
  }

  public async fetchTokenByAddress(mint: string) {
    try {
      const response = await this.client.get(MINT_ADDRESS + mint);

      return response.data;
    } catch (error) {
      return error;
    }
  }

  public async fetchTokenByCreator(account: string) {
    try {
      const response = await this.client.get(CREATOR_ADDRESS + account);

      return response.data;
    } catch (error) {
      return error;
    }
  }

  public async fetchTokenByInitializer(account: string) {
    try {
      const response = await this.client.get(INITIALIZER_ADDRESS + account);

      return response.data;
    } catch (error) {
      return error;
    }
  }

  public async fetchTokenBySignature(signature: string) {
    try {
      const response = await this.client.get(SIGNATURE + signature);

      return response.data;
    } catch (error) {
      return error;
    }
  }

  public async fetchTokenByMetadata(params: MetadataParams) {
    try {
      let query = toQueryString(params);

      const response = await this.client.get(METADATA + query);

      return response.data;
    } catch (error) {
      return error;
    }
  }

  public async fetTokenByDuration(params: DurationParams) {
    try {
      let query = toQueryString(params);

      const response = await this.client.get(DURATION + query);

      return response.data;
    } catch (error) {
      return error;
    }
  }

  public async fetTokenByMarketCap(params: MarketCapParams) {
    try {
      let query = toQueryString(params);

      const response = await this.client.get(MARKET_CAP + query);

      return response.data;
    } catch (error) {
      return error;
    }
  }

  public async fetchTokensByAddresses(addresses: string[]) {
    try {
      const response = await this.client.post(MINTS, {
        addresses,
      });

      return response.data;
    } catch (error) {
      return error;
    }
  }

  public async fetchTokensByCreators(params: CreatorsParams) {
    try {
      const response = await this.client.post(CREATORS, {
        ...params,
      });

      return response.data;
    } catch (error) {
      return error;
    }
  }

  public async fetchTokensByInitializer(params: InitializerParams) {
    try {
      const response = await this.client.post(INITIALIZERS, {
        params,
      });

      return response.data;
    } catch (error) {
      return error;
    }
  }
}
