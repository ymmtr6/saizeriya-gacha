import Items from "../items.json";
import Random from "./random";
import { SaizeriyaItem } from "./SaizeriyaItem";

export const getItems = (seed?: number) => {
  const randomizer = new Random(8282);
  const items = Items as SaizeriyaItem[];

  return [...Array(100)].map(() => items[0]);
};
