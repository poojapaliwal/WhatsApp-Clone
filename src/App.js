import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import Pusher from 'pusher-js'
import axios from "./axios";

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/message/sync').then((response) =>{
      setMessages(response.data);
    })
  }, []);

  useEffect(() => {
    var pusher = new Pusher('e225cfcc518b55e1b9a5', {
      cluster: 'ap2'
    });
    
    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage ]);
    });

    return () =>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])

  console.log(messages);

  const [{ user }, dispatch] = useStateValue();

  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : ( 
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat  messages = {messages}/>
              </Route>
              <Route path="/">
                <Chat messages = {messages}/>
              </Route>
            </Switch>
          </Router>

          {/* chat */}
        </div>
      )} 
    </div>
  );
}

export default App;
