export enum LegalityEnum {
  LEGAL = "Legal",
  BANNED = "Banned",
}

export interface Legality {
  expanded?: LegalityEnum;
  standard?: LegalityEnum;
  unlimited?: LegalityEnum;
}
