"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/tours`).then((res) => {
      setTours(res.data.data.tours);
    });
  });
  return (
    <div>
      {tours.map((tour: any) => {
        return <div>{tour.name}</div>;
      })}
      Login
    </div>
  );
};
export default Login;
