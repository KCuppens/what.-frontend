import SelectButton from "./SelectButton";

const ProductItem = ({ product }) => {
    return (
        <tr className="border-b">
            <td className="px-4 py-3">{product.id}</td>
            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{product.name}</th>
            <td className="px-4 py-3">{product.description}</td>
            <td className="px-4 py-3">{product.stock}</td>
            <td className="px-4 py-3">${product.price}</td>
            <td className="px-4 py-3">
                <SelectButton productId={product.id} />
            </td>
        </tr>
    );
};

export default ProductItem;
