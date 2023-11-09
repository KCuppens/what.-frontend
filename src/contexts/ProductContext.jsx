import { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const apiUrl = import.meta.env.VITE_API_URL;
    useEffect(() => {
        fetch(apiUrl + 'products/products/')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <ProductContext.Provider value={{ products, isLoading }}>
            {children}
        </ProductContext.Provider>
    );
};
