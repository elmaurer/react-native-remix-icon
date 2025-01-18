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
    <Path d="M17.0002 2V4L13.0002 3.999V6H16.0002V8C18.2093 8 20.0002 9.79086 20.0002 12V20C20.0002 21.1046 19.1048 22 18.0002 22H6.0002C4.89563 22 4.0002 21.1046 4.0002 20V12C4.0002 9.79086 5.79106 8 8.0002 8V6H11.0002V3.999L7.5002 4C6.8702 4 6.1302 4.49 5.3002 5.6L3.7002 4.4C4.8702 2.84 6.1302 2 7.5002 2H17.0002ZM16.0002 10H8.0002C6.89563 10 6.0002 10.8954 6.0002 12V20H18.0002V12C18.0002 10.8954 17.1048 10 16.0002 10ZM13.0002 12V14H15.0002V16H12.9992L13.0002 18H11.0002L10.9992 16H9.0002V14H11.0002V12H13.0002Z" />
  </Svg>
);
export { RemixIcon as HandSanitizerLine };
