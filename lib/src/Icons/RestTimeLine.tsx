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
    <Path d="M11 6V8C7.68629 8 5 10.6863 5 14C5 17.3137 7.68629 20 11 20C14.2384 20 16.8776 17.4344 16.9959 14.2249L17 14H19C19 18.4183 15.4183 22 11 22C6.58172 22 3 18.4183 3 14C3 9.66509 6.58 6 11 6ZM21 2V4L15.6726 10H21V12H13V10L18.3256 4H13V2H21Z" />
  </Svg>
);
export { RemixIcon as RestTimeLine };
