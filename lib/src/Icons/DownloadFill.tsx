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
    <Path d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z" />
  </Svg>
);
export { RemixIcon as DownloadFill };
