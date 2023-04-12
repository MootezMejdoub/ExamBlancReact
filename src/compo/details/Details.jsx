import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [idd, setId] = useState(0);
  const [obj, setObj] = useState(0);

  useEffect(() => {}, []);

  return <div></div>;
};

export default Details;
