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
    <Path d="M21 1V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 9.72064 4.75393 6.85093 7.37488 5.27777L14 1.453V4.223L21 1ZM19 4.122L12 7.34567V4.916L8.59717 6.88088C6.47212 8.06588 5.10056 10.2673 5.00531 12.7258L5 13C5 16.866 8.13401 20 12 20C15.7855 20 18.8691 16.9952 18.9959 13.2407L19 13V4.122ZM12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8ZM12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10Z" />
  </Svg>
);
export { RemixIcon as MeteorLine };
