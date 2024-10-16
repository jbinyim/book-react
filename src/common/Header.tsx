import React from "react";
import styleCss from "./HeaderStyled";

const Header = () => {
  return (
    <div>
      <styleCss.SearchHeader>
        <styleCss.SearchBox>
          <styleCss.SearchInput type="text" />
          <styleCss.SearchLogo
            src="https://cdn-icons-png.flaticon.com/512/5540/5540369.png"
            alt="logo"
          />
          <styleCss.SearchBtn>검색</styleCss.SearchBtn>
        </styleCss.SearchBox>
      </styleCss.SearchHeader>
      <styleCss.GnbHeader>
        <styleCss.GnbBox>
          <styleCss.GnbLeft>
            <styleCss.GnbBtn>베스트셀러</styleCss.GnbBtn>
            <styleCss.GnbBtn>새로나온 책</styleCss.GnbBtn>
            <styleCss.GnbBtn>국내도서</styleCss.GnbBtn>
            <styleCss.GnbBtn>외국도서</styleCss.GnbBtn>
            <styleCss.GnbBtn>eBook</styleCss.GnbBtn>
            <styleCss.GnbBtn>DVD</styleCss.GnbBtn>
            <styleCss.GnbBtn>음반</styleCss.GnbBtn>
          </styleCss.GnbLeft>
          <styleCss.GnbRight>
            <styleCss.GnbBtn>로그인</styleCss.GnbBtn>
            <styleCss.GnbBtn>회원가입</styleCss.GnbBtn>
            <styleCss.GnbBtn>장바구니</styleCss.GnbBtn>
          </styleCss.GnbRight>
        </styleCss.GnbBox>
      </styleCss.GnbHeader>
    </div>
  );
};

export default Header;
