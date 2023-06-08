import "./App.css";
import Container from "./components/Container";
import Menu from "./components/Menu";
import StyleContext from "./contexts/StyleContext";
import Aside from "./components/Aside";
import { DEFAULT_STYLE } from "./contexts/StyleContext";

const menu = {
  backgroundColor: "red",
};

const menuItem = {
  backgroundColor: "blue",
  color: "beige",
  fontSize: "20px",
  textAlign: "center",
  padding: ".5rem",
  display: "inline-block",
  border: "10px",
};

function App() {
  return (
    <StyleContext.Provider value={ DEFAULT_STYLE }>
      <div className="App">
        <Aside/>
        <Container>
          <Menu menu={menu} menuItem={menuItem} />
          <h3> This is the Container! </h3>
        </Container>
      </div>
    </StyleContext.Provider>
  );
}

export default App;
