import { LOGIN, LOGOUT } from '../actions/actionTypes';
import defaultData from '../config/defaultData.json';

const INITIAL_STATE = {
    ...defaultData,
    isProcessing: false
}

export default (state = INITIAL_STATE, action) => {
    if (action && action.type) {
        switch (action.type) {
            case LOGIN:
                let user = state.users.find(u => u.email === action.email && u.password === action.password);
                if (!user)
                    return state;

                let doctors = state.doctors.filter(doctor => {
                    doctor.slots = doctor.slots && doctor.slots.filter(slot => !slot.isScheduled);
                    if (!doctor.slots.length) delete doctor.slots;
                    return doctor;
                });
                return { ...state, user, doctors: doctors }
                break;
            case LOGOUT:
                return { ...state, user: null }
                break;
        }
        return state;
    }
    return state;
}