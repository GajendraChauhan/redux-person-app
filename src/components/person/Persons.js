import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPerson } from '../../store';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom'

const Persons = () => {
    let history = useHistory();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const addNewPerson = (e) => {
        e.preventDefault();
        // console.log(fullName, phone);
        const newPerson = {
            id: shortid.generate(),
            fullName: fullName,
            email: email,
            phone: phone,
            city: city,
            state: state
        };
        dispatch(addPerson(newPerson));
        history.push('/display');
    };

    const dispatch = useDispatch();

    return (
        <div>
            <h1>Add a person</h1>
            <form onSubmit={(e) => addNewPerson(e)}>
                <React.Fragment>
                    <input type="text" placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </React.Fragment>
                <br/><br/>
                <React.Fragment>
                    <input type="text" placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </React.Fragment>
                <br/><br/>
                <React.Fragment>
                    <input type="text" placeholder="Enter your contact number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </React.Fragment>
                <br/><br/>
                <React.Fragment>
                    <input type="text" placeholder="Enter your City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </React.Fragment>
                <br/><br/>
                <React.Fragment>
                    <input type="text" placeholder="Enter your State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </React.Fragment>
                <br/><br/>
                <React.Fragment>
                    <button type="submit">Add Person</button>
                </React.Fragment>
            </form>
        </div>
    )
}

export default Persons
