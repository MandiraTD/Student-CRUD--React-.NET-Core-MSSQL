import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';


const Create = () => {
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [age, setAge] = useState('');
  const [subject, setSubject] = useState('');
  const [mark, setMark] = useState('');
  
  const navigate = useNavigate(); // To redirect after successful creation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create student object
    const newStudent = {
      name,
      class: studentClass,
      age: parseInt(age),
      subject,
      mark: parseFloat(mark),
    };

    // Send POST request to add student
    fetch('/api/Students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => {
        if (response.ok) {
          alert('Student added successfully!');
          navigate('/students'); // Redirect to student list page
        } else {
          throw new Error('Failed to add student');
        }
      })
      .catch((error) => {
        console.error('Error adding student:', error);
        alert('Error adding student');
      });
  };

  return (
    <Card style={{backgroundColor:'rgb(225, 224, 235)', marginTop:'20px'}}>
      <h2 style={{marginBottom:'10px'}}>Add New Student</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label style={{fontWeight:'600'}}>Name:</Form.Label>
          <Form.Control 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formGroupClass">
          <Form.Label style={{fontWeight:'600'}}>Class:</Form.Label>
          <Form.Control 
            type="text" 
            value={studentClass} 
            onChange={(e) => setStudentClass(e.target.value)} 
            required 
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formGroupAge">
          <Form.Label style={{fontWeight:'600'}}>Age:</Form.Label>
          <Form.Control 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupSubject">
          <Form.Label style={{fontWeight:'600'}}>Subject:</Form.Label>
          <Form.Control 
            type="text" 
            value={subject} 
            onChange={(e) => setSubject(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupMark">
          <Form.Label style={{fontWeight:'600'}}>Mark:</Form.Label>
          <Form.Control 
            type="number" 
            step="0.01" 
            value={mark} 
            onChange={(e) => setMark(e.target.value)} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'20rem', fontSize:'20px'}}>
          Add Student
        </Button>
      </Form>
    </Card>
  );
};

export default Create;
