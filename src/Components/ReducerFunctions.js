import { v4 as uuidv4 } from 'uuid';
import { configureStore, createSlice } from "@reduxjs/toolkit";
const currentDate = Date();


//  const tomDate = Date() + 1;
//  alert("Tomorw date" , tomDate)
const initialState = {
  doctors: {
    data: [
      {
        id: "d01",
        name: "Chintan Rathod",
        dept: "Cardiology",
        tel: "9123456791",
        isActive: true,
      },
      {
        id: "d02",
        name: "Chhaya Z",
        dept: "Cardiology",
        tel: "9123456792",
        isActive: true,
      },
      {
        id: "d03",
        name: "Divya",
        dept: "Dentisary",
        tel: "9123456793",
        isActive: false,
      },
      {
        id: "d04",
        name: "David",
        dept: "Dentisary",
        tel: "9123456794",
        isActive: true,
      },
      {
        id: "d05",
        name: "Omkar",
        dept: "OPD",
        tel: "9123456795",
        isActive: true,
      },
      {
        id: "d06",
        name: "Doctor 3Ojas",
        dept: "OPD",
        tel: "9123456796",
        isActive: true,
      },
    ],
    loading: false,
    error: null,
  },
  patients: {
    data: [
      { id: "p01", name: "Patient 1", tel: "8123456791" ,isActive: true,},
      { id: "p02", name: "Patient 2", tel: "8123456792", isActive: true, },
      { id: "p03", name: "Patient 3", tel: "8123456793",isActive: true, },
    ],

    loading: false,
    error: null,
  },
  appointments: {
    data: [
      {
        id: "a011",
        patId: "p01",
        docId: "d01",
        date: currentDate,
        time: "1 PM",
      },
      {
        id: "a012",
        patId: "p01",
        docId: "d02",
        date: currentDate,
        time: "2 PM",
      },
      {
        id: "a021",
        patId: "p02",
        docId: "d01",
        date: currentDate,
        time: "1 PM",
      },
      {
        id: "a022",
        patId: "p02",
        docId: "d02",
        date: currentDate,
        time: "2 PM",
      },
    ],
    loading: false,
    error: null,
  },
};

const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {
    deActivateDoctor(state, action) {
      const id = action.payload;
      state.doctors.data.forEach((element) => {
        if (element.id === id) {
          element.isActive = false;
        }
      });
    },
    updateDoctor(state, action) {
      const id = action.payload.id;
      state.doctors.data.forEach((element, index) => {
        if (element.id === id) {
          state.doctors.data.splice(index, 1, action.payload)
        }
      });
    },
    createDoctor(state, action) {
      const id = uuidv4();
      state.doctors.data.push({ ...action.payload, id: id })
    },

    deActivatePatient(state, action) {
      const id = action.payload;
      state.patients.data.forEach((element) => {
        if (element.id === id) {
          element.isActive = false;
        }
      });
    },
    updatePatient(state, action) {
      const id = action.payload.id;
      state.patients.data.forEach((element, index) => {
        if (element.id === id) {
          state.patients.data.splice(index, 1, action.payload)
        }
      });
    },
    createPatient(state, action) {
      const id = uuidv4();
      state.patients.data.push({ ...action.payload, id: id })
    },
  },
});



export const { deActivateDoctor, updateDoctor, createDoctor, deActivatePatient, updatePatient, createPatient } = hospitalSlice.actions;

const store = configureStore({
  reducer: {
    hospital: hospitalSlice.reducer,
  },
});

export default store;

