import React, { useState, useEffect } from "react"
import {MdDeleteOutline} from "react-icons/md"
import {BiEditAlt} from "react-icons/bi"
import {v4 as uuidv4} from "uuid"

export default function TableForm({description, 
  setDescription, 
  quantiy, 
  setQuantiy, 
  price, 
  setPrice, 
  amount, 
  setAmount, 
  list, 
  setList,
  total,
  setTotal,
  }) {
    const[isEditing, setIsEditing] = useState(false)

    // Submit from function
    const handleSubmit = (e) => {e.preventDefault()
      if(!description||!quantiy||!price){
        alert("Please fill in all inputs")
      } else {
        const newItems = {id: uuidv4(), 
        description,
        quantiy,
        price,
        amount}
        setDescription("")
        setQuantiy("")
        setPrice("")
        setAmount("")
        setList([...list, newItems])
        setIsEditing(false)
      }
      }

      // calculate items amount function

    useEffect(
        () => {
            const calculatedAmount = (amount) => {
                setAmount(quantiy * price)
            }
            calculatedAmount(amount)
        },[amount, price, quantiy, setQuantiy]
    )
    // calulate totals
    useEffect(()=> {
    let rows = document.querySelectorAll(".amount")
    let sum = 0
    for(let i = 0; i < rows.length; i++){
      if (rows[i].className=="amount"){
        sum += isNaN(rows[i].innerHTML)? 0 : parseInt(rows[i].innerHTML)
        setTotal(sum)
      }
    }
    })
    // Edit function
      const editRow = (id) => {
        const editingRow = list.find((row) => row.id == id)
        setList(list.filter((row)=>row.id !== id))
        setIsEditing(true)
        setDescription(editingRow.description)
        setQuantiy(editingRow.quantiy)
        setPrice(editingRow.price)
      }
    // Delete function
        const deleteRow = (id)=>setList(list.filter((row)=>row.id !== id))
  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:mt-16">
            <lable htmlFor="description">Item description</lable>
            <input type="text" name="description" id="description" placeholder="Item description" autoComplete="off" value={description} onChange={(e)=> setDescription(e.target.value)}/>
      </div>

      <div className="md:grid grid-cols-3 gap-10">
      <div className="flex flex-col">
            <lable htmlFor="quantiy">Item quantiy</lable>
            <input type="text" name="quantiy" id="quantiy" placeholder="Item quantiy" autoComplete="off" value={quantiy} onChange={(e)=> setQuantiy(e.target.value)}/>
      </div>
      <div className="flex flex-col">
            <lable htmlFor="price">Item price</lable>
            <input type="text" name="price" id="price" placeholder="Item price" autoComplete="off" value={price} onChange={(e)=> setPrice(e.target.value)}/>
      </div>
      <div className="flex flex-col">
            <lable htmlFor="amount">Amount</lable>
            <p>{amount}</p>
      </div>
      </div>
      <button type="Submit" className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border=blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">{isEditing ? "Editing Item":"Add Items"}</button>
      </form>
      {/*Table Items*/}
        <table width="100%" className="md-10">
        <thead>
                    <tr className="bg-gray-100">
                        <td className="font-bold">Item Description</td>
                        <td className="font-bold">Quantiy</td>
                        <td className="font-bold">Price</td>
                        <td className="font-bold">Amount</td>
                    </tr>
                </thead>
        {list.map(({ id, description, quantiy, price, amount}) => (
          <React.Fragment key={id}>
                <tbody>
                    <tr>
                        <td>{description}</td>
                        <td>{quantiy}</td>
                        <td>{price}</td>
                        <td className="amount">{amount}</td>
                        <td><button onClick={()=> deleteRow(id)}><MdDeleteOutline/></button></td> 
                        <td><button onClick={()=> editRow(id)}><BiEditAlt/></button></td> 
                    </tr>
                </tbody>
          </React.Fragment>
        ))}
      </table>
      <div>
        <h2 className="flex items-end justify text-gray-800 text-2xl" font-bold>
          Total.{total.toLocaleString()}
        </h2>
      </div>
    </>
  )
}
