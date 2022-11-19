import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "./Redux/action";

const TestComponent = (props) => {
  const friend = useSelector((state) => state.friend); //구독
  const dispatch = useDispatch(); //수정할때 사용

  return (
    <div className="Header">
      <h4>{friend.number}</h4>
      <button
        onClick={() => {
          dispatch(addData(null));
        }}
      >
        증가
      </button>
    </div>
  );
};

export default TestComponent;
