import React from "react";

import Button from "../ButtonComponent/ButtonComponent";

import "./NewTask.css";

const NewTask = ({ inputOnChange, handleCancel, handleSave, }) => {

    return (React.createElement("div", { className: "newTaskContainer" },

        React.createElement("h2", { className: "newTaskHeading" }, "Create a New Task"),

        React.createElement("input", { type: "text", placeholder: "Planning something?", onChange: !!inputOnChange

                ? (e) => {

                    inputOnChange(e);

                }

                : undefined }),

        React.createElement("div", { className: "buttonContainer" },

            React.createElement(Button, { variant: "contained", color: "primary", size: "medium", onClick: handleSave }, "Save"),

            React.createElement(Button, { variant: "contained", color: "secondary", size: "medium", onClick: handleCancel }, "Cancel"))));

};

export default NewTask;

NewTask.defaultProps = {

    handleSave: () => {

        console.log("task saved");

    },

    handleCancel: () => {

        console.log("task not saved");

    },

};

