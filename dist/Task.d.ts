import { FC } from "react";

import "./Task.css";

export interface task {

    id: string;

    title: string;

    state: "TASK_INBOX" | "TASK_ARCHIVED" | "TASK_PINNED";

}

export interface PropsType {

    task?: task;

    onArchiveTask?: (id: task["id"]) => void;

    onPinTask?: (id: task["id"]) => void;

    onUnpinTask?: (id: task["id"]) => void;

}

declare const Task: FC<PropsType>;

export default Task;

