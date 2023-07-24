import React, { useState } from "react";
import "./AttendanceTable.css";
const AttendanceTable = () => {
  const [students, setStudents] = useState([
    { id: '002023001', name: "John Doe", present: false, absent: false },
    { id: '002023002', name: "Jane Smith", present: false, absent: false },
    { id: '002023003', name: "Jane Smith", present: false, absent: false },
    { id: '002023004', name: "Jane Smith", present: false, absent: false },
    { id: '002023005', name: "Jane Smith", present: false, absent: false },
    { id: '002023006', name: "Jane Smith", present: false, absent: false },
    { id: '002023007', name: "Jane Smith", present: false, absent: false },
    { id: '002023008', name: "Jane Smith", present: false, absent: false },
    // Add more students here if needed
  ]);
  const handleAttendanceChange = (index, field) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = !updatedStudents[index][field];
    setStudents(updatedStudents);
  };

  return (
    <div>
      <h1>Attendance Table</h1>
      <table>
      <thead>
        <tr >
          <th className="stdId">Student ID</th>
          <th>Student Name</th>
          <th className="present">Present</th>
          <th className="absent">Absent</th>
        </tr>
      </thead>
      <tbody> 
        {students.map((student, index) => (
          <tr key={student.id}>
            <td className="id">{student.id}</td>
            <td>{student.name}</td>
            <td> 
              <input
                type="checkbox"
                checked={student.present}
                onChange={() => handleAttendanceChange(index, "present")}
              /> <span className="present">Present</span>
            </td>
            <td>
              <input
                type="checkbox"
                checked={student.absent}
                onChange={() => handleAttendanceChange(index, "absent")}
              />  <span className="absent">Absent</span> 
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
};

export default AttendanceTable;
