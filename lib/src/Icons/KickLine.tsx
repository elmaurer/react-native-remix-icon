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
    <Path d="M3 1.99976H11.0001V3.99974H13.0001V1.99976H21V9.99969H19V13.9996H21V21.9997H13.0001V19.9998H11.0001V21.9997H3V1.99976ZM13.0001 17.9998H15.0001V19.9997H19V15.9996H17V13.9997H15V9.99967H17V7.99969H19V3.99976H15.0001V5.99974H13.0001V7.99972H9.0001V3.99976H5V19.9997H9.0001V15.9998H13.0001V17.9998Z" />
  </Svg>
);
export { RemixIcon as KickLine };
