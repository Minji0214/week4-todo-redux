import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"; //dispatch 임포트
import { deleteHandler, doneHandler } from '../redux/modules/todo';
import { useNavigate } from "react-router-dom";

const List = () => {
  let dispatch = useDispatch();
  let todoList = useSelector((state) => {
    return state.todoList;
  });
  //todo 필터 두개 안쓰는 방법 
  //todo 컴포넌트 분리 할수 있는 방법 고민 
  let test1 = todoList.filter((y) => {
    return y.isDone === false;
  });
  let test2 = todoList.filter((y) => {
    return y.isDone === true;
  });

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Title>working</Title>
        <hr />
        <ListBox>
          {test1.map((x, i) => {
            return (
              <Fragment key={x.id}>
                <CardBox>
                  <DetailBtn
                    onClick={() => {
                      const id = x.id;
                      navigate(`/detail/${id}`);
                    }}
                  >
                    상세보기
                  </DetailBtn>

                  <div>
                    <h3>{x.title}</h3>
                    <p>{x.body}</p>
                  </div>
                  <div>
                    <Btn
                      className="btn"
                      onClick={() => {
                        let 인덱스 = todoList.findIndex(
                          (element) => element.id === x.id
                        );

                        dispatch(deleteHandler(인덱스));
                      }}
                    >
                      삭제
                    </Btn>
                    <Btn
                      className="btn"
                      onClick={() => {
                        let 인덱스 = todoList.findIndex(
                          (element) => element.id === x.id
                        );
                        인덱스 = todoList[인덱스].id;
                        dispatch(doneHandler(인덱스));
                      }}
                    >
                      {" "}
                      완료
                    </Btn>
                  </div>
                </CardBox>
              </Fragment>
            );
          })}
        </ListBox>

        <Title>done</Title>
        <hr />
        <ListBox>
          {test2.map((x, i) => {
            return (
              <Fragment key={x.id}>
                <CardBox>
                  <DetailBtn
                    onClick={() => {
                      const id = x.id;
                      navigate(`/detail/${id}`);
                    }}
                  >
                    상세보기
                  </DetailBtn>
                  <div>
                    <h3>{x.title}</h3>
                    <p>{x.body}</p>
                  </div>
                  <div>
                    <Btn
                      className="btn"
                      onClick={() => {
                        let 인덱스 = todoList.findIndex(
                          (element) => element.id === x.id
                        );
                        console.log(인덱스);
                        dispatch(deleteHandler(인덱스));
                      }}
                    >
                      삭제
                    </Btn>
                    <Btn
                      className="btn"
                      onClick={() => {
                        let 인덱스 = todoList.findIndex(
                          (element) => element.id === x.id
                        );
                        인덱스 = todoList[인덱스].id;
                        dispatch(doneHandler(인덱스));
                      }}
                    >
                      {" "}
                      취소
                    </Btn>
                  </div>
                </CardBox>
              </Fragment>
            );
          })}
        </ListBox>
      </Container>
    </>
  );
};

const ListBox = styled.div`
  display: flex;
  align-items: flex-start;

  margin-left: 15px;
`;
const Title = styled.h2``;
const Container = styled.div`
  display: flex;
  // align-items: flex-start;
  align-items: stretch;

  //margin: auto;
`;
const CardBox = styled.div`
  background-color: #c7c7ac;
  border-radius: 7px;
  border-style: solid;
  border-color: #555541;
  padding: 10px;
  max-width: 10rem;
  max-height: 30rem;
  margin: 5px;
`;
const Btn = styled.button`
  margin: 3px;
  background-color: #84af9c;
  &:hover {
    background-color: #fbcead;
  }
`;
const DetailBtn = styled.button``;

export default List;
