import { useState } from "react";
import { notEmptyField } from "../util/validations";
import Input from "./Input";

export default function Form({ dispatch }) {
  const [text, setText] = useState("");
  const [error, setError] = useState();

  function handleForm(e) {
    e.preventDefault();
    if (notEmptyField(text)) {
      dispatch({
        type: "ADD_TASK",
        task: text,
      });
      setText("");
      console.log("Subbmited a task!");
    } else {
      setError("The field is empty.");
    }
  }

  return (
    <form className="task-form" onSubmit={handleForm}>
      <Input label="Write a task:" id="task" error={error}>
        <input
          type="text"
          id="task"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setError(null)
          }}
        />
      </Input>
    </form>
  );
}
