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
    <Path d="M5 2H15L19.7071 6.70711C19.8946 6.89464 20 7.149 20 7.41421V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2ZM13 18V10H8V12H11V18H13ZM8 13V15H10V13H8ZM14 13V15H16V13H14ZM14 10V12H16V10H14ZM8 16V18H10V16H8ZM14 16V18H16V16H14Z" />
  </Svg>
);
export { RemixIcon as SimCard2Fill };
