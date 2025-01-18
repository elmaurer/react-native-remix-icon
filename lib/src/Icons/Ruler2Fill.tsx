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
    <Path d="M15 21H13V18H11V21H9V19H7V21H4C3.44772 21 3 20.5523 3 20V17H5V15H3V13H6V11H3V9H5V7H3V4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V13H20C20.5523 13 21 13.4477 21 14V20C21 20.5523 20.5523 21 20 21H17V19H15V21Z" />
  </Svg>
);
export { RemixIcon as Ruler2Fill };
