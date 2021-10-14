import { AppRouter, AppRoute } from '@ice/stark'
import LayoutApp from './layout.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <LayoutApp>
      <AppRouter>
        <AppRoute path="/user" title="用户" url={[
          'http://localhost:8000/css/app.css',
          'http://localhost:8000/app.js'
        ]}></AppRoute>
        <AppRoute path="/store" title="商户"></AppRoute>
      </AppRouter>
      </LayoutApp>
    </div>
  );
}

export default App;
