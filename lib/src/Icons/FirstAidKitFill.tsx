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
    <Path d="M16 1C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7V2C7 1.44772 7.44772 1 8 1H16ZM13 9H11V12H8V14H10.999L11 17H13L12.999 14H16V12H13V9ZM15 3H9V5H15V3Z" />
  </Svg>
);
export { RemixIcon as FirstAidKitFill };
