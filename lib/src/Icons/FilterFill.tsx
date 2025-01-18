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
    <Path d="M21 4V6H20L14 15V22H10V15L4 6H3V4H21Z" />
  </Svg>
);
export { RemixIcon as FilterFill };
