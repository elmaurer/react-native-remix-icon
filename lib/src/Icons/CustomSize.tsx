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
    <Path d="M8 3H15V0.5L18.5 4L15 7.5V5H8V7.5L4.5 4L8 0.5V3ZM3 17V6.5H5V17C5 18.1046 5.89543 19 7 19H17.5V21H7C4.79086 21 3 19.2091 3 17ZM21 16V9H23.5L20 5.5L16.5 9H19V16H16.5L20 19.5L23.5 16H21Z" />
  </Svg>
);
export { RemixIcon as CustomSize };
