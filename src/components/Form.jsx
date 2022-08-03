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

  //!ref 테스트

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
  display: flex;
  justify-content: center;
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
    color: #e7cbba;
  }
  ///////*애니메이션 효과를 넣었으나, 실행안됨*/
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #000;
    -webkit-transform: scaleY(0.3);
    transform: scaleY(0.3);
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover::before {
    opacity: 1;
    background-color: #fff;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    transition: -webkit-transform 0.6s cubic-bezier(0.08, 0.35, 0.13, 1.02),
      opacity 0.4s;
    transition: transform 0.6s cubic-bezier(0.08, 0.35, 0.13, 1.02), opacity;
  }
`;

export default Form;
