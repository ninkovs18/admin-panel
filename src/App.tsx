import Counter from "./Counter";
import "./styles.css";
const App = () => {
  return (
    <div>
      <h1>REACT BASE</h1>
      <p>ENVIROMENT: {process.env.NODE_ENV}</p>
      <Counter />
    </div>
  );
};

export default App;
