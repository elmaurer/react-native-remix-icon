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
    <Path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20ZM19 11V5H13.001V7H15L12 10L9 7H11V5H5V11H7V13H5V19H11V17H9L12 14L15 17H13.001V19H19V13H17V11H19ZM11 13H9V11H11V13ZM15 13H13V11H15V13Z" />
  </Svg>
);
export { RemixIcon as MergeCellsVertical };
