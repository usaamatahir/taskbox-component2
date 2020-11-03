import React from "react";

import ButtonComponent from "./ButtonComponent";

export default {

    component: ButtonComponent,

    title: "Button",

};

const Template = (args) => React.createElement(ButtonComponent, Object.assign({}, args));

export const Default = Template.bind({});

export const pinkButton = Template.bind({});

pinkButton.args = {

    color: "secondary",

};

export const outlined = Template.bind({});

outlined.args = {

    variant: "outlined",

};

export const large = Template.bind({});

large.args = {

    size: "large",

};

export const small = Template.bind({});

small.args = {

    size: "small",

};

