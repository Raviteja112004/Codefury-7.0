const teamMembers = {
  "team_members": [
    {
      "name": "Poovarasan S",
      "about": "Lorem ipsum dolor sit amet consectetur",
      "instagram_id": "https://www.instagram.com/poovarasansivakumar2003/",
      "gmail": "poovarasansivakumar2003@gmail.com",
      "image": "img/poovarasan.jpeg"
    },
    {
      "name": "Veerendra S",
      "about": "Lorem ipsum dolor sit amet consectetur",
      "git_profile": "https://github.com/Veerendras2004",
      "instagram_id": "https://www.instagram.com/veerendrasvikky/",
      "gmail": "veerendrasvikky@gmail.com",
      "image": "img/veerendra.jpeg"
    },
    {
      "name": "Vikas J V",
      "about": "Lorem ipsum dolor sit amet consectetur",
      "git_profile": "https://github.com/Vikas-j-v",
      "instagram_id": "https://www.instagram.com/vikas_j_v/",
      "gmail": "vikasjv68@gmail.com",
      "image": "img/vikas.jpeg"
    },
    {
      "name": "Raviteja M",
      "about": "Lorem ipsum dolor sit amet consectetur",
      "git_profile": "https://github.com/Raviteja112004",
      "instagram_id": "https://www.instagram.com/_raviteja_m_/",
      "gmail": "raviteja11112004@gmail.com",
      "image": "img/raviteja.jpeg"
    }
  ]
};
const ProfileCard = ({ name, about, gitProfile, instagramId, gmail, image }) => (
  <div className="card-wrapper">
    <div className="card">
      <div className="card-image">
        <img src={image} alt={`profile of ${name}`} />
      </div>
      <ul className="social-icons">
        <li>
          <a href={gitProfile} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href={`https://instagram.com/${instagramId}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href={`mailto:${gmail}`} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
      <div className="details">
        <h2>{name}<br /><span className="job-title">{about}</span></h2>
      </div>
    </div>
  </div>
);

const App = () => (
  <div className="container">
    {teamMembers.team_members.map((member, index) => (
      <ProfileCard
        key={index}
        name={member.name}
        about={member.about}
        gitProfile={member.git_profile}
        instagramId={member.instagram_id}
        gmail={member.gmail}
        image={member.image}
      />
    ))}
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));