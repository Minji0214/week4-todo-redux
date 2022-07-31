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
  const idx = todoList.findIndex((x) => x.id == id );


  return (
    <div>
      <DetailBox>
        <CardBox>
          <h1>{todoList[idx].title}</h1>
          <h4>{todoList[idx].body}</h4>
        </CardBox>
//todo history 버전도 해보기 
        <Btn onClick={() => navigate(-1)}> 이전으로 </Btn>
      </DetailBox>
    </div>
  );
};

const Container = styled.div`
  margin: auto;
`;
const DetailBox = styled.div`
  border-color: #45937f;
  border-style: inset;
  width: 70vw;
  height: 60vw;
  border-radius: 7px;
`;

const CardBox = styled.div``;
const Btn = styled.button``;
export default Detail;
