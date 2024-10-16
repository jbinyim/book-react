import styled from "styled-components";

const SearchHeader = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBox = styled.div`
  width: 506px;
  height: 50px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid ${({ theme }) => theme.colors.mainBlue};
  border-radius: 30px;
  outline: none;
  padding: 0 80px 0 60px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textBlue};
`;

const SearchLogo = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const SearchBtn = styled.button`
  width: 70px;
  height: 100%;
  border-radius: 0 30px 30px 0;
  border: none;
  background: ${({ theme }) => theme.colors.mainBlue};
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const GnbHeader = styled.div`
  margin-top: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainBlue};
`;

const GnbBox = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GnbLeft = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const GnbRight = styled(GnbLeft)`
  gap: 30px;
`;

const GnbBtn = styled.li`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textBlue};
`;

const styleCss = {
  SearchHeader,
  SearchBox,
  SearchInput,
  SearchLogo,
  SearchBtn,
  GnbHeader,
  GnbBox,
  GnbLeft,
  GnbRight,
  GnbBtn,
};

export default styleCss;
