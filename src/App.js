import { Topbar } from "./topbar";
import { Core } from "./core";
import { Outro } from "./Outro";
import "./index.css";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Core></Core>
      <Outro></Outro>
    </div>
  );
}

export default App;
