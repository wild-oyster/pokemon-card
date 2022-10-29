export interface Price {
  low: number | null;
  mid: number | null;
  high: number | null;
  market: number | null;
  directLow: number | null;
}

export interface TCGPlayer {
  url: string;
  updatedAt: string;
  prices: {
    normal?: Price;
    holofoil?: Price;
    reverseHolofoil?: Price;
    "1stEditionNormal"?: Price;
    "1stEditionHolofoil"?: Price;
  };
}
