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
    <Path d="M12 5V2H10V5H4C3.44772 5 3 5.44772 3 6V14C3 14.5523 3.44772 15 4 15H17.4142L21.7071 10.7071C22.0976 10.3166 22.0976 9.68342 21.7071 9.29289L17.4142 5H12ZM12 17H10V22H12V17Z" />
  </Svg>
);
export { RemixIcon as SignpostFill };
