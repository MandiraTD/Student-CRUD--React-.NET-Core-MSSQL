import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const Update = () => {
  const { id } = useParams(); // Get the student ID from the URL parameters
  const [student, setStudent] = useState({
    name: '',
    class: '',
    age: '',
    subject: '',
    mark: ''
  });
  const navigate = useNavigate();

  // Fetch the student details when the component mounts
  useEffect(() => {
    fetch(`/api/Students/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to fetch student details');
      })
      .then((data) => setStudent(data))
      .catch((error) => console.error(error));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  // Handle form submission to update the student
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/Students/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    })
      .then((response) => {
        if (response.ok) {
          navigate('/students'); // Redirect to the home page or students list after update
        } else {
          throw new Error('Failed to update student');
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='card'>
      <h2>Update Student Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label >Name:</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Class:</label>
          <input
            type="text"
            name="class"
            value={student.class}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={student.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={student.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mark:</label>
          <input
            type="number"
            name="mark"
            value={student.mark}
            onChange={handleChange}
            required
          />
        </div>
        <button className='updtbtn' type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default Update;
