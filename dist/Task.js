import React from "react";

import StarIcon from "@material-ui/icons/Star";

import "./Task.css";

const Task = ({ task, onArchiveTask, onPinTask, onUnpinTask, }) => {

    function handleChange(task) {

        if (task.state === "TASK_PINNED") {

            onUnpinTask(task.id);

        }

        else {

            onPinTask(task.id);

        }

    }

    return (React.createElement("div", { className: `list-item ${task.state}` },

        React.createElement("div", { className: "checkbox_Text" },

            React.createElement("label", null,

                React.createElement("input", { type: "checkbox", defaultChecked: task.state === "TASK_ARCHIVED", disabled: task.state === "TASK_ARCHIVED", name: "checked", onClick: () => onArchiveTask(task.id) })),

            React.createElement("p", { "data-testid": "text", className: task.state === "TASK_ARCHIVED" ? "archived" : undefined },

                " ",

                !!task.title ? task.title : "No Title Added",

                " ")),

        React.createElement("div", { onClick: (event) => event.stopPropagation() }, task.state !== "TASK_ARCHIVED" && (React.createElement(StarIcon, { className: task.state !== "TASK_PINNED" ? "starUnpinned" : "starPinned", onClick: () => {

                handleChange(task);

            } })))));

};

export default Task;

Task.defaultProps = {

    task: { id: "1", title: "New Task", state: "TASK_INBOX" },

    onArchiveTask: () => {

        console.log("task archived");

    },

    onPinTask: () => {

        console.log("task pinned");

    },

    onUnpinTask: () => {

        console.log("task unpinned");

    },

};

