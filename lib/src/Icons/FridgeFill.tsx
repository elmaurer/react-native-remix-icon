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
    <Path d="M19.998 12V22C19.998 22.5523 19.5503 23 18.998 23H4.99805C4.44576 23 3.99805 22.5523 3.99805 22V12H19.998ZM8.99805 14H6.99805V19H8.99805V14ZM18.998 1C19.5503 1 19.998 1.44772 19.998 2V10H3.99805V2C3.99805 1.44772 4.44576 1 4.99805 1H18.998ZM8.99805 4H6.99805V8H8.99805V4Z" />
  </Svg>
);
export { RemixIcon as FridgeFill };
