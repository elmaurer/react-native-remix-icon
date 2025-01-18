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
    <Path d="M9 18L9 6L6 6L6 18H9ZM5 20C4.44772 20 4 19.5523 4 19L4 13H2V11H4L4 5C4 4.44771 4.44771 4 5 4H10C10.5523 4 11 4.44771 11 5V11H13V7C13 6.44771 13.4477 6 14 6L19 6C19.5523 6 20 6.44772 20 7V11H22V13H20V17C20 17.5523 19.5523 18 19 18H14C13.4477 18 13 17.5523 13 17V13H11V19C11 19.5523 10.5523 20 10 20H5ZM15 16H18V8L15 8V16Z" />
  </Svg>
);
export { RemixIcon as AlignItemVerticalCenterLine };
