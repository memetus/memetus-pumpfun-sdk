export type TParams<
  T =
    | MetadataParams
    | DurationParams
    | MarketCapParams
    | RecentsParams
    | OldestsParams
> = T;

export type RecentsParams = {
  limit?: number;
};

export type OldestsParams = {
  limit?: number;
};

export type MetadataParams = {
  name?: string;
  symbol?: string;
  sort?: "asc" | "desc";
  limit?: number;
};

export type DurationParams = {
  start?: string;
  end?: string;
  sort?: "asc" | "desc";
  limit?: number;
};

export type MarketCapParams = {
  min?: string;
  max?: string;
  sort?: "asc" | "desc";
  limit?: number;
};

export type CreatorsParams = {
  addresses: string[];
  sort?: "asc" | "desc";
};

export type InitializerParams = {
  addresses: string[];
  sort?: "asc" | "desc";
};
