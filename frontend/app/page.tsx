"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/tours`).then((res) => {
      // setTours(res.data);
      // console.log(res.data.data.tours);
      const dataFetched = res.data;
      // setTours(JSON.stringify(dataFetched.data.tours));
      setTours(dataFetched.data.tours);
    });
  }, []);

  return (
    <>
      <button className="bg-slate-300 rounded-md text-black px-4">
        Click me
      </button>
      {tours.map((tour: any) => {
        return <section key={tour._id}>{tour.name}</section>;
      })}
    </>
  );
}
