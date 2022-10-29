import { Dictionary, uniq } from "lodash";

import { Card } from "../../interfaces/card";

export const groupApiCardsTransformer = (cards: Card[]): Dictionary<Card[]> => {
  const groupedCards: Dictionary<Card[]> = {};

  const availableSubtypes = uniq(cards.flatMap((card) => card.subtypes));

  availableSubtypes.forEach((subtype) => {
    groupedCards[subtype] = cards.filter((card) =>
      card.subtypes.includes(subtype)
    );
  });

  return groupedCards;
};
