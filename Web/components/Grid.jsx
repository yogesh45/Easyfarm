import Image from "next/image";

const Grid = ({data, onEdit, onDelete}) => {
    return(
        <div  className="flex justify-center w-full">
            {
                data?.length > 0 ?
                <table className="text-left table-auto w-full">
                <thead>
                    <tr>
                        <th className="p-4 border-b border-slate-200 bg-slate-50">
                            <p className="text-sm font-semibold font-normal leading-none text-slate-900">
                                S.No
                            </p>
                        </th>
                        <th className="p-4 border-b border-slate-200 bg-slate-50">
                            <p className="text-sm font-semibold font-normal leading-none text-slate-900">
                                Item Name
                            </p>
                        </th>
                        <th className="p-4 border-b border-slate-200 bg-slate-50">
                            <p className="text-sm font-semibold font-normal leading-none text-slate-900">
                                Quantity
                            </p>
                        </th>
                        <th className="p-4 border-b border-slate-200 bg-slate-50">
                            <p className="text-sm font-semibold font-normal leading-none text-slate-900">
                                Edit
                            </p>
                        </th>
                        <th className="p-4 border-b border-slate-200 bg-slate-50">
                            <p className="text-sm font-semibold font-normal leading-none text-slate-900">
                                Delete
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.length > 0 && data?.map((d, index) => {
                            return(
                                <tr className="hover:bg-slate-50 border-b border-slate-200" key={d.name+index}>
                                    <td className="p-4 py-5">
                                        <p className="block font-semibold text-sm text-slate-800">{index+1}</p>
                                    </td>
                                    <td className="p-4 py-5">
                                        <p className="text-sm font-semibold  text-slate-800">{d.name}</p>
                                    </td>
                                    <td className="p-4 py-5">
                                        <p className="text-sm font-semibold  text-slate-800">{d.quantity}</p>
                                    </td>
                                    <td className="p-4 py-5">
                                        <Image 
                                            src={'/assets/Edit-icon.svg'}  
                                            width={20}
                                            height={20}
                                            onClick={() => onEdit(index)}
                                            alt="Edit icon"
                                        />
                                    </td>
                                    <td className="p-4 py-5">
                                        <Image 
                                            src={'/assets/Delete-icon.svg'}   
                                            width={20}
                                            height={20}   
                                            onClick={() => onDelete(index)}
                                            alt="Delete icon"
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table> : <div className="grow">
                Kindly Add Items
            </div>
            }
            
        </div>
    )
}

export default Grid;