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
    <Path d="M22 13.5V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V13.5L0.757464 13.1894C0.312297 13.0781 0 12.6781 0 12.2192V11.5C0 11.2239 0.223858 11 0.5 11H2.375L4.51334 5.29775C4.80607 4.51715 5.55231 4 6.386 4H17.614C18.4477 4 19.1939 4.51715 19.4867 5.29775L21.625 11H23.5C23.7761 11 24 11.2239 24 11.5V12.2192C24 12.6781 23.6877 13.0781 23.2425 13.1894L22 13.5ZM4 15V17C4 17.5523 4.44772 18 5 18H8.24496C8.3272 18 8.40818 17.9797 8.4807 17.9409C8.72418 17.8107 8.81602 17.5078 8.68582 17.2643L8.68588 17.2643C7.87868 15.7548 6.31672 15 4 15ZM20 15C17.6833 15 16.1213 15.7548 15.3141 17.2643L15.3142 17.2643C15.184 17.5078 15.2758 17.8107 15.5193 17.9409C15.5918 17.9797 15.6728 18 15.755 18H19C19.5523 18 20 17.5523 20 17V15ZM6 6L4.43874 10.6838C4.40475 10.7857 4.38743 10.8925 4.38743 11C4.38743 11.5523 4.83514 12 5.38743 12H18.6126C18.7201 12 18.8268 11.9827 18.9288 11.9487C19.4527 11.774 19.7359 11.2077 19.5613 10.6838L18 6H6Z" />
  </Svg>
);
export { RemixIcon as RoadsterFill };
