import React from 'react';
import {IconProps} from "./Icon.types";
import {toPascalCase} from "./Icon.helper";
import * as Icons from "./Icons"
import {Text} from "react-native";

const Icon: React.FC<IconProps> = ({iconName, color = '#000', ...props}) => {
    const formattedIconName = toPascalCase(iconName);
    const IconComponent = (Icons as any)[formattedIconName];

    if (!IconComponent) {
        return <Text>Icon not found!</Text>;
    }
    return <IconComponent color={color} {...props}/>
}

export {Icon}