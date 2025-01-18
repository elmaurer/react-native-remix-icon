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
    <Path d="M3 3H6.6V6.6L10.2001 6.6001V10.2001L13.8 10.2002L13.8 6.6001H17.3999V3H20.9999V20.9999H17.3999V13.8002L13.8 13.7998V17.3998H10.2V13.8002L6.6 13.7998V20.9999H3V3Z" />
  </Svg>
);
export { RemixIcon as MixtralFill };
