import './App.css';
import ClassComponentOne from "./page/classComponentOne/ClassComponentOne";
import ClassComponentTwo from "./page/classComponentTwo/ClassComponentTwo";
import FunctionComponent from "./page/functionComponent/FunctionComponent";

function App() {

  const user = {name: "Anna", age: 19}

  return (
    <div className="App">

      < ClassComponentOne/>
      < ClassComponentTwo/>
      <FunctionComponent/>

    </div>
  );
}

export default App;
