import "../Style/Layout.css";
import { useState } from "react";
const currentDate = Date();
const tomDate = Date() + 1;

const list = {
  doctors: [
    { id: "d01", name: "Doctor 1", dept: "Department 1", tel: "9123456791" },
    { id: "d02", name: "Doctor 2", dept: "Department 2", tel: "9123456792" },
    { id: "d03", name: "Doctor 3", dept: "Department 1", tel: "9123456793" },
  ],
  patients: [
    { id: "p01", name: "Patient 1", tel: "8123456791" },
    { id: "p02", name: "Patient 2", tel: "8123456792" },
    { id: "p03", name: "Patient 3", tel: "8123456793" },
  ],
  appointments: [
    { id: "a011", patId: "p01", docId: "d01", date: currentDate, time: "1 PM" },
    { id: "a012", patId: "p01", docId: "d02", date: currentDate, time: "2 PM" },
    { id: "a021", patId: "p02", docId: "d01", date: currentDate, time: "1 PM" },
    { id: "a022", patId: "p02", docId: "d02", date: currentDate, time: "2 PM" },
  ],
};
export function Doctor(props) {
  const [inputs, setInputs] = useState(list.doctors);
  const [newValues, setNewValues] = useState({});
  const handleSubmit = (event) =>{
    event.preventDefault();

  }

  const handleRemove =(id, event)=> {
    event.preventDefault();
    const newList = inputs.filter ( ele => ele.id!==id)
    // console.log("New doctor list", newList)
    console.log("old  list", list)
    list.doctors = newList
    console.log("New doctor list after assignnment", list)
    setInputs(newList)

    
  }
  const handleUpdate =(id, event)=> {
    event.preventDefault();
    const newList = inputs.filter ( ele => ele.id!==id)
    console.log("old  list", list)
    list.doctors = newList
    let updatedValues= setNewValues[id]
    updatedValues["id"]= id
    console.log("Updated doctor us ", updatedValues)
    
    list.doctors.push(updatedValues )
    setInputs(list.doctors)
  }

  const handleChange =(id, event)=> {
    event.preventDefault();
    const newList = newValues;
    const {name, value} = event.target;

    newList[id]= { [name]: value}
    setNewValues(newList)
    console.log(newValues)
  }

  return (
    <section>
      <h2> Doctor Page</h2>

      <form onSubmit={() => handleSubmit()} id="formDoctor">
        <table id="tableDoctor">
          <thead>
            <tr>
                <th>Doctor Name</th>
                <th>Department</th>
                <th>Contact Number</th>
                <th>Action</th>
             
            </tr>
          </thead>
          <tbody>
            {   inputs.map( ele => 
                <tr key ={ele.id} id={ele.id} >
                   <td> <input name="name" value=  {  JSON.stringify(newValues) | ele.name} onChange={ (event) => handleChange(ele.id, event)} /> </td>
                    <td> <input name="dept" value={ele.dept} onChange={ (event) => handleChange(ele.id, event)} /> </td>
                    <td><input name="tel" value={ele.tel} onChange={ (event) => handleChange(ele.id, event)} /> </td>
                    <td> <button onClick={ (event) => handleUpdate (ele.id, event)}>Update</button>  <button onClick={ (event) => handleRemove(ele.id, event)}>Remove</button></td>
                </tr>
            )}
          </tbody>
        </table>
      </form>
      <p>{JSON.stringify(newValues)}</p>
    </section>
  );
}
