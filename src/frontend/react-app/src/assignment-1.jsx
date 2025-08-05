const ProfileCard = () => {
  return (
    <div className="card">
      <header>
        <img src="./assets/assignment-1/images/avatar-jessica.jpeg" alt="" />
        <h1>Jessica Randall</h1>
        <h3>London, United Kingdom</h3>
        <h4>"Front-end developer and avid reader."</h4>
      </header>
      <ul>
        <a href="www.github.com">GitHub</a>
        <a href="www.frontendmentor.io">Frontend Mentor</a>
        <a href="www.linkedin.com">Linkedin</a>
        <a href="www.x.com">Twitter</a>
        <a href="www.instagram.com">Instagram</a>
      </ul>
    </div>
  )
}

export default ProfileCard;