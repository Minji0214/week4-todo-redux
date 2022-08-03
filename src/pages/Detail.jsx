import React from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  let todoList = useSelector((state) => {
    return state.todoList;
  });
  const idx = todoList.findIndex((x) => x.id == id);

  return (
    <div>
      <DetailBox>
        <CardBox>
          <Btn onClick={() => navigate(-1)}> 이전으로 </Btn>
          <div>id : {todoList[idx].id}</div>
          <h1>{todoList[idx].title}</h1>
          <h4>{todoList[idx].body}</h4>
        </CardBox>
      </DetailBox>
    </div>
  );
};

const Container = styled.div`
  margin: auto;
`;
const DetailBox = styled.div`
  border-color: #45937f;
  width: 70vw;
  height: 60vw;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardBox = styled.div`
  background-color: #45937f;
  padding: 50px;
  margin-bottom: 50px;
`;
const Btn = styled.button``;
export default Detail;
