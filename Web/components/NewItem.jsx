"use client"
import { useEffect, useRef, useState } from 'react'
import Modal from '../components/Custom/Modal'

const NewItem = ({onSave, closeModal, isModalOpen, rowData}) => {

    const addMoreRef = useRef();

    const [newItem, setNewItem] = useState({
        isSeconds : false,
        name : '',
        quantity : 0
    })

    useEffect(() => {
        console.log(rowData)
        if(rowData)
            setNewItem(rowData)
        else 
            setNewItem({isSeconds : false,
            name : '',
            quantity : 0})
    }, [rowData])

    const handleSecondsChange = (e) => {
        setNewItem({
            ...newItem,
            isSeconds : e.target.checked
        })
    }

    const handleInputChange = (e) => {
        setNewItem({
            ...newItem,
            [e.target.name] : e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSave && onSave(newItem);
        if(addMoreRef.current.checked) {
            setNewItem({
                isSeconds : false,
                name : '',
                quantity : 0
            })
        }
        else{
            closeModal()
        }
    }

     return(
        <div className="App">
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-semibold border-b-2 p-3">Add Item</h2>
          <div className='modal-body mt-2 p-3'>
            <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label className="inline-flex items-center">
                        <input 
                            type="checkbox" 
                            checked={newItem.isSeconds}
                            className="form-checkbox h-5 w-5 text-blue-600  rounded focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
                            onChange={handleSecondsChange}
                        />
                        <span className="ml-2 text-gray-700 text-sm">Seconds</span>
                    </label>
                </div>
                <div className="mb-5">
                    <label htmlFor="itemname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Name</label>
                    <input 
                        type="text" 
                        id="itemname" 
                        name='name'
                        value={newItem?.name}
                        onChange={handleInputChange}
                        className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Item Name" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                    <input 
                        type="number" 
                        id="quantity" 
                        name='quantity'
                        value={newItem?.quantity}
                        onChange={handleInputChange}
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required 
                    />
                </div>
                <label className="inline-flex items-center mr-3">
                        <input 
                            type="checkbox" 
                            className="form-checkbox  h-5 w-5 text-blue-600  rounded focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
                            ref={addMoreRef}
                        />
                        <span className="ml-2 text-gray-700 text-sm">Add More</span>
                    </label>
                <button type="submit" className="text-white text-small bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                <button onClick={closeModal} className="text-white  text-small ml-1 bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-300 dark:hover:bg-gray-500 dark:focusring-gray-300">Cancel</button>
            </form>
          </div>
        </Modal>
      </div>
    )
}

export default NewItem;