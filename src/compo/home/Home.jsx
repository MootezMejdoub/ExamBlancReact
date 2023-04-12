import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
   useEffect(() => {
    
  }, [ ]);
  const deleteData = (id) => {
     
  };
  return (
    <div>
      home
      <table style={{ border: "solid " }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>delete</th>
            <th>details</th>
          </tr>
        </thead>
        <tbody>
          { .map((z, index) => {
            return (
              <tr key={index}>
                <td>{z.id}</td>
                <td>{z.name}</td>
                <td>
                  <button onClick={() => deleteData(z.id)}>delete</button>
                </td>
                <td>
                  <button>
                    <Link to={`/home/${z.id}`}> details</Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
