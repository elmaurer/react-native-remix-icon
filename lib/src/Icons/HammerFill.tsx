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
    <Path d="M17 8V2H20C20.5523 2 21 2.44772 21 3V7C21 7.55228 20.5523 8 20 8H17ZM15 22C15 22.5523 14.5523 23 14 23H10C9.44772 23 9 22.5523 9 22V8H2.5V6.07437C2.5 5.7187 2.68891 5.3898 2.99613 5.21059L8.5 2H15V22Z" />
  </Svg>
);
export { RemixIcon as HammerFill };
