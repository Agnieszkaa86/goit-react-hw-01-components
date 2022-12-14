import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  margin: 5px 0;
  padding: 15px 25px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px 0 #adacac;
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  margin: 0 20px;
`;
export const Name = styled.p`
  font-weight: bold;
  font-size: 30px;
`;
