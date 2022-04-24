import React from "react";
import UserItem from "./UserItem";
class UserList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <button className="btn btn-primary me-3 mb-3" onClick={(e)=>{
                var name= prompt("Podaj imie");
                if(name == null || name.length == 0){
                return;
                }
                var surname= prompt("Podaj nazwisko");
                if(surname == null || surname.length == 0){
                return;
                }
                var email= prompt("Podaj email");
                if(email == null || email.length == 0){
                return;
                }
                var phone= prompt("Podaj telefon");
                if(phone == null || phone.length == 0){
                return;
                }
                var document= prompt("Podaj dokument");
                if(document == null || document.length == 0){
                return;
                }
                window.adduser(
                    {
                        checked:false,
                        name:name,
                        surname:surname,
                        email:email,
                        phone:phone,
                        document:document,
                    },
                );
            }}>Dodaj nowy</button>

            <button className="btn btn-danger me-3 mb-3" onClick={(e)=>{
                window.deleteusers();
            }}>Usuń zaznaczone</button>
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th width="40"></th>
                        <th>Imie:</th>
                        <th>Nazwisko:</th>
                        <th>Email:</th>
                        <th>Telefon:</th>
                        <th>Dokument:</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map(user=>
                        <UserItem item={user}/>
                        )}
                </tbody>
                </table>
            </div>
        );
    }
}
export default UserList;