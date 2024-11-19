import PropTypes from 'prop-types';
import Styles from './FriendListItem.module.css';


function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className="friend-item">
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p className={Styles.pname}>{name}</p>
      <span className={isOnline ? Styles["status-online"] : Styles["status-offline"]}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

