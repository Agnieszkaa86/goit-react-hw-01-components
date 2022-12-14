import styled from "styled-components";

export const Transaction = styled.table`
  margin: 0 auto;
`;

export const Theader = styled.th`
  width: 200px;
  background-color: #87bdd8;
  color: white;
  text-transform: uppercase;
`;

export const Tablerow = styled.tr`
  text-transform: capitalize;
  text-align: center;
  &:nth-child(even) {
    background-color: #cfe0e8;
  }
`;