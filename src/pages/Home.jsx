import React from "react";
import Terminal from "../components/displays/Terminal";
import CardList from "../components/cards/CardList";

const Home = () => {
  return (
    <div className="page" style={{ textAlign: "center" }}>
      <p className="page-title">oAuth Fun with Node.JS (A Fun Test Project)</p>
      <p style={{ fontSize: 20, margin: 50, lineHeight: "40px" }}>
        Passport.js contains support for over
        <span style={{ color: "var(--primary-red)" }}> 500+ </span>
        different authentication types. A simple React project that was made
        overnight, will show you everything public that your <b>
          favorite
        </b>{" "}
        companies store about you.
      </p>
      <Terminal userData={"passport.authenticate('facebook')"} selected="All" />
      <p style={{ fontSize: 28 }}>Popular Strategies</p>
      <CardList />
      <div style={{ marginBottom: 20 }} />
    </div>
  );
};

export default Home;
