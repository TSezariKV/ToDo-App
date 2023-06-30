import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Things To Do</h1>
        <input className='task-input' type='text' placeholder='Add New' />
        <div className='task-list'>
          <div className='task'>
            <input type='checkbox' />
            <p className='task-name'>Learn Javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
