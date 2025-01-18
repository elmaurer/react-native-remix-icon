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
    <Path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM4 5V19H20V7H11.5858L9.58579 5H4ZM15 13H16V17H8V13H9V12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12V13ZM13 13V12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V13H13Z" />
  </Svg>
);
export { RemixIcon as FolderLockLine };
