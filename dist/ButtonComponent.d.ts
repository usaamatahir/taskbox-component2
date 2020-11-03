import React from "react";

export interface PropsType {

    label?: string;

    size?: "small" | "medium" | "large";

    variant?: "contained" | "outlined";

    color?: "primary" | "secondary";

    onClick?: () => void;

    children: React.ReactNode;

}

declare function ButtonComponent({ children, ...rest }: PropsType): JSX.Element;

declare namespace ButtonComponent {

    var defaultPropsType: {

        onClick: () => void;

        size: string;

        variant: string;

        color: string;

        children: string;

    };

}

export default ButtonComponent;

