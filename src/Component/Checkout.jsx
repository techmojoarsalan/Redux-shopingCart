import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function Checkout() {

    const [formValue, setFormValue] = useState({
        firstname: "",
        lastname: "",
        adderess: "",
        field: false,
    });
    const [errors, setErrors] = useState({});
    const { firstname, lastname, adderess, } = formValue
    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstname.length > 5 ) {
            setFormValue({
                field: true
            })

        }
        else {
            setErrors({
                firstname: "Please Enter First Name",
               

            })
        }
    }

    return (
        <>
            <h1 className='text-center'>Checkout Product</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" value={formValue.firstname} onChange={(e) => setFormValue({
                        firstname: e.target.value
                    })} />
                    <h6>{errors.firstname}</h6>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" value={formValue.lastname} onChange={(e) => setFormValue({
                        lastname: e.target.value
                    })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        value={formValue.adderess}
                        onChange={(e) => setFormValue({
                            adderess: e.target.value
                        })}
                        as="textarea"
                        placeholder="Address"
                        style={{ height: '100px' }}
                    />
                </Form.Group>
                <h6>{errors.adderess}</h6>
                <Button variant="primary" type="submit">
                    Place Order
                </Button>
            </Form>
            {formValue.field && <h4 className='text-center text-warning'> Congratulation Your Order is Placed Succesfully</h4>}
        </>
    );
}
