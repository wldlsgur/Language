import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Redux/rootReducer";
import HeaderComponent from "./headerComponent";

const store = createStore(rootReducer);

function App() {
  <Provider store={store}>
    <HeaderComponent></HeaderComponent>
  </Provider>;
}

export default App;
