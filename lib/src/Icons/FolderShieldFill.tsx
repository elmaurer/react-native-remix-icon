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
    <Path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM8 9V13.904C8 14.7956 8.4456 15.6282 9.18747 16.1228L12 17.9978L14.8125 16.1228C15.5544 15.6282 16 14.7956 16 13.904V9H8ZM10 13.904V11H14V13.904C14 14.1269 13.8886 14.335 13.7031 14.4587L12 15.5941L10.2969 14.4587C10.1114 14.335 10 14.1269 10 13.904Z" />
  </Svg>
);
export { RemixIcon as FolderShieldFill };
