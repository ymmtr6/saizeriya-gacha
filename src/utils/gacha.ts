import Items from "../items.json";
import Random from "./random";
import { SaizeriyaItem } from "./SaizeriyaItem";

interface GachaOptions {
  alcoholic?: boolean;
  counterSales?: boolean;
  drinkBar?: boolean;
}

export const getItems = (
  balance: number,
  seed?: number,
  option?: GachaOptions
) => {
  const randomizer = new Random(seed);
  const items = (Items as SaizeriyaItem[]).filter(
    (item) => item.price <= balance
  );
  return simple.choise(items, balance, randomizer, option || {});
};

interface Strategy {
  choise: (
    items: SaizeriyaItem[],
    balance: number,
    randomizer: Random,
    option: GachaOptions
  ) => SaizeriyaItem[];
}

const FILLING_RATE = 0.9;

export const simple: Strategy = {
  choise: (
    items: SaizeriyaItem[],
    balance: number,
    randomizer: Random,
    option: GachaOptions
  ) => {
    let sum: number, min: number;
    let result: SaizeriyaItem[] = option.drinkBar
      ? items.filter((item) => item.orderId === "DB01")
      : [];
    let target = [...items]
      .filter((item) => (option.alcoholic ? true : !item.alcoholic))
      .filter((item) => (option.counterSales ? true : !item.counterSales))
      .filter((item) => (option.drinkBar ? item.orderId !== "DB01" : true))
      .filter((item) => !item.setOnly);

    while (true) {
      sum = result.map((i) => i.price).reduce((a, x) => a + x, 0);
      target = [...target].filter((item) => item.price <= balance - sum);
      if (target.length === 0 || sum > balance * FILLING_RATE) {
        break;
      }
      result.push(
        target.splice(randomizer.nextInt(0, target.length - 1), 1)[0]
      );
    }
    return result.sort((a, b) =>
      a.orderId < b.orderId ? -1 : a.orderId === b.orderId ? 0 : 1
    );
  },
};
