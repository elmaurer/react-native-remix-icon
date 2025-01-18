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
    <Path d="M19 2V3.5L10.763 21.9995H8.574L16.587 4H6V2H19Z" />
  </Svg>
);
export { RemixIcon as Number7 };
