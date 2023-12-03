import React, { useState } from 'react'
import logo from "../images/section18aImage.PNG"
import Cert from '../components/Cert'
import { useRef } from 'react';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'


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

    const reportTemplateRef = useRef(null);

	const handleGeneratePdf = () => {

		/*const doc = new jsPDF("p", "pt", "a4"
            //////'l','mm',[297, 210]
			//////format: 'a2',
			///////unit: 'px',
        );

		// Adding the fonts.
		////doc.setFont('Times', 'normal');
     ////   doc.setFontSize(4)

		doc.html(document.querySelector("#cert") /*reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
		});*/
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
    <>
    <main className='p-5 mx-auto bg-white rounded shadow m-5 d-flex'>
        {showCert?
        <div>
            <div id='cert' /*ref={reportTemplateRef}*/>
            <Cert name={name} address={address} natureOfPerson={natureOfPerson}
             idType={idType} country={country} regNo={regNo} taxRef={taxref}
              contact={contact} email={email}
              tradingName={tradingName} natureOfDonation={natureOfDonation} date={date}/>
            
        </div>
        <button className='btn btn-success my-2 btn-lg w-100' onClick={()=>setShowCert(false)}>Create</button> 
        <button className='btn btn-success my-2 btn-lg w-100' onClick={()=>handleGeneratePdf()}>Download</button> 

        </div> : (
            <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={()=>setShowCert(true)}>
                <h2> Donor Details</h2>
                <div className='mb-2'>
                    <label htmlFor='Name'>Title</label>
                    <input type='text'
                      placeholder='Name'
                      className='form-control'
                       value={name}
                      onChange={(e)=> setName(e.target.value)}
                      />
                </div>
                <div className='mb-2'>
                    <label htmlFor='Address'>Title</label>
                    <input type='text'
                      placeholder='Address'
                      className='form-control'
                       value={address}
                      onChange={(e)=> setaddress(e.target.value)}
                      />
                </div>
                <div className='mb-2'>
                    <label htmlFor='Nature Of Person'>Title</label>
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
                    <label htmlFor='Country'>Title</label>
                    <input type='text'
                      placeholder='Country of Issue'
                      className='form-control'
                       value={country}
                      onChange={(e)=> setCountry(e.target.value)}
                      />
                </div>
                <div className='mb-2'>
                    <label htmlFor='Reg No'>Title</label>
                    <input type='text'
                      placeholder='ID/Passport or Reg No'
                      className='form-control'
                       value={regNo}
                      onChange={(e)=> setRegNo(e.target.value)}
                      />
                </div>
                <div className='mb-2'>
                    <label htmlFor='Tax Reference No'>Title</label>
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
                    <label htmlFor='Email'>Title</label>
                    <input type='text'
                      placeholder='Email'
                      className='form-control'
                       value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                      />
                </div>
                <div className='mb-2'>
                    <label htmlFor='Trading Name'>Title</label>
                    <input type='text'
                      placeholder='Trading Name'
                      className='form-control'
                       value={tradingName}
                      onChange={(e)=> setTradingName(e.target.value)}
                      />
                </div>
                <div className='mb-2'>
                    <label htmlFor='Nature Of Donations'>Title</label>
                    <input type='number'
                      placeholder='Nature Of Donations'
                      className='form-control'
                       value={natureOfDonation}
                      onChange={(e)=> setNatureOfDonation(e.target.value)}
                      />
                </div>
                <div className='mb-2'>
                    <label htmlFor='Date'>Title</label>
                    <input type='date'
                      placeholder='Date Of Donation'
                      className='form-control'
                       value={date}
                      onChange={(e)=> setDate(e.target.value)}
                      />
                </div>
                
                <button className='btn btn-success my-2 btn-lg w-100' type='submit'>Create</button>
                
            </form>
        </div>
        )}
        
    </main>
    </>
   
  )
}

export default Section18A