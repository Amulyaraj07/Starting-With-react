import { useState } from "react";

export default function Addform(){
    const[inputs,setvar]=useState({});
    const onhandle=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setvar(values=>({...values,[name]:value}))
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        alert(JSON.stringify(inputs));
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <label>Name: </label> <input type="text" name="username" value={inputs.username||""}  onChange={onhandle}></input> <br /> 
                <label>Age: </label> <input type="text" name="age" value={inputs.age||""} onChange={onhandle}></input><br />
                <label> Discuss about yourself: </label>
                <textarea name="describe" value={inputs.describe||""} onChange={onhandle}></textarea><br />
                <label>Submit</label>
                <select name="cars" value={inputs.cars||""} onChange={onhandle}>
                    <option value="Ford">Ford</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Ford">mahindra</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Tata">Tata</option>
                </select>
                <input type="submit"></input>
            </form>
        
        </>
    );
}