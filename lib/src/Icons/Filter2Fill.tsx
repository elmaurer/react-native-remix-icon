import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const RemixIcon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M10 14L4 5V3H20V5L14 14V20L10 22V14Z" />
  </Svg>
);
export { RemixIcon as Filter2Fill };
