import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
        
    state = {
        contacts: [
            {  id: 1, name: 'Name 1', email: 'email1@gmail.com',phone: '0650303311'},
            {  id: 2, name: 'Name 2',   email: 'email2@gmail.com',      phone: '0650303312'},
            {  id: 3, name: 'Name 3',   email: 'email3@gmail.com',      phone: '0650303313'},
          ]
    }
    
    render() {
        return (
            <Context.Provider value={this.state}>
                    {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;