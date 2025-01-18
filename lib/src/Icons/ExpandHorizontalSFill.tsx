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
    <Path d="M7.44975 7.05017L2.5 11.9999L7.44727 16.9472L7.44826 12.9999H16.5501L16.55 16.9491L21.5 11.9994L16.5503 7.04968L16.5502 10.9999H7.44876L7.44975 7.05017Z" />
  </Svg>
);
export { RemixIcon as ExpandHorizontalSFill };
