import React, { Component } from 'react'

class Contact extends Component {
    
    render() {
        console.log('hhhhhhhhhhhh');
        const {name, phone, email}  = this.props.data;
      //  console.log(this.props.data)
        return (
            <div>
               <div>
                    <div>
                        <h4>{name}</h4>
                        <div>
                            <ul>
                                <li>{phone}</li>
                                <li>{email}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact