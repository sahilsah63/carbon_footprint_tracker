// This is a simple React component that confirms Firebase connection
// by displaying a message. It imports the Firebase app instance from the firebase.js file.

// import React from 'react';
// import app from './Firebase/firebaseconfig';

// function App() {
//   return (
//     <div>
//       <h1>Firebase Connected </h1>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Login from './pages/phonelogin';

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;