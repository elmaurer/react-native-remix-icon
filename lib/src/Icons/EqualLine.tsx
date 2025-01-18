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
    <Path d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z" />
  </Svg>
);
export { RemixIcon as EqualLine };
