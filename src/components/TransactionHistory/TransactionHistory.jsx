import PropTypes from "prop-types";
import { TransitionTable, Thead, TrString } from "./TransactionHistory.styled";

export const TransactionHistory = ({ transactions }) => {
    return (
        <TransitionTable>
            <Thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </Thead>

            <tbody>
            {transactions.map(({ id, type, amount, currency }) =>
            (
                 <TrString key={id}>
                     <td>{type}</td>
                     <td>{amount}</td>
                     <td>{currency}</td>
                 </TrString>
            ))}
            </tbody>
        </TransitionTable>
    )
};

TransactionHistory.protoType = {
    transactions: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })
};