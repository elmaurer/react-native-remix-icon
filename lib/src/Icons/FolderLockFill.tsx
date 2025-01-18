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
    <Path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM15 13V12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12V13H8V17H16V13H15ZM13 13H11V12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V13Z" />
  </Svg>
);
export { RemixIcon as FolderLockFill };
