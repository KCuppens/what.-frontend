import SearchForm from '../form/SearchForm';
import { useProductContext } from '../../contexts/ProductContext';
import ProductItem from './TableItem';
import { useState } from 'react';

const Table = () => {
  const { products, isLoading, setOrder } = useProductContext();
  const initialSortField = localStorage.getItem('sortField') || '';
  const initialSortDirection = localStorage.getItem('sortDirection') || '';

  const [sortField, setSortField] = useState(initialSortField);
  const [sortDirection, setSortDirection] = useState(initialSortDirection);
  const handleSort = field => {
    const isAscending = sortField === field && sortDirection === 'asc';
    const newOrder = isAscending ? `-${field}` : field;
    const newDirection = isAscending ? 'desc' : 'asc';

    setOrder(newOrder);
    setSortField(field);
    setSortDirection(newDirection);

    localStorage.setItem('sortField', field);
    localStorage.setItem('sortDirection', newDirection);
  };
  const getArrowStyle = (field, direction) => {
    if (field !== sortField) {
      return 'text-gray-400'; // Default color for inactive fields
    }
    return sortDirection === direction ? 'text-blue-600' : 'text-gray-400';
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
      <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
        {isLoading && <div className="text-center">Loading...</div>}
        <SearchForm />
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3"
                  onClick={() => handleSort('id')}
                >
                  ID <span className={getArrowStyle('id', 'asc')}>&#9650;</span>
                  <span className={getArrowStyle('id', 'desc')}>&#9660;</span>
                </th>
                <th
                  scope="col"
                  className="px-4 py-3"
                  onClick={() => handleSort('name')}
                >
                  Name{' '}
                  <span className={getArrowStyle('name', 'asc')}>&#9650;</span>
                  <span className={getArrowStyle('name', 'desc')}>&#9660;</span>
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
