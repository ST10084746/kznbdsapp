import React, { useState } from 'react'
import logo from "../images/section18aImage.PNG"
import Cert from '../components/Cert'
import { useRef } from 'react';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


function Section18A() {
    const [showCert, setShowCert] = useState(false)
    const [name, setName] = useState("");
    const [address, setaddress] = useState("");
    const [natureOfPerson, setNatureOfPerson] = useState("");
    const [idType, setIdType] = useState("");
    const [country, setCountry] = useState("");
    const [regNo, setRegNo] = useState("");
    const [taxref, setTaxref] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [tradingName, setTradingName] = useState("");

    const [natureOfDonation, setNatureOfDonation] = useState("");
    const [date, setDate] = useState("");


	const handleGeneratePdf = () => {

    const elements = document.querySelector("#cert")
    html2canvas(elements, {scale: 2,
      
  })
    .then((canvas)=>{
      const img = canvas.toDataURL('image/jpeg')
      const pdf = new jsPDF("p", "pt", "a4")
      pdf.addImage(img,'JPEG',0,0,567,804)
      pdf.save('document')

    })


	};


  return (
    <div className='grid-container'>
      <Header/>
      <Sidebar/>
      <main className='table-home'>
      <>
      
      <div className='certificate'>
          {showCert?
          <div className='px-3'>
              <div id='cert'>
              <Cert name={name} address={address} natureOfPerson={natureOfPerson}
               idType={idType} country={country} regNo={regNo} taxRef={taxref}
                contact={contact} email={email}
                tradingName={tradingName} natureOfDonation={natureOfDonation} date={date}/>
              
              </div>
          <button className='btn btn-success my-2  btn-lg w-100' onClick={()=>setShowCert(false)}>Edit</button> 
          <button className='btn btn-success my-2  btn-lg w-100' onClick={()=>handleGeneratePdf()}>Download</button> 
  
          </div> : (
              <div>
              <form  id='certMain' onSubmit={()=>setShowCert(true)}>
                  <h2> Donor Details</h2>
                  <div className='mb-2'>
                      <label htmlFor='Name'>Name</label>
                      <input type='text'
                        placeholder='Name'
                        className='form-control'
                         value={name}
                        onChange={(e)=> setName(e.target.value)}
                        />
                  </div>
                  <div className='mb-2'>
                      <label htmlFor='Address'>Address</label>
                      <input type='text'
                        placeholder='Address'
                        className='form-control'
                         value={address}
                        onChange={(e)=> setaddress(e.target.value)}
                        />
                  </div>
                  <div className='mb-2'>
                      <label htmlFor='Nature Of Person'>Nature Of Person</label>
                      <input type='text'
                        placeholder='Nature Of Person'
                        className='form-control'
                         value={natureOfPerson}
                        onChange={(e)=> setNatureOfPerson(e.target.value)}
                        />
                  </div>
                  <div className='mb-2'>
                      <label htmlFor='Identification Type'>Title</label>
                      <input type='text'
                        placeholder='Identification Type'
                        className='form-control'
                         value={idType}
                        onChange={(e)=> setIdType(e.target.value)}
                        />
                  </div>
                  <div className='mb-2'>
                      <label htmlFor='Country'>Country Of Issue</label>
                      <input type='text'
                        placeholder='Country of Issue'
                        className='form-control'
                         value={country}
                        onChange={(e)=> setCountry(e.target.value)}
                        />
                  </div>
                  <div className='mb-2'>
                      <label htmlFor='Reg No'>Registration/ID Number</label>
                      <input type='text'
                        placeholder='ID/Passport or Reg No'
                        className='form-control'
                         value={regNo}
                        onChange={(e)=> setRegNo(e.target.value)}
                        />
                  </div>
                  <div className='mb-2'>
                      <label htmlFor='Tax Reference No'>Tax Reference No</label>
                      <input type='text'
                        placeholder='Tax Reference No'
                        className='form-control'
                         value={taxref}
                        onChange={(e)=> setTaxref(e.target.value)}
                        />
                  </div>
                  <div className='mb-2'>
                      <label htmlFor='Contact No'>Title</label>
                      <input type='text'
                        placeholder='Contact No'
                        className='form-control'
                         value={contact}
                        onChange={(e)=> setContact(e.target.value)}
                        />
                  </div>
                  <div className='mb-2'>
                      <label htmlFor='Email'>Email</label>
                      <input type='text'
                        placeholder='Email'
                        className='form-control'
                         value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                  </div>
                  <div className='mb-2'>
                      <label htmlFor='Trading Name'>Trading Name</label>
                      <input type='text'
                        placeholder='Trading Name'
                        className='form-control'
                         value={tradingName}
                        onChange={(e)=> setTradingName(e.target.value)}
                        />
                  </div>
                  <div className='mb-2'>
                      <label htmlFor='Nature Of Donations'>Nature Of Donation</label>
                      <input type='number'
                        placeholder='Nature Of Donations'
                        className='form-control'
                         value={natureOfDonation}
                        onChange={(e)=> setNatureOfDonation(e.target.value)}
                        />
                  </div>
                  <div className='mb-2'>
                      <label htmlFor='Date'>Date of Donation</label>
                      <input type='date'
                        placeholder='Date Of Donation'
                        className='form-control'
                         value={date}
                        onChange={(e)=> setDate(e.target.value)}
                        />
                  </div>
                  
                  <button className='btn btn-success my-2 btn-lg w-100' type='submit'>Preview</button>
                  
              </form>
          </div>
          )}
          
      </div>
      </>
        
      </main>
      
    </div>

    
   
  )
}

export default Section18A