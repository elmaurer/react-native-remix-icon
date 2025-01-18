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
    <Path d="M14.1219 5H16.2678L22.1012 20H19.9553L14.1219 5ZM7.65986 5H10.3411L16.1103 20H13.9675L12.429 16H5.57192L4.03345 20H1.89062L7.65986 5ZM11.6598 14L9.00047 7.08577L6.34115 14H11.6598Z" />
  </Svg>
);
export { RemixIcon as AnthropicLine };
