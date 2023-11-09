import SearchForm from '../form/SearchForm';
import { useProductContext } from '../../contexts/ProductContext';
import ProductItem from './TableItem';

const Table = () => {
  const { products, isLoading } = useProductContext();
  return (
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
      <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
        { isLoading && <div className="text-center">Loading...</div> }
        <SearchForm />
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3">
                  ID &#9650;&#9660;
                </th>
                <th scope="col" className="px-4 py-3">
                  Name &#9650;&#9660;
                </th>
                <th scope="col" className="px-4 py-3">
                  Description
                </th>
                <th scope="col" className="px-4 py-3">
                  Stock
                </th>
                <th scope="col" className="px-4 py-3">
                  Price
                </th>
                <th scope="col" className="px-4 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
