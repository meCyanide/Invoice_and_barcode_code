import React from "react"
export default function Table({list, total}) {
    return(
        <>
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
                        <td>{amount}</td> 
                    </tr>
                </tbody>
          </React.Fragment>
        ))}
      </table>
      <div>
        <h2 className=" flex items-end justify text-gray-800 text-2xl" font-bold>
          Total.{total.toLocaleString()}
        </h2>
      </div>
        </>
    )
}