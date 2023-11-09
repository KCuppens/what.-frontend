import SearchForm from '../form/SearchForm'

const Table = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
            <SearchForm />
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-4 py-3">ID &#9650;&#9660;</th>
                            <th scope="col" className="px-4 py-3">Name &#9650;&#9660;</th>
                            <th scope="col" className="px-4 py-3">Description</th>
                            <th scope="col" className="px-4 py-3">Stock</th>
                            <th scope="col" className="px-4 py-3">Price</th>
                            <th scope="col" className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="px-4 py-3">1</td>
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">Apple iMac 27&#34;</th>
                            <td className="px-4 py-3">Short description</td>
                            <td className="px-4 py-3">15</td>
                            <td className="px-4 py-3">$2999</td>
                            <td className="px-4 py-3">
                                <button type="button" className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-non">
                                    Select
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Table