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
    <Path d="M9.99994 4.99988V10.9999L16.0002 11.0002L16.0002 13.0002L9.99994 12.9999V18.9999L2.99994 12.0001L9.99994 4.99988ZM18.0001 19.0001V5.00006H20.0001V19.0001H18.0001Z" />
  </Svg>
);
export { RemixIcon as ExpandLeftFill };
