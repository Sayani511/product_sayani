import { red } from "@mui/material/colors";
import React from "react";
import "./style.css"


const Map=()=>{
    const std=[
        {id:101,name:"Mobile", price:20000, address:"Kolkata",date:"06/04/2025"},
        {id:2,name:"Smart Watch", price:3000, address:"Delhi",date:"07/04/2025"},
        {id:1,name:"Laptop", price:60000, address:"Mumbai",date:"09/04/2025"},
        {id:1,name:"Tablet", price:15000, address:"Murshidabad",date:"11/04/2025"},

    ]

    return(
        <div className="container">
        <h1>PRODUCT DETAILS</h1>
        <table border='1'>
            <thead className="heading">
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>ADDRESS</th>
                <th>DATE</th>
            </tr>
            </thead>
            <tbody>
                {std.map(std=>(
                    <tr key={std.id}>
                        <td>{std.id}</td>
                        <td>{std.name}</td>
                        <td>{std.price}</td>
                        <td>{std.address}</td>
                        <td>{std.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}
export default Map