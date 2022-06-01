import { useState } from "react";
import HistorySection from "./components/history/HistorySection";
import InputSection from "./components/inputs/InputSection";
import OperationSection from "./components/operations/OperationSection";
/**
 * DONE: handle user inputs fields
 * DONE: handle operations
 * DONE: handle a list of histories
 * DONE: render history list
 * DONE: restore the history
 */

function* generateId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const getId = generateId();

const InitialInputState = {
  a: 20,
  b: 10,
};

const App = () => {
  const [inputState, setInputState] = useState({ ...InitialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoreHistory, setRestoreHistory] = useState(null);

  const handleInputFields = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleInputClear = () => {
    setInputState({
      ...InitialInputState,
    });
    setResult(0);
  };

  const handleArithmeticsOps = (operation) => {
    if (!inputState.a || !inputState.b) {
      alert("invalid input");
      return;
    }
    const func = new Function(
      `operation`,
      `
      return ${inputState.a} ${operation} ${inputState.b}
      `
    );
    const result = func(operation);
    setResult(result);
    // setResult(eval(`${inputState.a} ${operation} ${inputState.b}`));

    const historyItem = {
      id: getId.next().value,
      inputs: { ...inputState },
      operation,
      result,
      date: new Date(),
    };
    setHistories([historyItem, ...histories]);
  };

  const handleRestoreBtn = (historyItem) => {
    setInputState({ ...historyItem.inputs });
    setResult(historyItem.result);
    setRestoreHistory(historyItem.id);
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Result: {result}</h1>
      <InputSection inputs={inputState} handleInputFields={handleInputFields} />
      <OperationSection
        handleArithmeticsOps={handleArithmeticsOps}
        handleInputClear={handleInputClear}
      />
      <HistorySection
        histories={histories}
        restoreHistory={restoreHistory}
        handleRestoreBtn={handleRestoreBtn}
      />
    </div>
  );
};

export default App;
