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
    <Path d="M15.874 13C15.4299 14.7252 13.8638 16 12 16C10.1362 16 8.57006 14.7252 8.12602 13H3V11H8.12602C8.57006 9.27477 10.1362 8 12 8C13.8638 8 15.4299 9.27477 15.874 11H21V13H15.874Z" />
  </Svg>
);
export { RemixIcon as GitCommitFill };
