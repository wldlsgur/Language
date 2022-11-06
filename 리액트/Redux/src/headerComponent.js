import React from "react";
import { userSelector, useDispatch } from "react-redux";
import { addData } from "./Redux/action";

HeaderComponent = () => {
  const friend = userSelector((state) => state.friend); //구독
  //const name = userSelector((state) => state.friend.name);
  // 단일 값 뽑기도 가능

  const dispatch = useDispatch(); //수정할때 사용
  dispatch(addData(data)); //action에서 지정한 함수 사용
  return (
    <div className="Header">
      <h4>hi</h4>
    </div>
  );
};

export default HeaderComponent;
