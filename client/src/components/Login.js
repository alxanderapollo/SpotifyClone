import React from 'react';
import {Container} from 'react-bootstrap'
//contain our login token
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=4edf21ecfeba44459b1df18314ae9158&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
export const Login = () => {
  return <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh"}}>
    <a href={AUTH_URL} className="btn btn-success btn-lg">Login with spotify</a>

  </Container>;
};
