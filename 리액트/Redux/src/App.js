import "./App.css";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./Redux/rootReducer";
import Headercomponent from "./headerComponent";
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Headercomponent></Headercomponent>
    </Provider>
  );
}

export default App;
