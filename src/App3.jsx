import { useState } from "react";

/**
 * DONE: handle user inputs fields
 * DONE: handle operations
 * DONE: handle a list of histories
 * DONE: render history list
 * DONE: restore the history
 */

const InputField = ({ inputState, handleInputFields, name }) => (
  <input
    type="number"
    value={inputState.a}
    onChange={handleInputFields}
    name={name}
  />
);

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

  // useEffect(() => {
  //   if (restoreHistory != null) {
  //     handleArithmeticsOps(restoreHistory.operation);
  //   }
  // }, [inputState]);

  //   1st method
  const handleInputFields = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  //   2nd method
  //   const handleInputA = (e) => {
  //     setInputState({
  //       ...inputState,
  //       a: parseInt(e.target.value),
  //     });
  //   };
  //   const handleInputB = (e) => {
  //     setInputState({
  //       ...inputState,
  //       b: parseInt(e.target.value),
  //     });
  //   };

  // 3rd method
  //   const handleInputFields = (key, value) => {
  //     setInputState({
  //       ...inputState,
  //       [key]: value,
  //     });
  //   };

  // 4th method
  //   const handleInputFields = (inp) => {
  //     setInputState({
  //       ...inputState,
  //       ...inp,
  //     });
  //   };

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
      <div>
        <p>Inputs</p>
        <InputField
          inputState={inputState}
          handleInputFields={handleInputFields}
          name="a"
        />
        <input
          type="number"
          value={inputState.b}
          onChange={handleInputFields}
          name="b"
        />
      </div>
      <div>
        <p>Operations</p>
        <button onClick={() => handleArithmeticsOps("+")}>+</button>
        <button onClick={() => handleArithmeticsOps("-")}>-</button>
        <button onClick={() => handleArithmeticsOps("*")}>*</button>
        <button onClick={() => handleArithmeticsOps("/")}>/</button>
        <button onClick={() => handleArithmeticsOps("%")}>%</button>
        <button onClick={handleInputClear}>clear</button>
      </div>
      <div>
        <p>History</p>
        {histories.length === 0 ? (
          <p>
            <small>There is no history</small>
          </p>
        ) : (
          <ul>
            {histories.map((historyItem) => (
              <li key={historyItem.id}>
                <p>
                  Operation: {historyItem.inputs.a} {historyItem.operation}{" "}
                  {historyItem.inputs.b}, Result: {historyItem.result}
                </p>
                <small>
                  {historyItem.date.toLocaleDateString()}{" "}
                  {historyItem.date.toLocaleTimeString()}
                </small>
                <br />
                <button
                  disabled={
                    restoreHistory != null && restoreHistory === historyItem.id
                  }
                  onClick={() => handleRestoreBtn(historyItem)}
                >
                  Restore
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
