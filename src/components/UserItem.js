import React from "react";
class UserItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <tr className="User-item">
                <td>
                <input type="checkbox" className="me-2" onChange={e =>{
                    window.checked(this.props.item, e.target.checked);
                }}/>
                </td>
                <td className="me-3">{this.props.item.name}</td>
                <td className="me-3">{this.props.item.surname}</td>
                <td className="me-3">{this.props.item.email}</td>
                <td className="me-3">{this.props.item.phone}</td>
                <td className="me-3">{this.props.item.document}</td>
            </tr>
        );
    }
}
export default UserItem;