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
    <Path d="M9 6 3 12 9 18V6ZM15 18 21 12 15 6V18Z" />
  </Svg>
);
export { RemixIcon as ExpandLeftRightFill };
