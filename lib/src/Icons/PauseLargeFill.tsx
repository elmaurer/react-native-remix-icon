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
    <Path d="M6 3H8V21H6V3ZM16 3H18V21H16V3Z" />
  </Svg>
);
export { RemixIcon as PauseLargeFill };
