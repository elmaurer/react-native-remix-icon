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
    <Path d="M12 5H17.4142L21.7071 9.29289C22.0976 9.68342 22.0976 10.3166 21.7071 10.7071L17.4142 15H12V22H10V15H4C3.44772 15 3 14.5523 3 14V6C3 5.44772 3.44772 5 4 5H10V2H12V5ZM16.5858 13L19.5858 10L16.5858 7H5V13H16.5858Z" />
  </Svg>
);
export { RemixIcon as SignpostLine };
