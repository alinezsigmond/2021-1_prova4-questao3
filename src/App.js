import React, { useEffect } from 'react';
import api from './api';

export default function App() {

  useEffect(() => {
    api
      .get('psyduck')
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.error('Opa, deu ruim: ' + err);
      });
  }, []);

  return (
    <>
    <h1 style={{margin: 100, textAlign: 'center'}} >Oi, meu anjo!</h1>
    <p style={{margin: 50, textAlign: 'center'}} >Dá uma olhadinha no console, por gentileza :)</p>
    <img 
    style={{width: '25%', marginLeft: '65%'}} 
    src='https://cdn2.bulbagarden.net/upload/thumb/5/53/054Psyduck.png/600px-054Psyduck.png'
    alt='Psyduck, o pokemon mais fofo'
    />
    </>
  );
}