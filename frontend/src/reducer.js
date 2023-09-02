import {
  ALL_STUDENTS_FAIL,
  ALL_STUDENTS_REQUEST,
  ALL_STUDENTS_SUCCESS,
  CLEAR_ERRORS,
  CREATE_STUDENT_FAIL,
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_RESET,
  CREATE_STUDENT_SUCCESS,
  GET_STUDENT_FAIL,
  GET_STUDENT_REQUEST,
  GET_STUDENT_SUCCESS,
  SEND_MAIL_FAIL,
  SEND_MAIL_REQUEST,
  SEND_MAIL_SUCCESS,
  UPDATE_STUDENT_FAIL,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_RESET,
  UPDATE_STUDENT_SUCCESS,
  UPLOAD_FAIL,
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
} from "./constants";

export const newStudentReducer = (state = { student: {} }, action) => {
  switch (action.type) {
    case CREATE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_STUDENT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        student: action.payload.student,
      };
    case CREATE_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_STUDENT_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const getStudentReducer = (state = { student: {} }, action) => {
  switch (action.type) {
    case GET_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_STUDENT_SUCCESS:
      return {
        loading: false,
        student: action.payload,
      };
    case GET_STUDENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const getAllStudentReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case ALL_STUDENTS_REQUEST:
      return {
        loading: true,
        students: [],
      };
    case ALL_STUDENTS_SUCCESS:
      return {
        loading: false,
        students: action.payload.students,
      };
    case ALL_STUDENTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const updateStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case UPDATE_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_STUDENT_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const uploadReducer = (state = { files: [] }, action) => {
  switch (action.type) {
    case UPLOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        files: action.payload.files,
      };
    case UPLOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const sendMailReducer = (state = { mail: {} }, action) => {
  switch (action.type) {
    case SEND_MAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEND_MAIL_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        mail: action.payload.mail,
      };
    case SEND_MAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
