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
} from "../shared/constants/endpoint";
import {
  CreatorsParams,
  DurationParams,
  InitializerParams,
  MarketCapParams,
  MetadataParams,
} from "../shared/types/params";
import { toQueryString } from "../shared/utils/query";
import { TokenResponse } from "../shared/types/response";

export class MemetusPumpfun implements IMemetusPumpfun {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: BASE_ENDPOINT,
    });
  }

  public async fetchTokenByAddress(mint: string): Promise<TokenResponse> {
    try {
      const response = await this.client.get(MINT_ADDRESS + mint);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokenByCreator(account: string): Promise<TokenResponse> {
    try {
      const response = await this.client.get(CREATOR_ADDRESS + account);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokenByInitializer(
    account: string
  ): Promise<TokenResponse> {
    try {
      const response = await this.client.get(INITIALIZER_ADDRESS + account);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokenBySignature(
    signature: string
  ): Promise<TokenResponse> {
    try {
      const response = await this.client.get(SIGNATURE + signature);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokenByMetadata(
    params: MetadataParams
  ): Promise<TokenResponse[]> {
    try {
      let query = toQueryString(params);

      const response = await this.client.get(METADATA + query);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokenByDuration(
    params: DurationParams
  ): Promise<TokenResponse[]> {
    try {
      let query = toQueryString(params);

      const response = await this.client.get(DURATION + query);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokenByMarketCap(
    params: MarketCapParams
  ): Promise<TokenResponse[]> {
    try {
      let query = toQueryString(params);

      const response = await this.client.get(MARKET_CAP + query);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokensByAddresses(
    addresses: string[]
  ): Promise<TokenResponse[]> {
    try {
      const response = await this.client.post(MINTS, {
        addresses,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokensByCreators(
    params: CreatorsParams
  ): Promise<TokenResponse[]> {
    try {
      const response = await this.client.post(CREATORS, {
        ...params,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async fetchTokensByInitializer(
    params: InitializerParams
  ): Promise<TokenResponse[]> {
    try {
      const response = await this.client.post(INITIALIZERS, {
        params,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
