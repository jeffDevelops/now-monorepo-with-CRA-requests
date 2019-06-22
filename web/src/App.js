import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [data, updateData] = useState(null);

  useEffect(() => {
    if (!data) {
      axios.get('/lambda/doesNothing.js')
        .then(response => updateData(response.data))
        .catch(error => console.error(error));
    }
  });

  if (data) {
    return (
      <div>
        { JSON.stringify(data) }
      </div>
    );
  } else {
    return <div>No data yet...</div>
  }
}

export default App;
