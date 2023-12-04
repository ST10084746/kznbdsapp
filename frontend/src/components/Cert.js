import React from 'react'
import logo from '../images/section18aImage.PNG'

export default function Cert({name, address, natureOfPerson, idType, country,
     regNo, taxRef, contact, email, tradingName, natureOfDonation, date}) {
  return (
    <div id='certMain'>
        <header className='d-flex flex-row align-items-start
         justify-content-between mb-2'>
            
            <div>
                <img src={logo} alt='logo'/>
            </div>
            <div>
                <ul className='d-flex align-items-start flex-column list-unstyled' >
                    <li><strong>HEAD OFFICE:</strong> 23 Ismail C. Meer Street, Durban,</li>
                    <li>4001 /P.O BOX 1109, 4000</li>
                    <li><strong>NPO:</strong> 002-178; <strong>PBO:</strong> 130002948</li>
                    <li><strong>INCOME TAX REF:</strong> 9065614159 Member of SA</li>
                    <li className='mb-2'>National council for the blind “DEAFSA”</li>
                    
                    <li><strong>EMAIL:</strong> secretary@bdskzn.org.za</li>
                    <li><strong>WEBSITE:</strong> www.bdskzn.org.za</li>
                    <li><strong>CONTACT NO:</strong>031 309 4991(tel) /031 309 3048</li>
                    <li>(fax)</li>
                </ul>
            </div>
        </header>
        <section>
            <p className='mb-0'>DONATION RECEIPT:</p>
            <p className='mt-0'>Issued under section 18A of the Income tax Act 58 of 1962. The donation received below will be
used exclusively for the objects of KZN BLIND &DEAF SOCIETY in carrying out public benefits activities approve under section 18A</p>
            
        </section>

        <div className='d-flex'>
            <div className='d-flex border border-dark flex-grow-1 px-1' >
                <p className='p-0'>RECEIPT NUMBER</p>     
            </div>
            
            <div className='border border-dark ms-1 px-1'>
                KZNBDS0001
            </div>                
        </div>
        <div className='d-flex align-items-center border border-dark my-1 px-1'>
             DONOR NAME: {name}               
        </div>
        <div className='d-flex my-1'>
            <div className='d-flex border border-dark  me-1 px-1' style={{width:"180px"}} >  
                ADDRESS OF DONOR:
            </div>
            <div className='border border-dark flex-grow-1  px-1'>
                {address}        
            </div>
        </div>
        <div className='d-flex my-1 '>
            <div className='d-flex border border-dark  me-1 px-1' style={{width:"180px"}} >
                NATURE OF DONOR
            </div>
            <div className='border border-dark flex-grow-1  px-1'>
                {natureOfPerson}        
            </div>
        </div>
        <div className='d-flex my-1 '>
            <div className='d-flex border border-dark  me-1 px-1' style={{width:"180px"}} >
                IDENTIFICATION TYPE:
            </div>
            <div className='border border-dark flex-grow-1  px-1'>
                {idType}        
            </div>
        </div>
        <div className='d-flex my-1 '>
            <div className='d-flex border border-dark  me-1 px-1' style={{width:"180px"}} >
                COUNTRY OF ISSUE:
            </div>
            <div className='border border-dark flex-grow-1  px-1'>
                {country}         
            </div>
        </div>
        <div className='d-flex my-1 '>
            <div className='d-flex border border-dark  me-1 px-1' style={{width:"180px"}} >
            ID/PASSPORT NO OR REG NO:
            </div>
            <div className='border border-dark flex-grow-1  px-1'>
                {regNo}        
            </div>
        </div>
        <div className='d-flex my-1 '>
            <div className='d-flex border border-dark  me-1 px-1' style={{width:"180px"}} >
                TAX REFERENCE NO:
            </div>
            <div className='border border-dark flex-grow-1  px-1'>
                {taxRef}        
            </div>
        </div>
        <div className='d-flex my-1 '>
            <div className='d-flex border border-dark  me-1 px-1' style={{width:"180px"}} >
                CONTACT MO:
            </div>
            <div className='border border-dark flex-grow-1  px-1'>
                {contact}         
            </div>
        </div>
        <div className='d-flex my-1 '>
            <div className='d-flex border border-dark  me-1 px-1' style={{width:"180px"}} >
                EMAIL:
            </div>
            <div className='border border-dark flex-grow-1  px-1'>
                {email}         
            </div>
        </div>
        <div className='d-flex my-1 '>
            <div className='d-flex border border-dark  me-1 px-1' style={{width:"180px"}} >
                TRADING NAME:
            </div>
            <div className='border border-dark flex-grow-1  px-1'>
                {tradingName}        
            </div>
        </div>
        <div className='d-flex my-1 '>
            <div className='d-flex border border-dark  me-1 px-1' style={{width:"180px"}} >
                NATURE OF DONATIONS:
            </div>
            <div className='border border-dark flex-grow-1  px-1'>
                R{natureOfDonation}        
            </div>
        </div>
        <div className='d-flex my-1 '>
            <div className='d-flex border border-dark  me-1 px-1' style={{width:"180px"}} >
                DATE OF DONATION:
            </div>
            <div className='border border-dark flex-grow-1  px-1'>
                {date}        
            </div>
        </div>
        <section>
            <p className='mt-3'>I confirm that the society is registered public benefits organisation in terms of Section 18A(1) (a)
of the income tax act ,1962 and that the donation has been or will be used exclusively for the
objectives of the society.</p>

            
        </section>
        <div className='d-flex my-1 '>
            <div className='d-flex   me-1 px-1' style={{width:"180px"}} >
                DATE :      
            </div>
            <div className='flex-grow-1  px-1'>
            KZN BLIND & DEAF SOCIETY________________        
            </div>
        </div>
        <div className='d-flex my-1 flex-row justify-content-between'>
            <div className='d-flex   me-1 px-1' style={{width:"180px"}} >
                      
            </div>
            <div className='flex-grow-1  px-1 ' >
            SIGNATURE____________________         
            </div>
        </div>

    
    </div>
  )
}
