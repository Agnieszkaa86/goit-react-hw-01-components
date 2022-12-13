import PropTypes from 'prop-types';
import styled from 'styled-components';

const Transaction = styled.table`
  margin: 0 auto;
`;

const Theader = styled.th`
  width: 200px;
  background-color: #87bdd8;
  color: white;
  text-transform: uppercase;
`;

const Tablerow = styled.tr`
  text-transform: capitalize;
  text-align: center;
  &:nth-child(even) {
    background-color: #cfe0e8;
  }
`;
const TransactionHistory = ({ items }) => {
    return (
        <Transaction>
            <thead>
                <tr>
                    <Theader>Type</Theader>
                    <Theader>Amount</Theader>
                    <Theader>Currency</Theader>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <Tablerow key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </Tablerow>
     
                ))}
            </tbody>
        </Transaction>
    );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory; 