import { FormEvent, useContext } from "react";

export const TodoFormOnSubmit = (event: FormEvent): void => {
    event.preventDefault();
    console.log(event.target);
}