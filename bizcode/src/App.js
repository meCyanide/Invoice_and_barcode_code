import {useState, useRef} from "react"
import ClientDetails from "./components/ClientDetails";
//import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Table from "./components/Table";
import Dates from "./components/Dates";
import Notes from "./components/Note";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setShowInvoice]= useState(true)
  const [name, setName] = useState("Manab Fabrics")
  const [address, setAddress] = useState("Sodpur,Kolkata")
 // const [email, setEmail] = useState("abcd.fgt@gamil.com")
 // const [phone, setPhone] = useState("+917003555144")
 // const [bankName, setBankName] = useState("SBI")
 // const [bankAccount, setBankAccount] = useState("xxxxxxxxx47")
 // const [website, setWebsite] = useState("www.acvfdfgh.com")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("Happy Shopping ! Thank You")
  const [description, setDescription] = useState("")
  const [quantiy, setQuantiy] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const [showBarcode, setShowBarcode]= useState(false)

  const componentRef = useRef()
  

  const handlePrint = () =>{
    window.print()
  }
  return (
    <>
     <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-2xl bg-white rounded shadow">
        {showInvoice ? ( 
          <>
          <ReactToPrint trigger={()=> <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border=blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Print/Download</button>}
      content={()=>componentRef.current}/>
            <div ref={componentRef} className="p-5">
          <Header handlePrint={handlePrint}/>
          <MainDetails name={name} address={address} />
          <ClientDetails clientName={clientName} clientAddress={clientAddress} />
          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/>
          <Table description={description} quantiy={quantiy} price={price} amount={amount} list={list} setList={setList} total={total} setTotal={setTotal}/>
          <Notes notes={notes}/>
         {/* <Footer name={name} address={address} website={website} email={email} phone={phone} bankAccount={bankAccount} bankName={bankName}/> */}
        </div>
        <button
           onClick={() => setShowInvoice(false)}
           className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border=blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
            Edit Information
          </button>
          <button
          onClick={() => setShowBarcode(false)}
          className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border=blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
           Bar Code Gen
           </button>
          </>
        ) : (
          <>
          {/* name, address, email, phone, bank name, bank acc no, website, client name, client address, invoice number, invoice date, due date, notes*/}
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <lable htmlFor="name">Enter your Name</lable>
                    <input type="text" name="text" id="name" placeholder="Enter your name" autoComplete="off" value={name} onChange={(e)=> setName(e.target.value)}/>
                  </div>
                  <div className="flex flex-col">
                    <lable htmlFor="address">Enter your Address</lable>
                    <input type="text" name="address" id="address" placeholder="Enter your address" autoComplete="off" value={address} onChange={(e)=> setAddress(e.target.value)}/>  
                  </div>
              </article>
            {/*   <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <lable htmlFor="email">Enter your email</lable>
                    <input type="text" name="email" id="email" placeholder="Enter your email" autoComplete="off" value={email} onChange={(e)=> setEmail(e.target.value)}/>  
                  </div>
                  <div className="flex flex-col">
                    <lable htmlFor="email">Enter your website</lable>
                    <input type="url" name="website" id="website" placeholder="Enter your website" autoComplete="off" value={website} onChange={(e)=> setWebsite(e.target.value)}/>
                  </div>
                  <div className="flex flex-col">
                    <lable htmlFor="phone">Enter your Phone No.</lable>
                    <input type="text" name="phone" id="phone" placeholder="Enter your Phone" autoComplete="off" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                  </div>
              </article>
             <article className="md:grid grid-cols-2 gap-10 md:mt-20">
                  <div className="flex flex-col">
                    <lable htmlFor="bankName">Enter your Bank Name</lable>
                    <input type="text" name="bankName" id="bankName" placeholder="Enter your Bank Name" autoComplete="off" value={bankName} onChange={(e)=> setBankName(e.target.value)}/>
                  </div>
                  <div className="flex flex-col">
                    <lable htmlFor="bankAccount">Enter your Bank Name</lable>
                    <input type="text" name="bankAccount" id="bankAccount" placeholder="Enter your bank Account" autoComplete="off" value={bankAccount} onChange={(e)=> setBankAccount(e.target.value)}/>
                  </div>
              </article> */}
              <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <lable htmlFor="clientName">Enter your client Name</lable>
                    <input type="text" name="clientName" id="clientName" placeholder="Enter your client Name" autoComplete="off" value={clientName} onChange={(e)=> setClientName(e.target.value)}/>
                  </div>
                  <div className="flex flex-col">
                    <lable htmlFor="clientAddress">Enter your client Address</lable>
                    <input type="text" name="clientAddress" id="clientAddress" placeholder="Enter your client Address" autoComplete="off" value={clientAddress} onChange={(e)=> setClientAddress(e.target.value)}/>
                  </div>
              </article>
              <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <lable htmlFor="invoiceNumber">invoice Number</lable>
                    <input type="text" name="invoiceNumber" id="invoiceNumber" placeholder="Invoice Number" autoComplete="off" value={invoiceNumber} onChange={(e)=> setInvoiceNumber(e.target.value)}/>
                  </div>
                  <div className="flex flex-col">
                    <lable htmlFor="invoiceDate">invoice Date</lable>
                    <input type="date" name="invoiceDate" id="invoiceDate" placeholder="Invoice Date" autoComplete="off" value={invoiceDate} onChange={(e)=> setInvoiceDate(e.target.value)}/>
                  </div>
                  <div className="flex flex-col">
                    <lable htmlFor="dueDate">dueDate</lable>
                    <input type="date" name="dueDate" id="dueDate" placeholder="DueDate" autoComplete="off" value={dueDate} onChange={(e)=> setDueDate(e.target.value)}/>
                  </div>
              </article>

              {/* This is table*/}
              <article>
                <TableForm 
                  description={description} 
                  setDescription={setDescription}
                  quantiy={quantiy} 
                  setQuantiy={setQuantiy}
                  price={price} 
                  setPrice={setPrice}
                  amount={amount} 
                  setAmount={setAmount}
                  list={list} 
                  setList={setList}
                  total={total} 
                  setTotal={setTotal}
                />
              </article>

              <lable htmlFor="notes">Additional Notes</lable>
              <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additional notes to the client" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
              <button 
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border=blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                  Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
