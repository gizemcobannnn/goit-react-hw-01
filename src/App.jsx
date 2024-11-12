import './App.css'
import './components/Profile';
import userData from "./userData.json";
import Profile  from './components/Profile';


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};


export default App
