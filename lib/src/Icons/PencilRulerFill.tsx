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
    <Path d="M5 18V20H9V18H5ZM3 7L7 2L11 7V22H3V7ZM21 8H19V10H21V12H18V14H21V16H19V18H21V21C21 21.5523 20.5523 22 20 22H14C13.4477 22 13 21.5523 13 21V5C13 4.44772 13.4477 4 14 4H20C20.5523 4 21 4.44772 21 5V8Z" />
  </Svg>
);
export { RemixIcon as PencilRulerFill };
