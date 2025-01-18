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
    <Path d="M11.9995 0.499512L16.9492 5.44926L12.9995 5.44827V9.99951H10.9995V5.44777L7.05222 5.44678L11.9995 0.499512ZM10.9995 13.9995L10.9995 18.5496L7.05026 18.5496L12 23.4995L16.9497 18.5498L12.9995 18.5497V13.9995H10.9995Z" />
  </Svg>
);
export { RemixIcon as ExpandVerticalFill };
