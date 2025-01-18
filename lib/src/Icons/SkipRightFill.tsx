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
    <Path d="M17 6 17 18H15L15 6 17 6ZM13 12 7 18V6L13 12Z" />
  </Svg>
);
export { RemixIcon as SkipRightFill };
