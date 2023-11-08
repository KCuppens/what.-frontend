import React from 'react'
import SearchForm from '../form/SearchForm'

const Table = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <SearchForm />
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">ID &#9650;&#9660;</th>
                            <th scope="col" className="px-4 py-3">Name &#9650;&#9660;</th>
                            <th scope="col" className="px-4 py-3">Description</th>
                            <th scope="col" className="px-4 py-3">Stock</th>
                            <th scope="col" className="px-4 py-3">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b dark:border-gray-700">
                            <td className="px-4 py-3">1</td>
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td className="px-4 py-3">Short description</td>
                            <td className="px-4 py-3">15</td>
                            <td className="px-4 py-3">$2999</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Table