import PropTypes from 'prop-types';

import {Td, Th, TrBody, TransactionTable} from "./TransactionHistory.styled"

export const TransactionHistory =({items}) => {
    return(
    <TransactionTable>
    <thead>
        <tr>
             <Th>Type</Th>
               <Th>Amount</Th>
            <Th>Currency</Th>
        </tr>
    </thead>
    <tbody>
    {items.map(item => (
                <TrBody key={item.id}>
                    <Td>{item.type}</Td>
                    <Td>{item.amount}</Td>
                    <Td>{item.currency}</Td>
                </TrBody>))}
       
            </tbody>
    </TransactionTable>)}
  
  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };
    
