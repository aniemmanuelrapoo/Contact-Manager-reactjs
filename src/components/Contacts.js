import React, { Component } from 'react';
import { Consumer } from '../context';
import Contact from './Contact'

class Contacts extends Component {
    render() {
        return(
            <Consumer>
                {value => {
                    const { contacts } = value
                    return(
                        <>
                            {
                                contacts.map(contact => (
                                <Contact key={contact.id} contact={contact} />
                                ))
                            }
                        </>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts;
