const initState = { number: 0 };

export default function friend(state = initState, action) {
  let copy = { ...state };
  console.log("스위치문 : ", action);

  switch (action.type) {
    case "Friend/ADD_DATA": {
      copy.number++;
    }
  }

  return copy;
}
