import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearErrors, getSingleStudent } from "../action";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';

const Student = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { error, student, loading } = useSelector((state) => state.getStudent);

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getSingleStudent(id));
  }, [dispatch, id, error]);

  const downloadPdf = () => {
    const capture = document.querySelector('.studentData');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 40, 40, componentWidth, componentHeight);
      setLoader(false);
      doc.save('studnet.pdf');
    })
    }

  return (
    <>
      <div className="studentData">
        <div>
          <h2>Name:</h2>
          <p>{student.name}</p>
        </div>

        <div>
          <h2>Major:</h2>
          <p>{student.major}</p>
        </div>
        
        {student.address && student.address.length > 0 && (
        <div>
          <h2>Address</h2>

          <div>
            <h3>State:</h3>
            <p>{student.address[0].state}</p>
          </div>

          <div>
            <h3>Zip Code:</h3>
            <p>{student.address[0].zip}</p>
          </div>

          <div>
            <h3>Address Line 1:</h3>
            <p>{student.address[0].address_1}</p>
          </div>

          <div>
            <h3>Address Line 2:</h3>
            <p>{student.address[0].address_2}</p>
          </div>

          <div>
            <h3>City:</h3>
            <p>{student.address[0].city}</p>
          </div>
        </div>
        )}
      </div>

      <button onClick={downloadPdf} disabled={!(loader === false)}>
        {loading ? <span>Loading PDF</span> : <span>Download PDF</span>}
      </button>
    </>
  );
};

export default Student;
