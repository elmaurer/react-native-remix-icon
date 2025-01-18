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
    <Path d="M19.7782 4.22165C20.5592 5.0027 20.5592 6.26903 19.7782 7.05008L16.9498 9.8785L14.1213 7.05008L16.9498 4.22165C17.7308 3.4406 18.9971 3.4406 19.7782 4.22165ZM21.1924 2.80744C19.6303 1.24534 17.0976 1.24534 15.5355 2.80744L12.7071 5.63586L12.3535 5.28265C11.963 4.89212 11.3299 4.89212 10.9393 5.28265C10.5488 5.67317 10.5488 6.30633 10.9393 6.69686L11.2929 7.05044L5.07821 13.2651C4.51981 13.8235 4.13919 14.5347 3.98431 15.3091L3.63348 17.0633C3.55605 17.4504 3.36574 17.806 3.08653 18.0852L2.10051 19.0713C1.70999 19.4618 1.70999 20.095 2.10051 20.4855L3.51472 21.8997C3.90525 22.2902 4.53841 22.2902 4.92894 21.8997L5.91496 20.9137C6.19416 20.6345 6.54976 20.4442 6.93694 20.3667L8.6911 20.0159C9.46547 19.861 10.1767 19.4804 10.7351 18.922L16.9498 12.7073L17.3033 13.0608C17.6938 13.4513 18.327 13.4513 18.7175 13.0608C19.108 12.6703 19.108 12.0371 18.7175 11.6466L18.364 11.2931L21.1924 8.46429C22.7545 6.90219 22.7545 4.36953 21.1924 2.80744ZM12.7071 8.46466L15.5355 11.2931L9.32085 17.5078C9.04165 17.787 8.68605 17.9773 8.29887 18.0547L6.54471 18.4056C5.77035 18.5604 5.05915 18.9411 4.50075 19.4995C5.05915 18.9411 5.43977 18.2299 5.59464 17.4555L5.94548 15.7013C6.02291 15.3142 6.21322 14.9586 6.49242 14.6794L12.7071 8.46466Z" />
  </Svg>
);
export { RemixIcon as DropperLine };
