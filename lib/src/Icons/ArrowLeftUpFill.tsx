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
    <Path d="M12.3608 10.9468L18.0176 16.6037L16.6034 18.0179L10.9466 12.361L5.99683 17.3108V5.99707H17.3105L12.3608 10.9468Z" />
  </Svg>
);
export { RemixIcon as ArrowLeftUpFill };
