import { Legality } from "./legality";
import { SetImage } from "./image";

export interface Set {
  id: string;
  images: SetImage;
  legalities: Legality;
  name: string;
  printedTotal: number;
  ptcgoCode: string;
  releaseDate: string;
  series: string;
  total: number;
  updatedAt: string;
}
