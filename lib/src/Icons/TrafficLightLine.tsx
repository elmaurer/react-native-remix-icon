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
    <Path d="M7 4V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V4H20C20 6.5 17.5 7.5 17 7.5V10H20C20 12.5 17.5 13.5 17 13.5V16H20C20 18.5 17.5 19.5 17 19.5V21C17 21.5523 16.5523 22 16 22H8C7.44772 22 7 21.5523 7 21V19.5C6.5 19.5 4 18.5 4 16H7V13.5C6.5 13.5 4 12.5 4 10H7V7.5C6.5 7.5 4 6.5 4 4H7ZM12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z" />
  </Svg>
);
export { RemixIcon as TrafficLightLine };
