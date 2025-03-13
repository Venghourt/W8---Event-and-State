import React from "react";
function App() {
  const [text, setText] = React.useState("");
  const [upperCaseText, setUpperCaseText] = React.useState("");
  function onTextChange(event) {
    setText(event.target.value);
    setUpperCaseText(event.target.value.toUpperCase());
  }
  return (
    <main>
      <h1>Upper Case Converter</h1>
      <label>Enter any text !</label>
      <input value={text} onChange={onTextChange} />
      <p>
        <label>Here is the text in upper case</label>
        <input value={upperCaseText} disabled />
      </p>
    </main>
  );
}

export default App;
