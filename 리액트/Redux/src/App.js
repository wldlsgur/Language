import "./App.css";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./Redux/rootReducer";
import Headercomponent from "./headerComponent";
import TestComponent from "./test";
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Headercomponent></Headercomponent>
      <TestComponent></TestComponent>
    </Provider>
  );
}

export default App;
