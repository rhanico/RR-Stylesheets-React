import { useContext } from "react";
import StyleContext from "../contexts/StyleContext";

export default function Aside() {
  const { aside, innerAside } = useContext(StyleContext);

  return (
    <div style={aside}>
      <h4>This is the Aside like A SideBar of thing</h4>
      <div style={innerAside}>
        <h5>This is the Inner Aside of thing</h5>
      </div>
    </div>
  );
}
