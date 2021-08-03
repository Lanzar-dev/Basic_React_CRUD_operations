import axios from 'axios';
import React, {useState} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import {useHistory} from 'react-router-dom';

export default function Create() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    let history = useHistory();

    const postData = () => {
        axios
            .post("https://610863abd73c6400170d392f.mockapi.io/fakeData", {firstName, lastName, checkbox})
            .then(() => {
                history.push('/read')
            });
    }

    return (
        <div>
            <Form className='create-form'>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={postData}>Submit</Button>
            </Form>
        </div>
    )
        
}