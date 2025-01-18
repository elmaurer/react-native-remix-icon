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
    <Path d="M20 10.9967V7.9967H14V3.9967H10V7.9967H4V10.9967H20ZM21 12.9967V20.9967C21 21.549 20.5523 21.9967 20 21.9967H10V15.9967H8V21.9967H4C3.44772 21.9967 3 21.549 3 20.9967V12.9967H2V6.9967C2 6.44442 2.44772 5.9967 3 5.9967H8V2.9967C8 2.44442 8.44772 1.9967 9 1.9967H15C15.5523 1.9967 16 2.44442 16 2.9967V5.9967H21C21.5523 5.9967 22 6.44442 22 6.9967V12.9967H21Z" />
  </Svg>
);
export { RemixIcon as Brush3Fill };
