use("VideoClubCRUD");
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['id_users', 'email', 'password'],

      // //el adition properties lo que hace es que en mongo no se generen nuevas propiedad, dado que por su flexibilidad al no colocarlo se agregarian sin problema. TENER ENCUENTA TAMBIEN QUE AL HACER ESO  se debe agregar obligatoriamente la propiedad _id en el array de required y además validarlo en properties. De lo contrario Mongo no permitirá la inserción de documentos, así tengan la estructura correcta.
      // additionalProperties: false,

      properties: {
        id_users: {
          bsonType: 'string'
        },
        email: {
          bsonType: 'string'
        },
        password: {
          bsonType: 'string',
          pattern: "^[A-Z-a-z-0-9]{8,}$"
        },
      }

    }

  }

})