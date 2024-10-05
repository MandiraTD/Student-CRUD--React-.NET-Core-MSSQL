import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Students = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Fetch all students from the API
  useEffect(() => {
    fetch('/api/Students')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching students:', error));
  }, []);

  // Function to delete a student
  const deleteStudent = (id) => {
    fetch(`/api/Students/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setStudents(students.filter(student => student.id !== id)); // Update UI after deletion
        } else {
          console.error('Failed to delete student');
        }
      })
      .catch((error) => console.error('Error deleting student:', error));
  };

  // Function to navigate to the update page
  const updateStudent = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className='body'>
      <h2 style={{ textAlign: 'center', margin: '20px'}}>Student List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Age</th>
            <th>Subject</th>
            <th>Mark</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.age}</td>
                <td>{student.subject}</td>
                <td>{student.mark}</td>
                <td>
                  <button className='upbtn' onClick={() => updateStudent(student.id)}>Update</button>
                  <button className='delbtn'  onClick={() => deleteStudent(student.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No students available</td>
            </tr>
          )}
        </tbody>
      </table>

      <Link to="/create">
              <button className='addbtn'>Add Students</button>
            </Link>
    </div>
  );
};

export default Students;
