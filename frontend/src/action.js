import axios from "axios";
import {
  ALL_STUDENTS_FAIL,
  ALL_STUDENTS_REQUEST,
    ALL_STUDENTS_SUCCESS,
    CLEAR_ERRORS,
  CREATE_STUDENT_FAIL,
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  GET_STUDENT_FAIL,
  GET_STUDENT_REQUEST,
  GET_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAIL,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
  UPLOAD_FAIL,
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
} from "./constants";

export const createStudent = (studentData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_STUDENT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/`, studentData, config);

    dispatch({
      type: CREATE_STUDENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_STUDENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getSingleStudent = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_STUDENT_REQUEST });

    const { data } = await axios.get(`/api/v1/student/${id}`);

    dispatch({
      type: GET_STUDENT_SUCCESS,
      payload: data.student,
    });
  } catch (error) {
    dispatch({
      type: GET_STUDENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAllStudent = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_STUDENTS_REQUEST });

    const { data } = await axios.get(`/api/v1/students`);

    dispatch({
      type: ALL_STUDENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_STUDENTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateStudent = (id, studentData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_STUDENT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/api/v1/students/${id}`, studentData, config);

    dispatch({
      type: UPDATE_STUDENT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_STUDENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const uploadPdf = (pdfFiles) => async (dispatch) => {
  try {
    dispatch({ type: UPLOAD_REQUEST });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const { data } = await axios.post(
      `/api/v1/merge`,
      pdfFiles,
      config
    );

    dispatch({
      type: UPLOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPLOAD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
