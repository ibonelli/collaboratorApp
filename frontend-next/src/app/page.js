'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';

function buildTBody(data) {
  let tbody = [];

  console.log("data: ")
  console.log(data);

  data.forEach(row => {
    console.log("row: ");
    console.log(row);
    console.log("Object.values(): ");
    console.log(Object.values(row));
    //tbody = tbody + "<tr>" + Object.values(row).map((item) => ("<td>"+String(item)+"</td>")).join('') + "</tr>"
    tbody.push(Object.values(row).map((item) => ("<td>"+String(item)+"</td>")).join(''));
  });

  console.log("tbody: ");
  console.log(tbody);

  return(tbody)
}

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
  else{
    console.log(data);
    // Current approach is not working, but the data seems to be iterated correctly (see buildTBody(data) above).

    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              { Object.keys(data[0]).map((item) => (<th>{item}</th>)) }
            </tr>
          </thead>
          <tbody>
              { data.forEach( rowObj => (<tr>{Object.values(rowObj).map((field) => (<td>{field}</td>) )}</tr>) )}
          </tbody>
        </Table>
      </>
    );
  }
}

export default function Home() {
  const table = getCollaborator();

  return (
    <div>
      { table }
    </div>
  )
}
