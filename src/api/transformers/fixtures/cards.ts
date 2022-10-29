import { Card } from "../../../interfaces/card";
import { Dictionary } from "lodash";
import { LegalityEnum } from "../../../interfaces/legality";

export const cards: Card[] = [
  {
    id: "base1-1",
    name: "Bulbasaur",
    supertype: "Pokémon",
    subtypes: ["Stage 1"],
    images: {
      small: "https://images.pokemontcg.io/base1/1.png",
      large: "https://images.pokemontcg.io/base1/1_hires.png",
    },
    set: {
      id: "base1",
      name: "Base",
      series: "Base",
      printedTotal: 102,
      total: 102,
      legalities: {
        unlimited: LegalityEnum.LEGAL,
      },
      ptcgoCode: "B1",
      releaseDate: "1999/02/01",
      updatedAt: "2020/05/01 00:00:00",
      images: {
        symbol: "https://images.pokemontcg.io/base1/symbol.png",
        logo: "https://images.pokemontcg.io/base1/logo.png",
      },
    },
    legalities: {
      unlimited: LegalityEnum.LEGAL,
    },
    number: "1",
    rarity: "Common",
  },
  {
    id: "base1-1",
    name: "Bulbasaur",
    supertype: "Pokémon",
    subtypes: ["Stage 2"],
    images: {
      small: "https://images.pokemontcg.io/base1/1.png",
      large: "https://images.pokemontcg.io/base1/1_hires.png",
    },
    set: {
      id: "base1",
      name: "Base",
      series: "Base",
      printedTotal: 102,
      total: 102,
      legalities: {
        unlimited: LegalityEnum.LEGAL,
      },
      ptcgoCode: "B1",
      releaseDate: "1999/02/01",
      updatedAt: "2020/05/01 00:00:00",
      images: {
        symbol: "https://images.pokemontcg.io/base1/symbol.png",
        logo: "https://images.pokemontcg.io/base1/logo.png",
      },
    },
    legalities: {
      unlimited: LegalityEnum.LEGAL,
    },
    number: "1",
    rarity: "Common",
  },
  {
    id: "base1-1",
    name: "Bulbasaur",
    supertype: "Pokémon",
    subtypes: ["Stage 3"],
    images: {
      small: "https://images.pokemontcg.io/base1/1.png",
      large: "https://images.pokemontcg.io/base1/1_hires.png",
    },
    set: {
      id: "base1",
      name: "Base",
      series: "Base",
      printedTotal: 102,
      total: 102,
      legalities: {
        unlimited: LegalityEnum.LEGAL,
      },
      ptcgoCode: "B1",
      releaseDate: "1999/02/01",
      updatedAt: "2020/05/01 00:00:00",
      images: {
        symbol: "https://images.pokemontcg.io/base1/symbol.png",
        logo: "https://images.pokemontcg.io/base1/logo.png",
      },
    },
    legalities: {
      unlimited: LegalityEnum.LEGAL,
    },
    number: "1",
    rarity: "Common",
  },
];

export const cardGrouped: Dictionary<Card[]> = {
  "Stage 1": [
    {
      id: "base1-1",
      name: "Bulbasaur",
      supertype: "Pokémon",
      subtypes: ["Stage 1"],
      images: {
        small: "https://images.pokemontcg.io/base1/1.png",
        large: "https://images.pokemontcg.io/base1/1_hires.png",
      },
      set: {
        id: "base1",
        name: "Base",
        series: "Base",
        printedTotal: 102,
        total: 102,
        legalities: {
          unlimited: LegalityEnum.LEGAL,
        },
        ptcgoCode: "B1",
        releaseDate: "1999/02/01",
        updatedAt: "2020/05/01 00:00:00",
        images: {
          symbol: "https://images.pokemontcg.io/base1/symbol.png",
          logo: "https://images.pokemontcg.io/base1/logo.png",
        },
      },
      legalities: {
        unlimited: LegalityEnum.LEGAL,
      },
      number: "1",
      rarity: "Common",
    },
  ],
  "Stage 2": [
    {
      id: "base1-1",
      name: "Bulbasaur",
      supertype: "Pokémon",
      subtypes: ["Stage 2"],
      images: {
        small: "https://images.pokemontcg.io/base1/1.png",
        large: "https://images.pokemontcg.io/base1/1_hires.png",
      },
      set: {
        id: "base1",
        name: "Base",
        series: "Base",
        printedTotal: 102,
        total: 102,
        legalities: {
          unlimited: LegalityEnum.LEGAL,
        },
        ptcgoCode: "B1",
        releaseDate: "1999/02/01",
        updatedAt: "2020/05/01 00:00:00",
        images: {
          symbol: "https://images.pokemontcg.io/base1/symbol.png",
          logo: "https://images.pokemontcg.io/base1/logo.png",
        },
      },
      legalities: {
        unlimited: LegalityEnum.LEGAL,
      },
      number: "1",
      rarity: "Common",
    },
  ],
  "Stage 3": [
    {
      id: "base1-1",
      name: "Bulbasaur",
      supertype: "Pokémon",
      subtypes: ["Stage 3"],
      images: {
        small: "https://images.pokemontcg.io/base1/1.png",
        large: "https://images.pokemontcg.io/base1/1_hires.png",
      },
      set: {
        id: "base1",
        name: "Base",
        series: "Base",
        printedTotal: 102,
        total: 102,
        legalities: {
          unlimited: LegalityEnum.LEGAL,
        },
        ptcgoCode: "B1",
        releaseDate: "1999/02/01",
        updatedAt: "2020/05/01 00:00:00",
        images: {
          symbol: "https://images.pokemontcg.io/base1/symbol.png",
          logo: "https://images.pokemontcg.io/base1/logo.png",
        },
      },
      legalities: {
        unlimited: LegalityEnum.LEGAL,
      },
      number: "1",
      rarity: "Common",
    },
  ],
};
