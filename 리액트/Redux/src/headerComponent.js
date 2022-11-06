import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "./Redux/action";

const Headercomponent = (props) => {
  const friend = useSelector((state) => state.friend); //구독
  //const name = useSelector((state) => state.friend.name);
  // 단일 값 뽑기도 가능

  const dispatch = useDispatch(); //수정할때 사용
  //action에서 지정한 함수 사용
  //dispatch 매개변수로 객체를 전달 addDate는 액션이고 객체이다

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

export default Headercomponent;
