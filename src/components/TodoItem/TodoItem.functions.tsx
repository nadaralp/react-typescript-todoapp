import React, { ReactElement } from "react";

export const renderTextBasedOnCondition =
    (condition: boolean, textWhenTrue: string, textWhenFalse: string): ReactElement => {
        const text: string = condition ? textWhenTrue : textWhenFalse;
        return <p>{text}</p>
    }