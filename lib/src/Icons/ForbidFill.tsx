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
    <Path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM8.52313 7.10891C8.25459 7.30029 7.99828 7.51644 7.75736 7.75736C7.51644 7.99828 7.30029 8.25459 7.10891 8.52313L15.4769 16.8911C15.7454 16.6997 16.0017 16.4836 16.2426 16.2426C16.4836 16.0017 16.6997 15.7454 16.8911 15.4769L8.52313 7.10891Z" />
  </Svg>
);
export { RemixIcon as ForbidFill };
