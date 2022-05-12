import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Navigation from "./Navigation";


export default function Home() {
  const { path, url } = useRouteMatch();
  const loggedIn =localStorage.getItem("loggedIn")
  return (
    <>
     <Navigation authorized={loggedIn} baseUrl={url} />
     
    </>
  );
}