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
    <Path d="M3 21C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H20C20.5523 5 21 5.44772 21 6V9H4V18.996L6 11H22.5L20.1894 20.2425C20.0781 20.6877 19.6781 21 19.2192 21H3Z" />
  </Svg>
);
export { RemixIcon as FolderOpenFill };
