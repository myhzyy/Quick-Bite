import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [textBox, setTextBox] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (textBox === "") return;

    onSubmit(textBox);

    setTextBox("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label>New item</label>
        <input
          type="text"
          id="item"
          value={textBox}
          onChange={(e) => setTextBox(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
