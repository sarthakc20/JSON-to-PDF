import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getAllStudent } from "../action";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const AllStudent = () => {
  const dispatch = useDispatch();

  const { error, students } = useSelector((state) => state.getAllStudent);

  const [keyword, setKeyword] = useState("");

  const columns = [
    { field: "name", headerName: "Name", minWidth: 150, flex: 0.5 },

    {
      field: "major",
      headerName: "Major",
      minWidth: 150,
      flex: 0.6,
    },

    {
      field: "state",
      headerName: "State",
      minWidth: 150,
      flex: 1,
    },

    {
      field: "zip",
      headerName: "Zip Code",
      type: "number",
      minWidth: 100,
      flex: 0.4,
    },

    {
      field: "address_1",
      headerName: "Address Line 1",
      minWidth: 300,
      flex: 0.4,
    },

    {
      field: "address_2",
      headerName: "Address Line 2",
      minWidth: 180,
      flex: 0.4,
    },

    {
      field: "city",
      headerName: "City",
      minWidth: 100,
      flex: 0.4,
    },

    {
      field: "action",
      flex: 0.3,
      headerName: "Action",
      minWidth: 50,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/students/${params.id}`}>Edit</Link>
          </>
        );
      },
    },
  ];

  const rows = [];

  students &&
    students
      .filter((student) => {
        return keyword === ""
          ? student
          : (student.name && student.name.toLowerCase().includes(keyword)) ||
              (student.major &&
                student.major.toLowerCase().includes(keyword)) ||
              (student.address[0].state &&
                student.address[0].state.toLowerCase().includes(keyword)) ||
                (student.address[0].zip &&
                    student.address[0].zip.toString().includes(keyword)) ||
              (student.address[0].city &&
                student.address[0].city.toLowerCase().includes(keyword));
      })
      .forEach((student) => {
        rows.push({
          id: student._id,
          name: student.name,
          major: student.major,
          state: student.address[0].state,
          zip: student.address[0].zip,
          address_1: student.address[0].address_1,
          address_2: student.address[0].address_2,
          city: student.address[0].city,
        });
      });

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors);
    }

    dispatch(getAllStudent());
  }, [dispatch, error]);

  return (
    <>
      <div>
        <h1>All Students</h1>

        <div>
          <form
            className="searchBox"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />

            <input type="submit" value="Search" />
          </form>
        </div>

        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          className="studentListTable"
          autoHeight
        />
      </div>
    </>
  );
};

export default AllStudent;
