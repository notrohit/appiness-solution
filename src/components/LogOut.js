import React from "react"
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function LogOut() {
  const loggedInUsername = cookies.get('username')
  const logOut = () => {
    cookies.remove('authenticated')
    cookies.remove('username')
    window.location.reload()
  }

  return (<>
    {loggedInUsername && (<>login in as {loggedInUsername}.</>)}
    <button className="container-btn" onClick={logOut}>Log out</button>
  </>)
}

export default LogOut;

