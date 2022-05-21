import styles from "../styles/TabelaProdutos.module.css";
import product from "../../data/Produto";
function TabelaProdutos(props) {
    function getLine() {
        return product.map((product, i) => {
            return (
                <tr key={product.id} className={i % 2 === 0 ? styles.cel : ""}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>R$ {product.price}</td>
                </tr>
            );
        });
    }
    return (
        <div>
            <table className={styles.table}>
                <thead className={styles.base}>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{getLine()}</tbody>
            </table>
        </div>
    );
}

export default TabelaProdutos;
