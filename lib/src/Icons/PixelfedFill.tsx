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
    <Path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM13.0322 8.09865H10.4084C9.42035 8.09865 8.61941 8.87488 8.61941 9.83241V16.5804L11.2143 14.109H13.0322C14.7448 14.109 16.1331 12.7635 16.1331 11.1038C16.1331 9.44411 14.7448 8.09865 13.0322 8.09865Z" />
  </Svg>
);
export { RemixIcon as PixelfedFill };
