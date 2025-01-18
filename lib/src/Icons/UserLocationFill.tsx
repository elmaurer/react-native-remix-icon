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
    <Path d="M12 14V22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM20.8284 20.8284L18 23.6569L15.1716 20.8284C13.6095 19.2663 13.6095 16.7337 15.1716 15.1716C16.7337 13.6095 19.2663 13.6095 20.8284 15.1716C22.3905 16.7337 22.3905 19.2663 20.8284 20.8284ZM18 17C17.4477 17 17 17.4477 17 18C17 18.5523 17.4477 19 18 19C18.5523 19 19 18.5523 19 18C19 17.4477 18.5523 17 18 17Z" />
  </Svg>
);
export { RemixIcon as UserLocationFill };
