"use client"

import Grid from '../components/Grid';
import NewItem from '../components/NewItem';
import { useState } from 'react';
import Image from "next/image"

export default function Home() {

  const [data, setData] = useState([]);

  const [selectedIndex, setSelectedIndex] = useState(-1)
  
  const [isModalOpen, setIsModalOpen] = useState(false);  

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedIndex(-1)
  }

  const addNewItem = (newData) => {
    if(selectedIndex > 0){
      let tempData = [...data];
      tempData[index] = newData;
      setData(tempData)
    }
    else{
      if(newData.name && newData.quantity)
        setData([
          ...data,
          newData
        ])
    }
    
    setSelectedIndex(-1);
  }

  const handleEditClick = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true)
  }

  const handleDeleteClick = (index) => {
    const tempData = [...data]
    tempData.splice(index, 1)
    setData(tempData)
  }


  return (
    <div className='mt-4 w-1/2 m-auto'>
      <NewItem
        isModalOpen={isModalOpen}
        onSave={addNewItem}
        closeModal={closeModal}
        rowData={data[selectedIndex] || {}}
      />
      {
        data?.length > 0 ? <>
            <button
                onClick={openModal}
                className="text-white flex ml-auto mb-2 text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                
              >
                Add Item
          </button>
          <Grid 
            data={data}
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
          <button
                className="text-white flex m-auto mt-2 text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                
              >
               Calculate
          </button>
        </> : 
        <div className="m-auto" >
          <Image
              src="/assets/No_data.jpg"
              alt="No Data Image"
              className="object-contain m-auto"
              width={300}
              height={300}
          />
          <button
                onClick={openModal}
                className="text-white flex m-auto text-center bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                
              >
                Add Item
          </button>
      </div>
      }
      
      
    </div>
  );
}
