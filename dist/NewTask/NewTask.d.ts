import React, { FC } from "react";

import "./NewTask.css";

export interface PropsType {

    handleSave: () => void;

    handleCancel: () => void;

    inputOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

declare const NewTask: FC<PropsType>;

export default NewTask;

