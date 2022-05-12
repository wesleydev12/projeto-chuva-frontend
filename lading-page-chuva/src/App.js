import Container1 from "./components/Container1";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";
import ContainerFooter from "./components/ContainerFooter";
import ContainerLeft from "./components/ContainerLeft";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <div>
      <ContainerLeft />
      <Navbar2 />
      <Container1 />
      <Container2 />
      <Container3 />
      <ContainerFooter />
    </div>
  );
}

export default App;
