import { useState } from "react";
import Joke from "./joke";
import Stories from "./stories";
import Tasks from "./tasks";
import Gallery from "./gallery";
import MatrixGallery from "./matrix-gallery";

function App() {
  const [userQuery, setUserQuery] = useState('');
  const [showGallery, setShowGallery] = useState(true);
  const [showMatrixGallery, setShowMatrixGallery] = useState(true);

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  const handleKeyPress = event => {
    if (event.code === 'Enter') {
      searchQuery();
    }
  }

  const updateUserQuery = event => {
    setUserQuery(event.target.value);
  }

  const toggleShowGallery = () => {
    setShowGallery(!showGallery);
  }

  const toggleShowMatrixGallery = () => {
    setShowMatrixGallery(!showMatrixGallery);
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
      <div>
        {
          showGallery ? <Gallery /> : null
        }
        <button onClick={ toggleShowGallery }>
          { showGallery ? 'Hide' : 'Show' } Gallery
        </button>
      </div>
      <hr />
      <div>
        {
          showMatrixGallery ? <MatrixGallery /> : null
        }
        <button onClick={ toggleShowMatrixGallery }>
          {showMatrixGallery ? 'Hide' : 'Show' } Matrix Gallery
        </button>
      </div>
      <Stories />
    </div>
  );
}

export default App;
