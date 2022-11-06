const initState = [];

export default function friend(state = initState, action) {
  let copy = [...state];

  switch (action.type) {
    case ADD_DATA: {
      let index = state.findIndex((state) => {
        return state.id === action.payload.id;
      });

      if (index >= 0) {
        alert("이미 있음");
        return copy;
      }
    }
  }
}
