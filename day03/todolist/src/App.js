import "./App.css";
import Todos from "./pages/Todos";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: salmon;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Todos />
    </>
  );
}
export default App;
