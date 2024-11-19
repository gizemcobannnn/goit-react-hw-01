import PropTypes from 'prop-types';
import Styles from './Profile.module.css';
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
        <p className={Styles.pUser}>{username}</p>
        <p className={Styles.pGrey}>@{tag}</p>
        <p className={Styles.pGrey}>{location}</p>
      </div>

      <ul className={Styles.ulPost} >
        <li className="li-post">
          <span>Followers </span>
          <span className={Styles.textPost}>{stats.followers}</span>
        </li>
        <li className="li-post">
          <span>Views </span>
          <span className={Styles.textPost}>{stats.views}</span>
        </li>
        <li className="li-post">
          <span>Likes </span>
          <span className={Styles.textPost}>{stats.likes}</span>
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
