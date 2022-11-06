const ADD_DATA = "Friend/ADD_DATA";
//모듈이 여러개 있을 수도 있으니 뭘 추가하는지 적어준다.

export const addData = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  };
};
