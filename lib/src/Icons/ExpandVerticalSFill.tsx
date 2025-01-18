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
    <Path d="M16.9493 7.44926L11.9995 2.49951L7.05226 7.44678L10.9995 7.44777L10.9995 16.5496L7.05031 16.5496L12 21.4995L16.9498 16.5498L12.9995 16.5497L12.9995 7.44827L16.9493 7.44926Z" />
  </Svg>
);
export { RemixIcon as ExpandVerticalSFill };
