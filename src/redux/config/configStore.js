import { configureStore, createSlice } from "@reduxjs/toolkit"; //createslice임포트 --> slice로 필요한 객체 넣을 거임
//configureStore: 작은 슬라이스를 모아서 store로 만들때(createstore를 추상호화한것)

let todoList = createSlice({
  //slice만들때 선언( 선언한 slice의 name에 따라서 액션 생성자, 액션 타입, 리듀서를 자동으로 생성해줍니다. 따라서 별도로 createAction이나 createReducer를 사용하지 않아도 됩니다.

  name: "todoList", //slice이름
  initialState: [
    { id: 1, title: "공부하기", body: "리액트과제", isDone: false },
    { id: 2, title: "옷사러가기", body: "언니랑같이가기", isDone: false },
    { id: 3, title: "친구만나기", body: "저녁8시", isDone: false },
    { id: 4, title: "아오그만하고싶네", body: "새벽까지", isDone: true },
  ],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },

  ruDone(state, action) {
    let 번호 = state.findIndex((a) => {
      return a.id === action.payload;
    });
  state[번호].isDone ? state[번호].isDone = false : state[번호].isDone = true
  },
  deleteList(state, action) {
    state.splice(action.payload, 1);
  }  },
});

export let { addTodo, ruDone, deleteList } = todoList.actions;
export default configureStore({
  //state를 등록한다(객체를)
  reducer: {
    todoList: todoList.reducer, //작명 : createslice만든거.reducer
  },
});
