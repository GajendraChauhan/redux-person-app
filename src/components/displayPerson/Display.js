import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePerson } from '../../store';

const Display = () => {
    const persons = useSelector(state => state.persons);
    // console.log(persons);
    const dispatch = useDispatch();
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {
                    persons.map(person => {
                        const {id, fullName, email, phone, city, state} = person;
                        // console.log(person);
                        return <tr key={id}>
                            <td>{fullName}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td>{city}</td>
                            <td>{state}</td>
                            <td><button onClick={(e) => dispatch(deletePerson(id))}>Delete Person</button></td>
                        </tr>;
                    })
                }
            </tbody>
        </table>
    )
}

export default Display
