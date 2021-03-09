import React from "react";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";

type Props = {
  size?: number;
  color?: string;
};
export default function Spinner({ size = 0.6, color = "black" }: Props) {
  return <Icon path={mdiLoading} size={size} horizontal color={color} spin />;
}
