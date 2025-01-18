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
    <Path d="M8 21V19H11V5H8V3H16V5H13V19H16V21H8ZM18.0503 7.05025L23 12L18.0503 16.9497L16.636 15.5355L20.1716 12L16.636 8.46447L18.0503 7.05025ZM5.94975 7.05025L7.36396 8.46447L3.82843 12L7.36396 15.5355L5.94975 16.9497L1 12L5.94975 7.05025Z" />
  </Svg>
);
export { RemixIcon as InputCursorMove };
