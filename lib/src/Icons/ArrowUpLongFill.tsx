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
    <Path d="M11.0001 22.0003L13 22.0004L13 8.41421L18.4142 8.41421L12 2L5.58575 8.41421L11 8.41421L11.0001 22.0003Z" />
  </Svg>
);
export { RemixIcon as ArrowUpLongFill };
