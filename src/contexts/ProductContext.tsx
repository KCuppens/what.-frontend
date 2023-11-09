import { createContext, useContext, useState, useEffect } from 'react';

type Product = {
    id: number;
    name: string;
    description: string;
    stock: number;
    price: number;
    is_selected: boolean;
};

interface ProductContextType {
    products: Product[];
    isLoading: boolean;
    setSearchQuery: (query: string) => void;
    setOrder: (order: string) => void;
}

const defaultContext: ProductContextType = {
    products: [],
    isLoading: false,
    setOrder: () => {},
    setSearchQuery: () => {},
};

const ProductContext = createContext<ProductContextType>(defaultContext);

interface ProductProviderProps {
    children: React.ReactNode;
}

export const useProductContext = (): ProductContextType => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
    const headers = new Headers();
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    if (user && user.email) {
        headers.append('X-User-Email', user.email);
    }
    const initialSearchQuery = localStorage.getItem('searchQuery') || '';
    const initialOrder = localStorage.getItem('order') || 'name';

    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
    const [order, setOrder] = useState(initialOrder);
    const [isLoading, setIsLoading] = useState(true);
    const apiUrl = "https://what-backend-1849-stage.us.aldryn.io/api/v1/";
    useEffect(() => {
        localStorage.setItem('searchQuery', searchQuery);
        localStorage.setItem('order', order);

        const queryParams = new URLSearchParams();
        if (searchQuery) queryParams.append('search', searchQuery);
        if (order) queryParams.append('ordering', order);
        setIsLoading(true);
        const url = `${apiUrl}products/products/?${queryParams.toString()}`;
        fetch(url, { headers })
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
