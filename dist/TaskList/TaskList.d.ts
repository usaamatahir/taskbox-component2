import { FC } from "react";

import { task } from "../Task/Task";

import "./TaskList.css";

export interface PropsType {

    loading?: boolean;

    tasks?: task[];

    onPinTask?: (id: task["id"]) => void;

    onArchiveTask?: (id: task["id"]) => void;

    onUnpinTask?: (id: task["id"]) => void;

}

declare const TaskList: FC<PropsType>;

export default TaskList;

