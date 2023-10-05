import React from "react";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const NewsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h1 className="text-5xl">News Details</h1>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
      <h2 className="text-2xl">News Detail</h2>
    </div>
  );
};

export default NewsPage;
