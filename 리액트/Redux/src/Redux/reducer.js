const initState = { number: 0 };

export default function friend(state = initState, action) {
  let copy = { ...state };
  console.log(state);

  switch (action.type) {
    case "Friend/ADD_DATA": {
      copy.number++;
    }
  }

  return copy;
}
