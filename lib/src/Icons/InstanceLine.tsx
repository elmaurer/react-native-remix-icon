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
    <Path d="M4.5 7.65311V16.3469L12 20.689L19.5 16.3469V7.65311L12 3.311L4.5 7.65311ZM12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM6.49896 9.97065L11 12.5765V17.625H13V12.5765L17.501 9.97066L16.499 8.2398L12 10.8445L7.50104 8.2398L6.49896 9.97065Z" />
  </Svg>
);
export { RemixIcon as InstanceLine };
