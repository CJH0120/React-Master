import "./App.css";
import State from "./components/context";
import ContextProvider from "./reducer";

function App() {
  return (
    <ContextProvider>
      <State />
    </ContextProvider>
  );
}

export default App;
