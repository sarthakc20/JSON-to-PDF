import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, sendMail, uploadPdf } from "../action";

const MergePDF = () => {
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.upload);

  const { error: mailError, success } = useSelector((state) => state.sendMail);

  const [selectedFiles, setSelectedFiles] = useState([]);

  const [mail, setMail] = useState("");

  const uploadHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("pdfs", file);
    });

    dispatch(uploadPdf(formData));

    const myForm = new FormData();

    myForm.set("mail", mail);
    dispatch(sendMail(myForm));
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

    if (mailError) {
      alert(mailError);
      dispatch(clearErrors());
    }

    if (success) {
      alert("Email Sent Successfully");
    }
  }, [dispatch, error, mailError, success]);

  return (
    <>
    <h1>Merge PDF & Send Mail</h1>
      <div>
        <label>Select Your PDF Files You Want To Merge</label>
        <form onSubmit={uploadHandler}>
          <input type="file" multiple accept=".pdf" onChange={handleFileChange}/>
          <input type="email" value={mail} onChange={(e) => setMail(e.target.value)}/>
          <input type="submit" value="Merge & Send Mail" />
        </form>
      </div>
    </>
  );
};

export default MergePDF;
