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
    <Path d="M4 5V19H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V9H20V5H4ZM19.7071 11.2929L19 10.5858L18.2929 11.2929L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L19.7071 11.2929ZM16.7071 17.2929L19 19.5858L21.2929 17.2929L22.7071 18.7071L19.7071 21.7071L19 22.4142L18.2929 21.7071L15.2929 18.7071L16.7071 17.2929Z" />
  </Svg>
);
export { RemixIcon as DropdownList };
