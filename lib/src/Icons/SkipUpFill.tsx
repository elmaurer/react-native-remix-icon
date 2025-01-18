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
    <Path d="M6 7 18 7V9L6 9 6 7ZM12 11 6 17H18L12 11Z" />
  </Svg>
);
export { RemixIcon as SkipUpFill };
