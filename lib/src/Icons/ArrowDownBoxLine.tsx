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
    <Path d="M20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3ZM5 19V5H19V19H5ZM11.0005 6.34375V13.829L7.75789 10.5864L6.34367 12.0006L12.0005 17.6575L17.6574 12.0006L16.2432 10.5864L13.0005 13.829V6.34375H11.0005Z" />
  </Svg>
);
export { RemixIcon as ArrowDownBoxLine };
