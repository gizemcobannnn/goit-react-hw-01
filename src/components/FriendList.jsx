import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import Styles from './FriendList.module.css';

const FriendList = ({friends}) => {
  return (
    <div>
        <ul className={Styles.friendList}>
        {friends.map(friend => (
      <li className={Styles.friendItem}  key={friend.id}>
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