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
    <Path d="M20 10.0003L20.0002 19.0001L18.0002 19.0002L18 12.0002L11.8282 12.0002L15.7779 15.9499L14.3637 17.3641L7.99976 11.0001L14.3637 4.63617L15.7779 6.05038L11.8282 10.0002L20 10.0003ZM8.74958 4.63617L10.1638 6.05038L5.21405 11.0001L10.1638 15.9499L8.74958 17.3641L2.38562 11.0001L8.74958 4.63617Z" />
  </Svg>
);
export { RemixIcon as CornerUpLeftDoubleLine };
