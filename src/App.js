import './App.css';
import TilesContainer from './component/TilesContainer';
import ListContainer from './component/ListContainer';
import { Switch } from 'antd'
import { useState } from 'react';

function App() {

  const [diplayMode, setDisplayMode] = useState(false)

  const handleToogle = () => {
    setDisplayMode(prevState => !prevState)
  }

  return (
    <div style={{ padding: '20px' }}>

      <p style={{ texAlign: 'center' }}> Tile Mode <Switch onClick={handleToogle} /> List Mode</p>

      {!diplayMode && <TilesContainer />}
      {diplayMode && <ListContainer />}

    </div>
  );
}

export default App;
