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
    <Path d="M20 2C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6C5.44772 22 5 21.5523 5 21V19H3V17H5V15H3V13H5V11H3V9H5V7H3V5H5V3C5 2.44772 5.44772 2 6 2H20ZM14 8H12V11H9V13H11.999L12 16H14L13.999 13H17V11H14V8Z" />
  </Svg>
);
export { RemixIcon as HealthBookFill };
