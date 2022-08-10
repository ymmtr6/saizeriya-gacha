import React from "react";
import { NavigatorProps } from "../components/Block";

export const pushPage = (
  props: NavigatorProps,
  component: React.FC,
  title?: string
) => {
  props.navigator.pushPage({
    component: component,
    title: title,
    props: { ...props },
  });
};
