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
    <Path d="M2 3.00012L2.00008 5.00012L4.00004 5.00004L4.00004 19L2 19.0001L2.00008 21.0001L8.00004 21V19H6.00004L6.00004 5.00004L8 5.00012L8.00008 3.00012L2 3.00012ZM10.2 18H12.3541L13.5541 15H18.4459L19.6459 18H21.8L17 6H15L10.2 18ZM16 8.88517L17.6459 13H14.3541L16 8.88517Z" />
  </Svg>
);
export { RemixIcon as LineHeight2 };
