import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
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

FriendList.propTypes={
  friends:PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })).isRequired,
}
export default FriendList;