import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddSign(props) {
  const [show, setShow] = useState(false);
  const[image, setImage] = useState('')
  const[title, setTitle] = useState('')

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
          <Modal.Title>Add Sign</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form id='addSign' onSubmit={(e)=>{
            e.preventDefault();
            handleClose()
            props.CreateSign(title, image)

        }
            
        }>
                <div className='mb-2'>
                    <label htmlFor=''>Title</label>
                    <input type='text'
                      placeholder='Title'
                      className='form-control'
                       value={title}
                      onChange={(e)=> setTitle(e.target.value)}
                      pattern=".{1,}"
                      title="Post title should have one or more characters"/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Image</label>
                    <input
                        required
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
          <button className='btn btn-success my-2' form='addSign'>Add</button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddSign;