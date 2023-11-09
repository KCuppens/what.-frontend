import SelectButton from "./SelectButton";

interface ProductProps {
    product : {
        id: number;
        name: string;
        description: string;
        stock: number;
        price: number;
        is_selected: boolean;
    }
}

const TableItem = ({ product }: ProductProps) => {
    return (
        <tr className="border-b">
            <td className="px-4 py-3">{product.id}</td>
            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{product.name}</th>
            <td className="px-4 py-3">{product.description}</td>
            <td className="px-4 py-3">{product.stock}</td>
            <td className="px-4 py-3">${product.price}</td>
            <td className="px-4 py-3">
                <SelectButton productId={product.id} is_selected={product.is_selected} />
            </td>
        </tr>
    );
};

export default TableItem;
