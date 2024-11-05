import "../Style/Layout.css";
import {
  deActivateDoctor,
  updateDoctor,
  createDoctor,
} from "./ReducerFunctions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from "react-modal";

export function Doctor(props) {
  const inputs = useSelector((state) => state.hospital.doctors);
  const dispatch = useDispatch();
  const iniValues = {
    id: "",
    name: "",
    dept: "",
    tel: "",
    isModalOpen: false,
  };

  const [modelInputs, setModelInputs] = useState(iniValues);

  const openModal = (ele, event) => {
    event.stopPropagation();
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
  };

  return (
    <section>
      <div style={{ display: "inline" }}>
        <h2>
          {" "}
          Doctor Page
          <span
            onClick={(event) => openModal(iniValues, event)}
            style={{
              float: "right",
              color: "blue",
              "margin-right": 600,
              "border-spacing": 5,
              "border-color": "black",
              border: "1px solid red",
              "background-color": "cyan",
            }}
          >
            Add New Doctor
          </span>
        </h2>
      </div>

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
                      <span
                        onClick={(event) => openModal(ele, event)}
                        style={{ color: "blue"  }}
                      >
                        Update
                      </span>
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
  const { doctorList, closeModal, modelInputs, setModelInputs, dispatch } =
    props;
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setModelInputs((values) => ({ ...values, [name]: value }));
  };

  const handleUpdate = (values, event) => {
    setErrors({});
    const { id, name } = values;
    let isDuplicate = false;
    doctorList.data.forEach((ele) => {
      if (ele.id !== id) {
        if (ele.name === name) {
          isDuplicate = true;
          setErrors({
            statusCode: 400,
            message: "Doctor Name is already present",
          });
        }
      }
    });
    if (!isDuplicate) {
      setErrors({
        statusCode: 200,
        message: "Doctor Name is Updated",
      });
      const { isModalOpen, ...rest } = values;
      dispatch(updateDoctor({ ...rest, isActive: true }));
    }
  };

  const handleCreate = (values, event) => {
    setErrors({});
    const { id, name } = values;
    let isDuplicate = false;
    doctorList.data.forEach((ele) => {
      if (ele.name === name) {
        isDuplicate = true;
        setErrors({
          statusCode: 400,
          message: "Doctor Name is already present",
        });
      }
    });
    if (!isDuplicate) {
      setErrors({
        statusCode: 200,
        message: "Doctor Name is Updated",
      });
      const { isModalOpen, ...rest } = values;
      dispatch(createDoctor({ ...rest, isActive: true }));
    }
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
        {modelInputs.id === "" && <h1>New Doctor's Details </h1>}
        {modelInputs.id !== "" && <h1>Update Doctor's Details </h1>}
        <button
          onClick={(event) => closeModal(event)}
          style={{ width: "90px", height: "20px", margin: "auto 0", "border-spacing": 5,
            "border-color": "black",
            border: "1px solid red",
            "background-color": "cyan" }}
        >
          Close
        </button>
      </div>
      <div>
        <label >Name: </label>
        <input
          id="name"
          name="name"
          value={modelInputs.name}
          onChange={(event) => handleChange(event)}
          required
        />
      </div>
      <div>
        <label width="200px">Department: </label>
        <input
          id="dept"
          name="dept"
          value={modelInputs.dept}
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div>
        <label width="200px">Contact Number: </label>
        <input
          id="tel"
          name="tel"
          value={modelInputs.tel}
          onChange={(event) => handleChange(event)}
        />
      </div>
      {modelInputs.id === "" && (
        <button
          onClick={(event) => handleCreate(modelInputs, event)}
          style={{ width: "200px", margin: "10px auto 0 auto",  "border-spacing": 5,
            "border-color": "black",
            border: "1px solid red",
            "background-color": "cyan" }}
        >
          Create New Doctor
        </button>
      )}
      {modelInputs.id !== "" && (
        <button
          onClick={(event) => handleUpdate(modelInputs, event)}
          style={{ width: "200px", margin: "10px auto 0 auto" , "border-color": "black",
            border: "1px solid red",
            "background-color": "cyan"}}
        >
          Update Doctor's Details
        </button>
      )}

      {errors.statusCode && <p6> {JSON.stringify(errors)}</p6>}
    </Modal>
  );
}
