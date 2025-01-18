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
    <Path d="M10.99 1.97431C13.9093 0.114363 17.947 0.981629 19.9913 3.90757C20.4765 4.58662 20.8221 5.35574 21.006 6.16979C21.1898 6.98383 21.2092 7.82641 21.063 8.64806C20.9214 9.43262 20.6222 10.1804 20.1836 10.8461C20.8234 12.0671 21.0379 13.4666 20.793 14.8231C20.6485 15.6286 20.3376 16.395 19.8801 17.0734C19.4225 17.7518 18.8284 18.3273 18.1357 18.763L13.0086 22.0307C10.0897 23.8913 6.05178 23.0238 4.00745 20.0975C3.52241 19.4184 3.17783 18.6493 2.99394 17.8352C2.81004 17.0212 2.79053 16.1787 2.93654 15.357C3.07828 14.5723 3.37766 13.8245 3.81658 13.1587C3.17613 11.938 2.96114 10.5386 3.20565 9.18194C3.35026 8.37642 3.6614 7.60994 4.11916 6.93153C4.57692 6.25311 5.17122 5.6777 5.86406 5.24209L10.99 1.97431ZM8.04892 20.2498C8.8306 20.5396 9.68237 20.5825 10.4892 20.3727C10.8578 20.2742 11.2092 20.1198 11.531 19.9149L16.6586 16.6483C17.0751 16.3862 17.4323 16.0401 17.7075 15.6321C17.9827 15.2241 18.1697 14.7632 18.2567 14.2789C18.3445 13.7848 18.3327 13.2782 18.2221 12.7888C18.1115 12.2993 17.9043 11.8369 17.6125 11.4286C17.1374 10.7436 16.4635 10.221 15.6818 9.93121C14.9002 9.64145 14.0484 9.59854 13.2416 9.80828C12.873 9.90665 12.5216 10.061 12.1998 10.2659L10.2435 11.5125C10.1463 11.5741 10.0402 11.6205 9.929 11.6501C9.68583 11.7132 9.42916 11.7001 9.19365 11.6127C8.95813 11.5253 8.75511 11.3677 8.61198 11.1613C8.52418 11.0381 8.46182 10.8986 8.42855 10.7511C8.39527 10.6035 8.39174 10.4508 8.41816 10.3019C8.44437 10.156 8.50072 10.0172 8.58361 9.89433C8.6665 9.77146 8.77411 9.66724 8.89956 9.58832L14.0279 6.31995C14.1251 6.25833 14.2312 6.21193 14.3424 6.18235C14.5855 6.11913 14.8422 6.13208 15.0777 6.21944C15.3133 6.3068 15.5163 6.46436 15.6594 6.67083C15.816 6.89261 15.8893 7.1626 15.8662 7.43313L15.8485 7.62341L16.0392 7.6812C16.7597 7.89874 17.4378 8.23778 18.0442 8.6837L18.3068 8.87615L18.4033 8.58129C18.455 8.42472 18.496 8.2648 18.526 8.10264C18.6137 7.60859 18.602 7.10199 18.4913 6.61255C18.3807 6.12311 18.1735 5.66068 17.8818 5.25238C17.4066 4.56741 16.7327 4.04476 15.951 3.755C15.1693 3.46524 14.3175 3.42232 13.5107 3.63205C13.1421 3.73063 12.7908 3.88502 12.4689 4.08987L7.34135 7.35745C6.92461 7.61925 6.56709 7.96514 6.29167 8.37301C6.01625 8.78088 5.82899 9.24174 5.74186 9.72612C5.65406 10.2202 5.66581 10.7268 5.77643 11.2162C5.88704 11.7057 6.09429 12.1681 6.38602 12.5764C6.8612 13.2614 7.53514 13.784 8.31683 14.0738C9.09852 14.3636 9.9503 14.4065 10.7571 14.1967C11.1257 14.0982 11.477 13.944 11.799 13.7395L13.7554 12.4922C13.8527 12.4306 13.9587 12.3842 14.0699 12.3546C14.3131 12.2916 14.5698 12.3046 14.8053 12.392C15.0408 12.4795 15.2439 12.637 15.387 12.8435C15.4748 12.9667 15.5371 13.1061 15.5705 13.2536C15.6038 13.4011 15.6075 13.5538 15.5812 13.7027C15.5548 13.8486 15.4984 13.9875 15.4154 14.1103C15.3325 14.2332 15.2249 14.3375 15.0994 14.4165L9.97244 17.6846C9.87522 17.7463 9.76916 17.7927 9.65793 17.8222C9.4148 17.8855 9.15811 17.8726 8.92257 17.7852C8.68703 17.6978 8.48399 17.5403 8.34091 17.3338C8.18411 17.1123 8.11078 16.8424 8.13392 16.5721L8.15142 16.3818L7.96094 16.324C7.24041 16.1064 6.56232 15.7673 5.95593 15.3215L5.69311 15.1286L5.5966 15.4235C5.54476 15.58 5.50384 15.74 5.47413 15.9021C5.38636 16.3962 5.3981 16.9028 5.50868 17.3922C5.61926 17.8817 5.82645 18.3441 6.1181 18.7524C6.59329 19.4374 7.26723 19.96 8.04892 20.2498Z" />
  </Svg>
);
export { RemixIcon as SvelteFill };
