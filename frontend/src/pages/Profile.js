function Profile() {
  const user = localStorage.getItem("token");

  return (
    <div>
      <h2>Profile</h2>

      <p>User Logged In</p>
    </div>
  );
}

export default Profile;
