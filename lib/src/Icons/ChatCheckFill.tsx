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
    <Path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM11.2929 12.1213L8.81802 9.64645L7.40381 11.0607L11.2929 14.9497L16.9497 9.29289L15.5355 7.87868L11.2929 12.1213Z" />
  </Svg>
);
export { RemixIcon as ChatCheckFill };
