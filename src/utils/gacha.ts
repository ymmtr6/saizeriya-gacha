import Items from "../items.json";
import Random from "./random";
import { SaizeriyaItem } from "./SaizeriyaItem";

export const getItems = (balance: number, seed?: number, option?: any) => {
  const randomizer = new Random(seed);
  const items = (Items as SaizeriyaItem[]).filter(
    (item) => item.price <= balance
  );
  return simple.choise(items, balance, randomizer);
};

interface Strategy {
  choise: (
    items: SaizeriyaItem[],
    balance: number,
    randomizer: Random
  ) => SaizeriyaItem[];
}

const FILLING_RATE = 0.9;

export const simple: Strategy = {
  choise: (
    items: SaizeriyaItem[],
    balance: number,
    randomizer: Random,
    option?: any
  ) => {
    let sum: number, min: number;
    let result: SaizeriyaItem[] = [];
    let target = [...items];

    while (true) {
      sum = result.map((i) => i.price).reduce((a, x) => a + x, 0);
      target = [...items].filter((item) => item.price <= balance - sum);
      if (target.length === 0 || sum > balance * FILLING_RATE) {
        break;
      }
      result.push(
        target.splice(randomizer.nextInt(0, target.length - 1), 1)[0]
      );
    }
    return result;
  },
};
