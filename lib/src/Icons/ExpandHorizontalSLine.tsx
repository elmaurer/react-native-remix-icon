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
    <Path d="M7.44975 7.05029L2.5 12L7.44727 16.9473L8.86148 15.5331L6.32843 13H17.6708L15.1358 15.535L16.55 16.9493L21.5 11.9996L16.5503 7.0498L15.136 8.46402L17.6721 11H6.32843L8.86396 8.46451L7.44975 7.05029Z" />
  </Svg>
);
export { RemixIcon as ExpandHorizontalSLine };
