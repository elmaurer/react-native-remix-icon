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
    <Path d="M7.78934 15.7143C7.64573 15.2587 7.54999 14.6754 7.54472 14.3752 7.53944 14.0762 7.60516 13.578 7.60516 13.578L3.09648 17.268C2.30907 17.9041 1.24985 17.9029.751679 17.2644.260811 16.6364.512736 15.6441 1.29204 15.0474L9.58486 8.68273 4.95651 8.68881C4.17152 8.68597 3.65875 8.15697 3.80642 7.51925 3.95003 6.89329 4.67578 6.39796 5.43074 6.39715L14.5767 6.38741 11.582 3.94849C11.1155 3.56594 11.1755 2.95945 11.6996 2.59272 12.2181 2.23005 13.0108 2.22883 13.4822 2.5907L20.6858 8.12208 20.6841 8.1233C21.3961 8.67542 21.9949 9.3314 22.4594 10.0807 22.9673 10.8961 23.2971 11.7906 23.4326 12.7439 23.502 13.2332 23.5178 13.7228 23.4801 14.2117 23.4415 14.7078 23.3454 15.2023 23.1933 15.6896 22.8906 16.6538 22.3795 17.5475 21.6675 18.337 20.9377 19.1455 20.0383 19.7974 18.9986 20.2627 17.9057 20.7504 16.7215 21.0019 15.4935 21.0035 14.2635 21.0055 13.0794 20.7589 11.9865 20.2749 10.9467 19.8141 10.0465 19.165 9.31549 18.3569 8.60313 17.5707 8.09116 16.6786 7.78934 15.7143ZM15.4935 17.5293C16.9008 17.5265 18.2014 16.9897 19.1304 16.0433 19.5844 15.5808 19.9166 15.051 20.1227 14.4851 20.3243 13.9301 20.4026 13.3423 20.3515 12.7492 20.3004 12.1671 20.1288 11.6154 19.8517 11.1148 19.5807 10.6231 19.2079 10.1797 18.7479 9.80483 17.844 9.07136 16.6951 8.67664 15.4915 8.67826 14.2891 8.67989 13.1394 9.07826 12.2364 9.81416 11.7755 10.1906 11.4023 10.6356 11.1313 11.1281 10.8554 11.6291 10.6826 12.1829 10.6335 12.7634 10.5816 13.3573 10.6599 13.946 10.8615 14.5005 11.0672 15.0648 11.4007 15.5946 11.8546 16.0551 12.7836 16.9999 14.0842 17.5317 15.4935 17.5293ZM13.4751 10.9036C14.0308 10.433 14.7789 10.1453 15.5951 10.1453 16.4105 10.1453 17.1586 10.433 17.7148 10.9036 18.2811 11.3827 18.6568 12.0585 18.7002 12.8248 18.7432 13.6131 18.4263 14.3453 17.8706 14.8881 17.3038 15.4402 16.4978 15.7867 15.5951 15.7867 14.6925 15.7867 13.8848 15.4402 13.3185 14.8881 12.7623 14.3453 12.4463 13.6131 12.4897 12.8256 12.5327 12.0585 12.9083 11.3827 13.4751 10.9036ZM13.4751 10.9036C12.9083 11.3827 12.5327 12.0585 12.4897 12.8256 12.4463 13.6131 12.7623 14.3453 13.3185 14.8881 13.8848 15.4402 14.6925 15.7867 15.5951 15.7867 16.4978 15.7867 17.3038 15.4402 17.8706 14.8881 18.4263 14.3453 18.7432 13.6131 18.7002 12.8248 18.6568 12.0585 18.2811 11.3827 17.7148 10.9036 17.1586 10.433 16.4105 10.1453 15.5951 10.1453 14.7789 10.1453 14.0308 10.433 13.4751 10.9036ZM7.78934 15.7143C7.64573 15.2587 7.54999 14.6754 7.54472 14.3752 7.53944 14.0762 7.60516 13.578 7.60516 13.578L3.09648 17.268C2.30907 17.9041 1.24985 17.9029.751679 17.2644.260811 16.6364.512736 15.6441 1.29204 15.0474L9.58486 8.68273 4.95651 8.68881C4.17152 8.68597 3.65875 8.15697 3.80642 7.51925 3.95003 6.89329 4.67578 6.39796 5.43074 6.39715L14.5767 6.38741 11.582 3.94849C11.1155 3.56594 11.1755 2.95945 11.6996 2.59272 12.2181 2.23005 13.0108 2.22883 13.4822 2.5907L20.6858 8.12208 20.6841 8.1233C21.3961 8.67542 21.9949 9.3314 22.4594 10.0807 22.9673 10.8961 23.2971 11.7906 23.4326 12.7439 23.502 13.2332 23.5178 13.7228 23.4801 14.2117 23.4415 14.7078 23.3454 15.2023 23.1933 15.6896 22.8906 16.6538 22.3795 17.5476 21.6675 18.337 20.9377 19.1455 20.0383 19.7974 18.9986 20.2627 17.9057 20.7504 16.7215 21.0019 15.4935 21.0035 14.2635 21.0055 13.0794 20.7589 11.9865 20.2749 10.9467 19.8141 10.0465 19.165 9.31549 18.3569 8.60313 17.5707 8.09116 16.6786 7.78934 15.7143ZM15.4935 17.5293C16.9008 17.5265 18.2014 16.9897 19.1304 16.0433 19.5844 15.5808 19.9166 15.051 20.1227 14.4851 20.3243 13.9301 20.4026 13.3423 20.3515 12.7492 20.3004 12.1671 20.1288 11.6154 19.8517 11.1148 19.5807 10.6231 19.2079 10.1797 18.7479 9.80483 17.844 9.07136 16.6951 8.67664 15.4915 8.67826 14.2891 8.67989 13.1394 9.07826 12.2364 9.81416 11.7755 10.1906 11.4023 10.6356 11.1313 11.1281 10.8554 11.6291 10.6826 12.1829 10.6335 12.7634 10.5816 13.3573 10.6599 13.946 10.8615 14.5005 11.0672 15.0648 11.4007 15.5946 11.8546 16.0551 12.7836 16.9999 14.0842 17.5317 15.4935 17.5293Z" />
  </Svg>
);
export { RemixIcon as BlenderFill };
