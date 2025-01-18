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
    <Path d="M6 2H18V4H6V2ZM16.9497 9.44975L12 4.5L7.05273 9.44727L8.46695 10.8615L11 8.32843V15.6706L8.46499 13.1356L7.05078 14.5498L12 19.5L16.9497 14.5503L15.5355 13.136L13 15.6716V8.32843L15.5355 10.864L16.9497 9.44975ZM18 20V22H6V20H18Z" />
  </Svg>
);
export { RemixIcon as ExpandHeightLine };
