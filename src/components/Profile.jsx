import PropTypes from 'prop-types';

const Profile = ({
  username = "Unknown",
  tag = "",
  location = "",
  avatar = "https://via.placeholder.com/200",
  stats = { followers: 0, views: 0, likes: 0 },
}) => {
  return (
    <div>
      <div>
        <img
          src={avatar}
          alt="User avatar"
          height="200px"
        />
        <p style={{ fontWeight: 900 }}>{username}</p>
        <p style={{ color: "grey" }}>@{tag}</p>
        <p style={{ color: "grey" }}>{location}</p>
      </div>

      <ul className="ul-post" style={{ listStyle: "none" }}>
        <li className="li-post">
          <span>Followers: </span>
          <span style={{ fontWeight: 600 }}>{stats.followers}</span>
        </li>
        <li className="li-post">
          <span>Views: </span>
          <span style={{ fontWeight: 600 }}>{stats.views}</span>
        </li>
        <li className="li-post">
          <span>Likes: </span>
          <span style={{ fontWeight: 600 }}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
