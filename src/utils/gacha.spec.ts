import { simple } from "./gacha";
import Random from "./random";
import { SaizeriyaItem } from "./SaizeriyaItem";

const items: SaizeriyaItem[] = [
  {
    orderId: "1",
    name: "name",
    price: 1500,
  },
  {
    orderId: "2",
    name: "name",
    price: 500,
  },
];

// seed値を固定しているのでストラテジを変えない限りは同じ値を返す
const randomizer = new Random(8282);

test("予算に応じた商品が選ばれる", () => {
  const expected = [{ name: "name", orderId: "2", price: 500 }];
  const actual = simple.choise(items, 500, randomizer, {});

  expect(actual).toEqual(expected);
});

test("予算に合う商品がない", () => {
  const actual = simple.choise(items, 450, randomizer, {});

  expect(actual).toEqual([]);
});

test("複数選択される確認", () => {
  const expected = [
    { name: "name", orderId: "2", price: 500 },
    { name: "name", orderId: "1", price: 1500 },
  ];
  const actual = simple.choise(items, 2000, randomizer, {});

  expect(actual).toEqual(expected);
});
