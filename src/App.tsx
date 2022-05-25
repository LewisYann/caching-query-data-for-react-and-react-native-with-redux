import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGetMessageQuery } from './services';
interface responses {
  message: string;
  id: number;
}

function App() {
  const { data, isLoading, isError, isSuccess } = useGetMessageQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }
  const messageList = data?.map((item: responses) => {
    return <li key={item.id}>{item.message}
    </li>
  })
  return (
    <div className="App">
      <ul>
        {messageList}
      </ul>
    </div>
  );
}

export default App;
