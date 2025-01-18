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
    <Path d="M5 18 11 12 5 6V18ZM19 6 13 12 19 18V6Z" />
  </Svg>
);
export { RemixIcon as ContractLeftRightFill };
