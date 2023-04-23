import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const fetchInfo = async () => {
    const url = `${process.env.REACT_APP_API_URL}/test`;

    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    setResult(json.body);
  };

  return (
    <div>
      <button onClick={fetchInfo}>Fetch api</button>
      <div>result : {result}</div>
    </div>
  );
}

export default App;
