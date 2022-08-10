import { NavigatorClass } from "react-onsenui";
import { NavigatorProps } from "../components/Block";

export interface NavigatorInfo {
  component: React.FC<{}>;
  title: string;
  props?: NavigatorProps;
}
