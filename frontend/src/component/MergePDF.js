import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, uploadPdf } from "../action";
import { useNavigate } from "react-router-dom";

const MergePDF = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { error } = useSelector((state) => state.upload);

  const [selectedFiles, setSelectedFiles] = useState([]);

  const uploadHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("pdfs", file);
    });

    dispatch(uploadPdf(formData));

    navigate(`merge/merged.pdf`);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  return (
    <>
      <div>
        <label>Select Your PDF Files You Want To Merge</label>
        <form onSubmit={uploadHandler}>
          <input type="file" multiple accept=".pdf" onChange={handleFileChange}/>
          <input type="submit" value="Merge" />
        </form>
      </div>
    </>
  );
};

export default MergePDF;
