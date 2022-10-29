import { cardGrouped, cards } from "./fixtures/cards";

import { groupApiCardsTransformer } from "./groupApiCardsTransformer";

test("group array of cards by subtypes", () => {
  const result = groupApiCardsTransformer(cards);

  expect(result).toStrictEqual(cardGrouped);
});
