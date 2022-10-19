/* eslint-disable */
import "./App.css";
import { useState } from "react";
function App() {
  let [글제목, b] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬독학"]);
  let [logo, setLogo] = useState("ReactBlog");
  let [like, setLike] = useState(0);

  let 함수 = () => {
    setLike(like + 1);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]} <span onClick={함수}>👍</span> {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
