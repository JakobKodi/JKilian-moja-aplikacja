import React from "react";
import CarItem from "./CarItem";
class CarList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <button className="btn btn-primary me-3 mb-3" onClick={(e)=>{
                var name= prompt("Podaj nazwe");
                if(name == null || name.length == 0){
                return;
                }
                var brand= prompt("Podaj marke");
                if(brand == null || brand.length == 0){
                return;
                }
                var color= prompt("Podaj kolor");
                if(color == null || color.length == 0){
                return;
                }
                var year= prompt("Podaj rok");
                if(year == null || year.length == 0){
                return;
                }
                var registration= prompt("Podaj rok");
                if(registration == null || registration.length == 0){
                return;
                }
                window.addcar(
                    {
                        checked:false,
                        name:name,
                        brand:brand,
                        color:color,
                        year:year,
                        registration:registration,
                        user:""
                    },
                );
            }}>Dodaj nowy</button>

            <button className="btn btn-danger me-3 mb-3" onClick={(e)=>{
                window.deletecars();
            }}>Usuń zaznaczone</button>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th width="40"></th>
                        <th>Nazwa:</th>
                        <th>Marka:</th>
                        <th>Kolor auta:</th>
                        <th>Rok produkcji:</th>
                        <th>Rejestracja:</th>
                        <th>Użytkownik</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.cars.map(car=>
                        <CarItem item={car} users={this.props.users}/>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default CarList;