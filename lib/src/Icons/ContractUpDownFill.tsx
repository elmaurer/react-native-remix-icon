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
    <Path d="M18 5 12 11 6 5H18ZM18 19 12 13 6 19H18Z" />
  </Svg>
);
export { RemixIcon as ContractUpDownFill };
