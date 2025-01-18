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
    <Path d="M22 16V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V16H22ZM21 3C21.5523 3 22 3.44772 22 4V14H2V4C2 3.44772 2.44772 3 3 3H21Z" />
  </Svg>
);
export { RemixIcon as LayoutBottomFill };
