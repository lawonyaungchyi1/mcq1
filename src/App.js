import FixedContainer from "./components/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <FixedContainer />
      <ToastContainer autoClose={6000} />
    </div>
  );
};

export default App;
