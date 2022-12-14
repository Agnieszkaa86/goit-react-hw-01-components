import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  margin: 20px auto;
  width: 350px;
  justify-content: center;
  border-radius: 7px;
  box-shadow: 0 0 6px 0 #adacac;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;np
  padding: 34px 8px;
`;
export const Avatar = styled.img`
  border-radius: 100%;
  width: 120px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  margin-bottom: 12px;
  margin-top: 24px;
`;
export const Tag = styled.p`
  color: #888888;
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
`;
export const Location = styled.p`
  color: #888888;
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
`;
export const List = styled.ul`
  border-top: 1px solid #e4e9f0;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  background-color: rgb(226, 226, 226);
  flex-basis: calc(100% / 3);
  padding: 20px 5px;
  text-align: center;
  &:not(:last-child) {
    border-right: 1px solid #a2b9bc;
  }
`;
export const Label = styled.span`
  color: #768696;
  display: block;
  font-size: 14px;
  padding-bottom: 2px;
`;
export const Quantity = styled.span`
  font-weight: bold;
  font-size: 17px;
`;