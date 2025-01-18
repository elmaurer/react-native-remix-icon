# react-native-remix-icon

this icon set includes all icons from the latest [remix icon set](https://remixicon.com/) (4.6.0)

## Requirements

this package depends on react-native-svg, therefor install the latest version of react-native-svg

**npm:**

```shell
npm i react-native-svg
```

**yarn:**

```shell
yarn add react-native-svg
```

## Usage

### Icon Component

```tsx
import {Icon} from "@elmaurer/react-native-remix-icon";

const Component = () => {
    return (<Icon iconName={'account-box-fill'}/>)
};
```

### IconProps

the interface extends from ``SvgProps``, which comes from ``react-native-svg``

| **Name** | **Type** | **Default** |
|----------|----------|-------------|
| iconName | IconName | -           |
| color    | string   | #000        |

### Individual Icon Component

this solution uses the ``SvgProps`` interface aswell, with a default color of ``#000``

```tsx
import {ArrowLeftSLine} from "@elmaurer/react-native-remix-icon";

const Component = () => {
    return (<ArrowLeftSLine/>)
};
```


