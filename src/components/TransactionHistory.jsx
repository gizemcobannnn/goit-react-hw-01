import PropTypes from 'prop-types';
import Sytles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions=[]}) => {
    return (
      <table className={Sytles.transaction}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", color:"white",background:"black", padding: "8px" }}>Type</th>
            <th style={{ border: "1px solid #ddd", color:"white",background:"black", padding: "8px" }}>Amount</th>
            <th style={{ border: "1px solid #ddd", color:"white",background:"black", padding: "8px" }}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({id, type, amount, currency }) => (
            <tr key={id}>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center",textTransform: "capitalize"}}>{type}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{amount}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };
  
  export default TransactionHistory;
  