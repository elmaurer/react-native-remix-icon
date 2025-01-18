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
    <Path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H15C15 20.3199 14.9478 19.6519 14.8471 19H20V5H4V8.1529C3.34806 8.05223 2.68013 8 2 8V4C2 3.44772 2.44772 3 3 3ZM13 21H11C11 16.0294 6.97056 12 2 12V10C8.07513 10 13 14.9249 13 21ZM9 21H7C7 18.2386 4.76142 16 2 16V14C5.86599 14 9 17.134 9 21ZM5 21H2V18C3.65685 18 5 19.3431 5 21ZM14.373 17C13.093 13.0376 9.9624 9.90704 6 8.627V7H18V17H14.373Z" />
  </Svg>
);
export { RemixIcon as CastFill };
