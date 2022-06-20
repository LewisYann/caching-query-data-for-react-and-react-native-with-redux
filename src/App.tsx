import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useGetMessageQuery,useSendMessageMutation } from './services';
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
      <SendMessageCompoment />
    </div>
  );
}

function SendMessageCompoment(){
  const [sendMessage,{data,isError,isLoading,isSuccess}]=useSendMessageMutation();
  const [message,setMessage]=useState('');
  return (
    <div>  
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error!</div>}
      {isSuccess && <div>Message has been sent!</div>}
      <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
      <button onClick={()=>sendMessage(message)}>Send Message</button>
    </div>
  )

}

export default App;
