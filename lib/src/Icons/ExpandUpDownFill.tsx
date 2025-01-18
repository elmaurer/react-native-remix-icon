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
    <Path d="M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z" />
  </Svg>
);
export { RemixIcon as ExpandUpDownFill };
