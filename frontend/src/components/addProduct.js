import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateEvent from '../pages/CreateEvent';

function AddProduct(props) {
  const [show, setShow] = useState(false);
  const[image, setImage] = useState('')
  const[title, setTitle] = useState('')
  const[description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function convertToBase64(e){
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = ()=>{
        console.log(reader.result);
        setImage(reader.result);
    }
    reader.onerror = error=>{
        console.log('Error', error);
        alert("Failed to Upload Image")
    }
}

  return (
    <>
    
      <button className='btn btn-success' onClick={handleShow}> Add+</button>
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form id='addProduct' onSubmit={(e)=>{
            e.preventDefault();
            handleClose()
            props.CreateProduct(title, image, description, price)

        }
            
        }>
                <div className='mb-2'>
                    <label htmlFor=''>Title</label>
                    <input type='text'
                      placeholder='Title'
                      className='form-control'
                       value={title}
                      onChange={(e)=> setTitle(e.target.value)}
                      pattern=".{3,}"
                      title="Post title should have three or more characters"/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Description</label>
                    <input
                     type='text'
                     placeholder='Description'
                      className='form-control'
                     onChange={(e)=> setDescription(e.target.value)}
                     value={description}
                     pattern=".{1,}"
                      title="Post content should have ten or more characters"/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Price</label>
                    <input
                     type='text'
                     placeholder='Price'
                      className='form-control'
                     onChange={(e)=> setPrice(e.target.value)}
                     value={price}
                     pattern=".{1,}"
                      title="Post content should have ten or more characters"/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Image</label>
                    <input
                        accept='image/*'
                        type='file'
                        className='form-control'
                        onChange={convertToBase64}
                        />
                </div>
                
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className='btn btn-success my-2' form='addProduct'>Add</button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduct;