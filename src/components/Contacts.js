import React, { Component } from 'react';
import { Consumer } from '../context';
import Contact from './Contact'

class Contacts extends Component {
    deleteContact = (id) => {
        const { contacts } = this.state;
        const newContacts = contacts.filter(contact => contact.id !== id);

        this.setState({
            contacts: newContacts
        })
    }
    render() {

        return(
            <Consumer>
                {value => {
                    const { contacts } = value
                    return(
                        <>
                            {
                                contacts.map(contact => (
                                <Contact key={contact.id} contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />
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
