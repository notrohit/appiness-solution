import React from "react"
import { Redirect } from "react-router-dom"
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function IsAuthenticated({ children }) {
  const IS_LOGGED_IN = cookies ? (cookies.get('authenticated') === 'true') : false

  if (!IS_LOGGED_IN) {
    return <Redirect to={{ pathname: "/login" }} />
  }
  return <>{children}</>
}

export default IsAuthenticated
