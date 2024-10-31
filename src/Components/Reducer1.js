// import { v4 as uuidv4 } from 'uuid';
import { configureStore, createSlice } from "@reduxjs/toolkit";
const currentDate = Date();


// const tomDate = Date() + 1;
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
      { id: "p01", name: "Patient 1", tel: "8123456791" },
      { id: "p02", name: "Patient 2", tel: "8123456792" },
      { id: "p03", name: "Patient 3", tel: "8123456793" },
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
      alert(JSON.stringify(action))
      
      state.doctors.data.forEach((element, index) => {

        if (element.id === id) {
          //  element = action
          state.doctors.data.splice(index, 1, action.payload)
          alert(JSON.stringify(state))

        }
      });
    },
  },
});



export const { deActivateDoctor, updateDoctor } = hospitalSlice.actions;

const store = configureStore({
  reducer: {
    hospital: hospitalSlice.reducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;

// export const actionAddDoctor = (payload) => {
//     return { type: "addDoctor", payload: payload }

// }
// export const actionRemoveDoctor = (id1) => {
//     // alert("4 Inside actionRemoveDoctor: " + id1)
//     return { type: "removeDoctor", payload: { id: id1 } }
// }

// // const actionUpdateDoctor = (payload) => ({ type: "removedoctor", payload: payload })

// export const reducerFunction = (state = initialState, action) => {

//     // alert("2 " + JSON.stringify(action))
//     // console.log("Inside reducer Function state: ",state)

//     switch (action.type) {
//         case "addDoctor":
//             let newState = state;
//             let flagPresent = false;
//             newState.doctors.data.forEach(ele => {
//                 if (ele.name === action.payload.name) {
//                     flagPresent = true;
//                     newState.doctors.error = "Doctor with this name already present. "
//                 }
//             })
//             if (!flagPresent) {
//                 // const newDoctor = { ...action.payload, "id": uuidv4() }
//                 const newDoctor = { ...action.payload, "id": "d07" }
//                 newState.doctors.data.push(newDoctor)
//             };
//             return newState;

//         case "removeDoctor":
//             let newDoctorsData = state.doctors.data;
//             const id = action.payload.id;

//             let newRecord = newDoctorsData.map(data => {
//                 if (data.id === id) {
//                     return { ...data, isActive: false }
//                 } else { return data;}
//             })
//              alert("New record:     " + JSON.stringify(newRecord))
//              state.doctors.data = newRecord

//              alert("New State:   " + JSON.stringify(state))

//              try {
//                 return state;
//              } catch (error) {
//                 alert(error);
//                 console.log(error);
//                 console.log(JSON.stringify(error))
//              }
//             return {...state }

//             // alert(   JSON.stringify(   { ...state, state.doctors : {data: newRecord}}))

//             // let newState1 = state;
//             // const reqIndex = newState1.doctors.data.findIndex(value => value.id === action.payload.id)
//             // // const deletedItem = newState1.doctors.data.splice(reqIndex, 1);

//             // // alert("Deleted item is" + JSON.stringify(deletedItem));
//             // newState1.doctors.data[reqIndex].isActive = false;
//             // // alert(JSON.stringify(newState1))
//             // return { ...state, newState1 };

//         // state mutation is done is dispatch method. line 76 causing error.

//         default:
//             return state;

//     }

// }
