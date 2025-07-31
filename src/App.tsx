import { useState } from 'react';
import MediaForm from './components/MediaForm';
import MediaTable from './components/MediaTable';

function App() {
  const [reload, setReload] = useState(false);
  const refreshList = () => setReload(!reload);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🎬 Favorite Media App</h1>
      <MediaForm refreshList={refreshList} />
      <MediaTable reload={reload} />
    </div>
  );
}

export default App;
