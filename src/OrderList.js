import useFetch from "./useFetch";
import {useHistory} from "react-router-dom";

const OrderList = ({title}) => {
    
    const {data: orders, isPending, error} = useFetch("http://localhost:5000/orders")
    const history = useHistory();
    
    const handleDelete = (id) => {
        fetch("http://localhost:5000/orders/"+ id, {
            method: "DELETE"
        }).then(() => {
            window.location.reload();
        })
    }

    return (
        <div className="order-list">
            <h1>{title}</h1>
            <div className="order-list-container">
                <table>
                    <tr>
                        <th>Description</th>
                        <th>Quintity</th>
                        <th>Amount</th>
                        <th>Edit Order</th>
                    </tr>
                    {
                        orders && orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.title}</td>
                                <td>00</td>
                                <td>{order.price}$</td>
                                <td className="btn">
                                    <button onClick={() => handleDelete(order.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </table>

                <button className="orderBtn">Order</button>
            </div>
        </div>
    );
}
 
export default OrderList;


{/* <table>
                    <tr>
                        <th>Description</th>
                        <th>Quintity</th>
                        <th>Amount</th>
                        <th>Edit Order</th>
                    </tr>
                    {
                        orders && orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.title}</td>
                                <td>00</td>
                                <td>{order.price}$</td>
                                <td className="btn">
                                    <button onClick={() => handleDelete(order.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </table> */}