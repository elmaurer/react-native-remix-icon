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
    <Path d="M18.223 3.08609C18.7112 3.57424 18.7112 4.3657 18.223 4.85385L17.08 5.99622L18.25 5.99662C20.3211 5.99662 22 7.67555 22 9.74662V17.2466C22 19.3177 20.3211 20.9966 18.25 20.9966H5.75C3.67893 20.9966 2 19.3177 2 17.2466V9.74662C2 7.67555 3.67893 5.99662 5.75 5.99662L6.91625 5.99622L5.77466 4.85481C5.28651 4.36665 5.28651 3.5752 5.77466 3.08704C6.26282 2.59889 7.05427 2.59889 7.54243 3.08704L10.1941 5.73869C10.2729 5.81753 10.339 5.90428 10.3924 5.99638L13.6046 5.99661C13.6581 5.90407 13.7244 5.81691 13.8036 5.73774L16.4553 3.08609C16.9434 2.59793 17.7349 2.59793 18.223 3.08609ZM18.25 8.50662H5.75C5.09102 8.50662 4.55115 9.01654 4.50343 9.66333L4.5 9.75662V17.2566C4.5 17.9156 5.00992 18.4555 5.65671 18.5032L5.75 18.5066H18.25C18.909 18.5066 19.4489 17.9967 19.4966 17.3499L19.5 17.2566V9.75662C19.5 9.06626 18.9404 8.50662 18.25 8.50662ZM8.25 11.0066C8.94036 11.0066 9.5 11.5663 9.5 12.2566V13.5066C9.5 14.197 8.94036 14.7566 8.25 14.7566C7.55964 14.7566 7 14.197 7 13.5066V12.2566C7 11.5663 7.55964 11.0066 8.25 11.0066ZM15.75 11.0066C16.4404 11.0066 17 11.5663 17 12.2566V13.5066C17 14.197 16.4404 14.7566 15.75 14.7566C15.0596 14.7566 14.5 14.197 14.5 13.5066V12.2566C14.5 11.5663 15.0596 11.0066 15.75 11.0066Z" />
  </Svg>
);
export { RemixIcon as BilibiliFill };
