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
    <Path d="M20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3ZM5 19V5H19V19H5ZM12 6.34311L6.34315 12L7.75736 13.4142L11 10.1715V17.6568H13V10.1715L16.2426 13.4142L17.6569 12L12 6.34311Z" />
  </Svg>
);
export { RemixIcon as ArrowUpBoxLine };
