import React, { useState } from "react";
import "./AttendanceTable.css";
const AttendanceTable = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", present: false, absent: false },
    { id: 2, name: "Jane Smith", present: false, absent: false },
    { id: 3, name: "Jane Smith", present: false, absent: false },
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
          <th>Student ID</th>
          <th>Student Name</th>
          <th>Present</th>
          <th>Absent</th>
        </tr>
      </thead>
      <tbody> 
        {students.map((student, index) => (
          <tr key={student.id}>
                  <td>{student.id}</td>
            <td>{student.name}</td>
            <td>Present
              <input
                type="checkbox"
                checked={student.present}
                onChange={() => handleAttendanceChange(index, "present")}
              /> 
            </td>
            <td>Absent
              <input
                type="checkbox"
                checked={student.absent}
                onChange={() => handleAttendanceChange(index, "absent")}
              /> 
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
};

export default AttendanceTable;
