import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const RemixIcon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={24}
    height={24}
    color="#000"
    {...props}
  >
    <Path d="M4 5V19H20V5H4ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM6 7H8V9H6V7ZM6 11H8V13H6V11ZM6 15H18V17H6V15ZM11 11H13V13H11V11ZM11 7H13V9H11V7ZM16 7H18V9H16V7ZM16 11H18V13H16V11Z" />
  </Svg>
);
export { RemixIcon as KeyboardBoxLine };
