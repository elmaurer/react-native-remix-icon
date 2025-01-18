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
    <Path d="M20 7V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V7H2V5H22V7H20ZM11 9V11H13V9H11ZM11 12V14H13V12H11ZM11 15V17H13V15H11ZM7 2H17V4H7V2Z" />
  </Svg>
);
export { RemixIcon as DeleteBin3Fill };
