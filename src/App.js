import "./App.css";
import HomePage from "./Pages/HomePage/Homepage";
import MyProfiles from "./Pages/MyProfiles/MyProfiles";
import Compiler from "./Pages/Compiler/Compiler";

function App() {
  return (
    <div className="App">
      <HomePage />
      <MyProfiles />
      <Compiler/>
    </div>
  );
}

export default App;
