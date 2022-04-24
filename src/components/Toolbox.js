import React from "react";
class Toolbox extends React.Component{
    render(){
        return(
        <div>
            <button className="btn btn-primary" onClick={(e)=>{
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
                alert(name + " " + brand + " " + color + " " + year + " " + registration);
            }}>Dodaj nowy</button>

            <button className="btn btn-danger">Usuń zaznaczone</button>
        </div>
        );
    }
}
export default Toolbox;