import PropTypes from 'prop-types';
import {Transaction, Theader, Tablerow} from '../TransactionHistory/TransactionHistory.styled';


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