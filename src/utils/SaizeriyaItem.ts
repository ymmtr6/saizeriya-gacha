export interface SaizeriyaItem {
  orderId: string;
  name: string;
  price: number;
  cal?: string;
  sodium?: string;
  alcoholic?: boolean;
  setOnly?: boolean;
  counterSales?: boolean;
}
