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
    <Path d="M2.99805 21V19H4.99805V4C4.99805 3.44772 5.44576 3 5.99805 3H17.998C18.5503 3 18.998 3.44772 18.998 4V19H20.998V21H2.99805ZM14.998 11H12.998V13H14.998V11Z" />
  </Svg>
);
export { RemixIcon as DoorClosedFill };
