// FriendListItem.jsx

// eslint-disable-next-line react/prop-types
function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className="friend-item">
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p style={{fontWeight:600}}>{name}</p>
      <span className={isOnline ? 'status-online' : 'status-offline'}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
}

export default FriendListItem;
