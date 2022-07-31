import React, { useEffect, useState, useRef, memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHandler } from "../redux/modules/todo";
import styled from "styled-components";

const Form = () => {
  let dispatch = useDispatch();
  //todo 객체상태로 업데이트 필요
  let [todoTitle, setTodoTitle] = useState("");
  let [todoBody, setTodoBody] = useState("");
  let todoList = useSelector((state) => {
    return state.todoList;
  });
  //todo 유즈메모 버전 시도하기
  //!ref 테스트
  //!usememo테스트
  const nameRef = useRef();

  console.log("안녕");
  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "todoTitle") {
      //따옴표 잊지 않기
      setTodoTitle(value);
    } else if (name === "todoBody") {
      setTodoBody(value);
    }
  };
  // useMemo(()=> onChange(),[todoList])
  //! 서브밋이벤트--------------------------------------------
  const onSubmit = (e) => {
    //prevent막기
    e.preventDefault();

    //공백이면 안들어가게 하기
    // if (todoTitle == "" || todoBody === "") return;
    //투두리스트에 추가
    let list = {
      id: todoList[todoList.length - 1].id + 1,
      title: todoTitle,
      body: todoBody,
      isDone: false,
    };
    console.log(nameRef.current.value);

    dispatch(addHandler(list));
    //인풋값 비워주기
    setTodoTitle("");
    setTodoBody("");
  };

  //! 리턴-------------------------------------------------
  return (
    <>
      <FormBox onSubmit={onSubmit}>
        <TitleBox>
          <InputLabel>제목</InputLabel>
          <InputBox
            ref={nameRef}
            value={todoTitle}
            onChange={onChange}
            type="text"
            name="todoTitle"
            required
          />
        </TitleBox>

        <div>
          <InputLabel>내용</InputLabel>
          <InputBox
            onChange={onChange}
            value={todoBody}
            type="text"
            name="todoBody"
            required
          />
          <AddBtn>추가하기</AddBtn>
        </div>
      </FormBox>
    </>
  );
};

//!스타일드컴포넌트--------------------------
const FormBox = styled.form`
  background-color: #f2b5a7;
  height: 4rem;
  display: flex;
  align-items: center;
`;
const InputBox = styled.input`
  border-radius: 5px;
`;
const InputLabel = styled.label`
  margin: 5px;
`;
const TitleBox = styled.div`
  margin: 5px;
`;
const AddBtn = styled.button`
  margin-left: 10px;
  all: unset;
  border-style: solid;
  border-color: #f28080;
  background-color: #f28080;
  border-width: 1px;
  border-radius: 5px;
  padding: 3px;
  margin: 5px;
  &:hover {
    background-color: #e7cbba;
    border-color: #f28080;
  }
`;

export default Form;
