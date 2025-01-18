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
    <Path d="M15.8407 12.691C15.8185 12.6975 15.7966 12.7043 15.7743 12.7104C15.6382 12.749 15.4987 12.7727 15.3604 12.7727C14.7502 12.7727 14.4056 12.3605 14.5907 11.852C14.7261 11.4801 15.0814 11.1663 15.5152 11.021C16.1874 10.7758 16.6571 10.2167 16.6571 9.56612C16.6571 8.68948 15.8043 7.97881 14.7523 7.97881C13.7003 7.97881 12.8475 8.68948 12.8475 9.56612V14.4339C12.8475 15.6046 12.1693 16.6311 11.1544 17.2117C10.6012 17.5282 9.94956 17.7143 9.24971 17.7143C7.26575 17.7143 5.6518 16.2427 5.6518 14.4339C5.6518 13.8581 5.81642 13.3174 6.10329 12.8466C6.54725 12.1179 7.28702 11.5599 8.17307 11.3055C8.32463 11.2584 8.47956 11.2325 8.63232 11.2325C9.24523 11.2325 9.59142 11.6466 9.40553 12.1574C9.27956 12.5035 8.94031 12.8016 8.54478 12.9601C8.49754 12.9759 8.45157 12.9936 8.4062 13.0122C7.77792 13.2716 7.34493 13.8099 7.34493 14.4339C7.34493 15.3105 8.19769 16.0211 9.24971 16.0211C10.3016 16.0211 11.1544 15.3105 11.1544 14.4339V9.56612C11.1544 8.39537 11.8326 7.36888 12.8475 6.78821C13.4008 6.47172 14.0524 6.28567 14.7523 6.28567C16.7362 6.28567 18.3502 7.75724 18.3502 9.56612C18.3502 10.1418 18.1855 10.6826 17.8987 11.1534C17.4566 11.8789 16.7214 12.435 15.8407 12.691ZM2.00098 12C2.00098 17.5228 6.47814 22 12.001 22C17.5238 22 22.001 17.5228 22.001 12C22.001 6.47716 17.5238 2 12.001 2C6.47814 2 2.00098 6.47716 2.00098 12Z" />
  </Svg>
);
export { RemixIcon as MiniProgramFill };
