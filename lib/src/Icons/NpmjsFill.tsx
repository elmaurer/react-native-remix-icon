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
    <Path d="M20.001 3C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3H20.001ZM17.001 7H7.00098V17H12.001V9.5H14.501V17H17.001V7Z" />
  </Svg>
);
export { RemixIcon as NpmjsFill };
