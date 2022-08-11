export interface SaizeriyaItem {
  orderId: string;
  name: string;
  price: number;
  cal?: number;
  sodium?: number;
  alcoholic?: boolean;
  setOnly?: boolean;
}
