import { useState } from "react"
import "../Style/Section.css"

const listSubMenu = ["Staffs", "Doctors"]

const listStaff = [{ id: "s1", name: "Abhay", tel: "9123456781", active: true }, { id: "s2", name: "Vibhay", tel: "9123456782", active: true }, { id: "s3", name: "Amita", tel: "9123456783", active: false }]

export default function SystemAdmin(props) {

    const [staffs, setStaffs] = useState(listStaff);

    const [searchCriteria, setSearchCriteria] = useState("")
    const [selectedStaff, setSelectedStaff] =useState({})


    const handleReset =(event) =>{
        setStaffs(listStaff)
    }

    const handleOnChangeSearchCriteria = ( event) => {
        setSearchCriteria(event.target.value)
    }

    const handleFilter =(event) =>{
       const newValues =staffs.filter(function(staff  ){  if(staff.name.includes( searchCriteria)) { console.log (staff) ; return staff}else {return null}});
       setStaffs(newValues)
    }

    const handleSelectStaffMember = (id, event)=>{
        console.log("Staff id is ", id)
        const value =staffs.filter( staff => staff.id === id)
        console.log("value in hahandleSelectStaffMemberndl ", value)
       setSelectedStaff( value[0])
       console.log(selectedStaff)


    }

    return (
        <>
            <div className="section-class">
                <div className="sub-menu" >
                    <ul>
                        <li>Staff</li>
                        <li>Doctorss</li>
                    </ul>
                </div>
                <div className="search-section">
                    <input type="search" placeholder="enter search name" value={searchCriteria} onChange={(e) => handleOnChangeSearchCriteria(e)} />
                    <button onClick ={ (event) => handleFilter (event)} > Filter</button>
                    <button onClick ={ (event) => handleReset (event) }  > Reset</button>
                    <ul>
                        {staffs.length > 0 && staffs.map(staff =>
                            <li key={staff.id} ><button onClick={(event) => handleSelectStaffMember( staff.id,event  ) }>{staff.name}</button></li>
                        )

                        }
                    </ul>
                </div>
                <div className="main-section" >
                    <form>
                        <lable htmlFor="staffName" >StaffName</lable>
                        <input name="staffName"  value ={selectedStaff.name}  />

                        <lable htmlFor="staffTel" >Staff Tel</lable>
                        <input name="staffTel"  value ={selectedStaff.tel}  />
                    </form>

                </div>

            </div>



        </>
    )
}

