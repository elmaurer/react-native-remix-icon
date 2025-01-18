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
    <Path d="M18.0001 2V4H9.30024L8.62337 10.4448C9.6075 9.84532 10.7634 9.5 12.0001 9.5C15.5899 9.5 18.5001 12.4101 18.5001 16C18.5001 19.5899 15.5899 22.5 12.0001 22.5C8.95434 22.5 6.39789 20.4052 5.69287 17.5778L7.63351 17.0922C8.12156 19.0497 9.89144 20.5 12.0001 20.5C14.4853 20.5 16.5001 18.4853 16.5001 16C16.5001 13.5147 14.4853 11.5 12.0001 11.5C9.97783 11.5 8.72237 12.139 8.03985 13.0293L6.46487 11.848L7.50006 2H18.0001Z" />
  </Svg>
);
export { RemixIcon as Number5 };
