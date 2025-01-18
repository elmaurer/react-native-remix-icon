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
    <Path d="M14 1.5V22H12V3.704L7.5 4.91V2.839L12.5 1.5H14Z" />
  </Svg>
);
export { RemixIcon as Number1 };
