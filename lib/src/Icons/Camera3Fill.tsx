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
    <Path d="M2 6.00087C2 5.44811 2.45531 5 2.9918 5H21.0082C21.556 5 22 5.44463 22 6.00087V19.9991C22 20.5519 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5554 2 19.9991V6.00087ZM14 18C16.7614 18 19 15.7614 19 13C19 10.2386 16.7614 8 14 8C11.2386 8 9 10.2386 9 13C9 15.7614 11.2386 18 14 18ZM4 7V9H7V7H4ZM4 2H10V4H4V2Z" />
  </Svg>
);
export { RemixIcon as Camera3Fill };
