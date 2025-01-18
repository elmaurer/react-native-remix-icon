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
    <Path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C9.47017 22 7.15975 21.0606 5.39856 19.5116L1.5 20L2.92355 16.2031C2.33082 14.9253 2 13.5013 2 12C2 6.47715 6.47715 2 12 2ZM8 7.0003V17.0003H11.7335L11.9959 16.9963C15.3714 16.8928 17.3333 14.7848 17.3333 11.9714V11.9436L17.3295 11.7287C17.2307 8.95633 15.2107 7.0003 11.7896 7.0003H8ZM11.8314 9.45793C13.4594 9.45793 14.54 10.3861 14.54 11.9868V12.0147L14.5352 12.1978C14.4561 13.6979 13.3968 14.5434 11.8314 14.5434H10.723V9.45793H11.8314Z" />
  </Svg>
);
export { RemixIcon as DisqusFill };
