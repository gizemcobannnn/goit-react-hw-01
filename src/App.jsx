import './App.css';
import './components/Profile';
import userData from "./userData.json";
import friends from "./friends.json"
import transactions from "./transactions.json"
import Profile  from './components/Profile';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';



const App = () => {
  return (
    <>
        
        <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>

  );
};


export default App;
