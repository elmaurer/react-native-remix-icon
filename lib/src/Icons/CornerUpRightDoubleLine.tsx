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
    <Path d="M4.00001 10.0003L3.99988 19.0001L5.99988 19.0002L5.99998 12.0002L12.1718 12.0002L8.22209 15.9499L9.63631 17.3641L16.0003 11.0001L9.63631 4.63617L8.22209 6.05038L12.1719 10.0002L4.00001 10.0003ZM15.2504 4.63617L13.8362 6.05038L18.786 11.0001L13.8362 15.9499L15.2504 17.3641L21.6144 11.0001L15.2504 4.63617Z" />
  </Svg>
);
export { RemixIcon as CornerUpRightDoubleLine };
