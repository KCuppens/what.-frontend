import { useState } from 'react';
import { useUserContext } from '../../contexts/UserContext';

type SelectButtonProps = {
    productId: number;
    is_selected: boolean;
};

const SelectButton = ({ productId, is_selected: isInitiallySelected  }: SelectButtonProps) => {
    const { user } = useUserContext();
    const userEmail = user?.email;
    const [isSelected, setIsSelected] = useState(isInitiallySelected);

    const handleSelect = () => {
        if (!userEmail) {
            console.error('User email is not available');
            return;
        }

        const payload = { user_email: userEmail, product_id: productId };
        const apiUrl = "https://what-backend-1849-stage.us.aldryn.io/api/v1/";

        fetch(apiUrl + 'carts/toggle-cart-item/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(response => {
            if (response.status === 201) {
                setIsSelected(true);
            } else if (response.status === 204) {
                setIsSelected(false);
            }
        })
        .catch(error => console.error('Error:', error));
    };

    const buttonStyles = isSelected 
        ? "flex items-center justify-center text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
        : "flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none";

    return (
        <button 
            type="button" 
            className={buttonStyles}
            onClick={handleSelect}
        >
            {isSelected ? 'Selected' : 'Select'}
        </button>
    );
};

export default SelectButton;
