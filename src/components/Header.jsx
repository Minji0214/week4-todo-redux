import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <div className="headerBox">
        <HdBox>
          <div>💘밍지의 투두리스트💗</div>

          <div>리액트 기초</div>
        </HdBox>
      </div>
    </>
  );
};

const HdBox = styled.div`
  display: flex;
  width: 98%; //!이거 어케바꿀지 생각해보기
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  background-color: hsl(25, 91%, 83%);
  color: rgb(32, 13, 3);
  font-weight: bold;
  padding: 10px;
`;

export default Header;
