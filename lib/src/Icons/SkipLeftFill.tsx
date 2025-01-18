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
    <Path d="M7 18V6H9V18H7ZM11 12 17 6V18L11 12Z" />
  </Svg>
);
export { RemixIcon as SkipLeftFill };
