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
    <Path d="M12 4C18.0751 4 23 8.92487 23 15V20H20V15C20 10.6651 16.5522 7.13546 12.2492 7.00381L12 7C7.66509 7 4.13546 10.4478 4.00381 14.7508L4 15V20H1V15C1 8.92487 5.92487 4 12 4ZM12 8C15.866 8 19 11.134 19 15V20H16V15C16 12.8578 14.316 11.1089 12.1996 11.0049L12 11C9.8578 11 8.10892 12.684 8.0049 14.8004L8 15V20H5V15C5 11.134 8.13401 8 12 8ZM12 12C13.6569 12 15 13.3431 15 15V20H9V15C9 13.3431 10.3431 12 12 12Z" />
  </Svg>
);
export { RemixIcon as RainbowFill };
