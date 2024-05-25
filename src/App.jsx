import { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  const [profile, setProfile] = useState({
    name: 'Victor',
    username: 'victor_123',
    bio: 'Hello! I am Victor, a software developer.',
    profilePicture: 'https://via.placeholder.com/150' // Placeholder image URL
  });

  // Handler functions to update profile state
  const handleNameChange = (event) => {
    setProfile({ ...profile, name: event.target.value });
  };

  const handleUsernameChange = (event) => {
    setProfile({ ...profile, username: event.target.value });
  };

  const handleBioChange = (event) => {
    setProfile({ ...profile, bio: event.target.value });
  };

  const handleProfilePictureChange = (event) => {
    // Logic to handle profile picture upload
    // For simplicity, we'll just set the URL here
    setProfile({ ...profile, profilePicture: event.target.value });
  };

  return (
    <div className="container">
      <div className="profile">
        <div className="profile-picture">
          <img src={profile.profilePicture} alt="Profile" />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
        </div>
        <div className="profile-info">
          <h2>{profile.name}</h2>
          <p>@{profile.username}</p>
          <textarea
            rows="4"
            value={profile.bio}
            onChange={handleBioChange}
          />
        </div>
      </div>

      <hr />

      <div className="input-group">
        <h2>Edit Profile</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={profile.name}
          onChange={handleNameChange}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={profile.username}
          onChange={handleUsernameChange}
        />
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          rows="4"
          value={profile.bio}
          onChange={handleBioChange}
        />
        <label htmlFor="profilePicture">Profile Picture URL</label>
        <input
          type="text"
          id="profilePicture"
          value={profile.profilePicture}
          onChange={handleProfilePictureChange}
        />
      </div>
    </div>
  );
}

export default App;
