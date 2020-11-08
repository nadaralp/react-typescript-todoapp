import { FormEvent } from "react";

export const TodoFormOnSubmit = (event: FormEvent): void => {
    event.preventDefault();
    console.log(event.target);
}