import { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const initialSearchQuery = localStorage.getItem('searchQuery') || '';
    const initialOrder = localStorage.getItem('order') || 'name';

    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
    const [order, setOrder] = useState(initialOrder);
    const [isLoading, setIsLoading] = useState(true);
    const apiUrl = import.meta.env.VITE_API_URL;
    useEffect(() => {
        localStorage.setItem('searchQuery', searchQuery);
        localStorage.setItem('order', order);

        const queryParams = new URLSearchParams();
        if (searchQuery) queryParams.append('search', searchQuery);
        if (order) queryParams.append('ordering', order);
        setIsLoading(true);
        const url = `${apiUrl}products/products/?${queryParams.toString()}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setIsLoading(false);
            });
    }, [searchQuery, order]);

    return (
        <ProductContext.Provider value={{ products, isLoading, setSearchQuery, setOrder }}>
            {children}
        </ProductContext.Provider>
    );
};
