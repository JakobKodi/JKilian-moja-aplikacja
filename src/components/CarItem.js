import React from "react";
class CarItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <tr className="Car-item">
                <td>
                <input type="checkbox" className="me-2" onChange={e =>{
                    window.checkedcar(this.props.item, e.target.checked);
                }}/>
                </td>
                <td className="me-3">{this.props.item.name}</td>
                <td className="me-3">{this.props.item.brand}</td>
                <td className="me-3">{this.props.item.color}</td>
                <td className="me-3">{this.props.item.year}</td>
                <td className="me-3">{this.props.item.registration}</td>
                <td>
                    <select value={this.props.item.user} onChange={e =>{
                    window.setUser(this.props.item, e.target.value);
                    console.log(e.target.value);
                    }}>
                        <option value="0">Nie przydzielono</option>
                        {this.props.users.map(user=>
                        <option value={user.email}>{user.name}</option>
                        )}
                    </select>
                </td>
            </tr>
        );
    }
}
export default CarItem;