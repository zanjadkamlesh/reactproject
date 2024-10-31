import "../Style/Layout.css";
import { deActivateDoctor , updateDoctor} from "./Reducer1";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from "react-modal";

export function Doctor(props) {
  const inputs = useSelector((state) => state.hospital.doctors);
  const dispatch = useDispatch();

  const [modelInputs, setModelInputs] = useState({
    id: "",
    name: "",
    dept: "",
    tel: "",
    isModalOpen: false,
  });

  const openModal = (ele, event) => {
    event.stopPropagation();
    // setModelInputs(true);
    setModelInputs({
      id: ele.id,
      name: ele.name,
      dept: ele.dept,
      tel: ele.tel,
      isModalOpen: true,
    });
  };

  const closeModal = (event) => {
    event.stopPropagation();
    setModelInputs((values) => ({ ...values, isModalOpen: false }));
    // setIsModalOpen(false);
  };

  return (
    <section>
      <h2> Doctor Page</h2>

      <form id="formDoctor">
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
            {inputs.data.map(
              (ele) =>
                ele.isActive && (
                  <tr key={ele.id} id={ele.id}>
                    <td>
                      {" "}
                      <input name="name" value={ele.name} readOnly />{" "}
                    </td>
                    <td>
                      {" "}
                      <input name="dept" value={ele.dept} readOnly />{" "}
                    </td>
                    <td>
                      <input name="tel" value={ele.tel} readOnly />{" "}
                    </td>
                    <td>
                      {" "}
                      <span onClick={(event) => openModal(ele, event)}>
                        Update
                      </span>
                      {/* <button onClick={() => dispatch(deActivateDoctor({payload:{id:ele.id}}))}> */}
                      {/* <button onClick={() => dispatch(actionRemoveDoctor2)}> */}
                      <button
                        onClick={() => dispatch(deActivateDoctor(ele.id))}
                      >
                        DeActivate
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </form>

      {/* <p>{JSON.stringify(inputs)}</p> */}

      <ModelUpdateDoctor
        doctorList={inputs}
        openModal={openModal}
        closeModal={closeModal}
        modelInputs={modelInputs}
        setModelInputs={setModelInputs}
        dispatch={dispatch}
      />
    </section>
  );
}

function ModelUpdateDoctor(props) {
  const { doctorList, closeModal, modelInputs, setModelInputs, dispatch } = props;
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setModelInputs((values) => ({ ...values, [name]: value }));
  };

  const handleUpdate = (values, event) => {
    // alert("to be Updated: " + JSON.stringify(values));
    setErrors({
    });
    const { id, name } = values;
    let isDuplicate = false;
    // const error =null;
    doctorList.data.forEach((ele) => {
      // alert("Check each doctor " + JSON.stringify(ele))
      if (ele.id !== id) {
        if (ele.name === name) {
          // alert(ele.id + "   " + values.id);
          isDuplicate= true
          setErrors({
            statusCode: 400,
            message: "Doctor Name is already present",
          });
        }
      }
    });
    if( !isDuplicate){
      setErrors({
        statusCode: 200,
        message: "Doctor Name is Updated",
      });
      const {isModalOpen , ...rest} = values
      dispatch(updateDoctor({...rest, isActive:true}))
    }
    // alert(JSON.stringify(errors));
  };

  return (
    <Modal
      isOpen={modelInputs.isModalOpen}
      style={{
        content: {
          display: "flex",
          flexDirection: "column",
          maxWidth: "450px",
          height: "280px",
          margin: "auto",
          backgroundColor: "lightgrey",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.85)",
        },
      }}
    >
      <div
        className="modal-header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h1>Update Doctor's Details </h1>
        <button
          onClick={(event) => closeModal(event)}
          style={{ width: "90px", height: "20px", margin: "auto 0" }}
        >
          Close
        </button>
      </div>
      <div>
        <label>Name</label>
        <input
          id="name"
          name="name"
          value={modelInputs.name}
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div>
        <label>Department</label>
        <input
          id="dept"
          name="dept"
          value={modelInputs.dept}
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div>
        <label>Contact Number</label>
        <input
          id="tel"
          name="tel"
          value={modelInputs.tel}
          onChange={(event) => handleChange(event)}
        />
      </div>
      <button
        // onClick={() => alert( modelInputs.id + " " +  modelInputs.name )}
        onClick={(event) => handleUpdate(modelInputs, event)}
        style={{ width: "90px", margin: "10px auto 0 auto" }}
      >
        Update
      </button>
      {errors.statusCode && <p6> {JSON.stringify(errors)}</p6>}
    </Modal>
  );
}
