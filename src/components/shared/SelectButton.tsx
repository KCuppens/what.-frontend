const SelectButton = ({ productId }) => {
    const handleSelect = () => {
        console.log(`Product ${productId} selected`);
    };

    return (
        <button 
            type="button" 
            className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
            onClick={handleSelect}
        >
            Select
        </button>
    );
};

export default SelectButton;
