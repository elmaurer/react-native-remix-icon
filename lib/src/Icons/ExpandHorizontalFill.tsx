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
    <Path d="M0.5 12L5.44975 7.05029L5.44876 11H10V13H5.44826L5.44727 16.9473L0.5 12ZM14 13H18.5501L18.55 16.9493L23.5 11.9996L18.5503 7.0498L18.5502 11H14V13Z" />
  </Svg>
);
export { RemixIcon as ExpandHorizontalFill };
