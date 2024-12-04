import { useState } from "react";
import Joke from "./joke";
import Stories from "./stories";
import Tasks from "./tasks";

function App() {
  const [userQuery, setUserQuery] = useState('');

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  const handleKeyPress = event => {
    if (event.code === 'Enter') {
      searchQuery();
    }
  }

  const updateUserQuery = event => {
    // all user queries will log one behind due to closure
    console.log('userQuery', userQuery);

    setUserQuery(event.target.value);

    console.log('userQuery', userQuery);

    setTimeout(() => {

      console.log('userQuery', userQuery);
    }, 1000)
  }

  return (
    <div className="App">
      <h1>Hello Cameron</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyDown={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <Stories />
    </div>
  );
}

export default App;
