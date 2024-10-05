
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css';

function Home() {
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <h1>Welcome to the Student Management System</h1>
          <p>Manage your student records efficiently.</p>
          <div>
            <Link to="/students">
              <button className='managebtn' style={{ padding: '10px 20px', fontSize: '20px' }}>Manage Students</button>
            </Link>
            {/* You can add more navigation links or buttons here if needed */}
          </div>
        </div>
      );
}

export default Home