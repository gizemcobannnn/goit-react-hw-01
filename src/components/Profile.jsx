const Profile = () => {
  return (
    <div>
  <div>
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      height='200px'
    />
    <p style={{fontWeight:900}}>Petra Marica</p>
    <p style={{color:"grey"}}>@pmarica</p>
    <p style={{color:"grey"}}>Salvador, Brasil</p>
  </div>

  <ul className="ul-post" style={{listStyle:"none"}}>
    <li className='li-post'>
      <span>Followers</span>
      <span style={{fontWeight:600}}>1000</span>
    </li>
    <li className='li-post'>
      <span>Views</span>
      <span style={{fontWeight:600}}>2000</span>
    </li>
    <li className='li-post'>
      <span>Likes</span>
      <span style={{fontWeight:600}}>3000</span>
    </li>
  </ul>
</div>

  )
}

export default Profile;
