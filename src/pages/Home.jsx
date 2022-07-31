import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import List from "../components/List";
import Form from "../components/Form";
import Layout from "../components/List";

const Home = () => {
  return (
    //todo 레이아웃 정리하기 
    <HomeBox>
      <Header></Header>
      <Form></Form>
      <List></List>
    </HomeBox>
  );
};

const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Home;
