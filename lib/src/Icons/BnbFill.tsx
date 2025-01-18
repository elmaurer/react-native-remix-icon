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
    <Path d="M6.16705 4.36681L12 1L17.833 4.36681L15.6885 5.61061L12 3.48758L8.31152 5.61061L6.16705 4.36681ZM17.833 8.61285L15.6885 7.36907L12 9.49209L8.31152 7.36907L6.16705 8.61285V11.1004L9.85553 13.2234V17.4695L12 18.7133L14.1445 17.4695V13.2234L17.833 11.1004V8.61285ZM17.833 15.3465V12.8589L15.6885 14.1026V16.5902L17.833 15.3465ZM19.3555 16.2257L15.667 18.3487V20.8363L21.5 17.4695V10.7358L19.3555 11.9797V16.2257ZM17.2111 6.48984L19.3555 7.73362V10.2212L21.5 8.97741V6.48984L19.3555 5.24605L17.2111 6.48984ZM9.85553 19.2494V21.737L12 22.9808L14.1445 21.737V19.2494L12 20.4932L9.85553 19.2494ZM6.16705 15.3465L8.31152 16.5902V14.1026L6.16705 12.8589V15.3465ZM9.85553 6.48984L12 7.73362L14.1445 6.48984L12 5.24605L9.85553 6.48984ZM4.64446 7.73362L6.78894 6.48984L4.64446 5.24605L2.5 6.48984V8.97741L4.64446 10.2212V7.73362ZM4.64446 11.9797L2.5 10.7358V17.4695L8.33294 20.8363V18.3487L4.64446 16.2257V11.9797Z" />
  </Svg>
);
export { RemixIcon as BnbFill };
