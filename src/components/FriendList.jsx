import FriendListItem from './FriendListItem';
import friends from '../friends.json';

const FriendList = () => {
  return (
    <div>
        <ul style={{display:"flex", justifyContent:"center", listStyle:"none",listStyleType:"none"}}>
        {friends.map(friend => (
      <li style={{ margin:'1em', display:"flex", alignItems:"baseline",border:"solid 2px black", padding:"5px 20px"}} key={friend.id}>
        <FriendListItem 
          name={friend.name} 
          avatar={friend.avatar} 
          isOnline={friend.isOnline} 
        />
      </li>
        ))}
        </ul>
    </div>
  )
}

export default FriendList;