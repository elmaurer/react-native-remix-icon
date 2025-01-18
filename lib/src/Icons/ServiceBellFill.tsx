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
    <Path d="M15 3V5H13V6.04938C18.0533 6.5511 22 10.8147 22 16H2C2 10.8147 5.94668 6.5511 11 6.04938V5H9V3H15ZM23 20V18H1V20H23Z" />
  </Svg>
);
export { RemixIcon as ServiceBellFill };
