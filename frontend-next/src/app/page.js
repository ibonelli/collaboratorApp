'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';

function getCollaborator() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/api/collaborator')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
 
  if (isLoading) return '<p>Loading...</p>';
  if (!data) return '<p>No profile data</p>';

  console.log(data);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            { Object.keys(data[0]).map((item) => (<th>{item}</th>)) }
          </tr>
        </thead>
        <tbody>
          <tr>
            { Object.values(data[0]).map((item) => (<td>{item}</td>)) }
          </tr>
          <tr>
            { Object.values(data[1]).map((item) => (<td>{item}</td>)) }
          </tr>
          <tr>
            { Object.values(data[2]).map((item) => (<td>{item}</td>)) }
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default function Home() {
  const table = getCollaborator();

  return (
    <div>
      { table }
    </div>
  )
}
