import React from "react";

import NewTask from "./NewTask";

export default {

    component: NewTask,

    title: "New Task",

};

const Template = (args) => React.createElement(NewTask, Object.assign({}, args));

export const Default = Template.bind({});

