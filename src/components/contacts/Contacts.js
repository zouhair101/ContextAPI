import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../context'

export default class Contacts extends Component {

    render() {
        
        return (
            <Consumer>
                {value => {
                    <div>
                        {value.contacts.map( (contact) => (
                            <Contact key={contact.id} data={contact} />
                         // console.log(contact)
                        ))}
                    </div>
                }}
            </Consumer>
        )
    }
}
