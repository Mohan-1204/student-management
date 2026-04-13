function logout() {
  localStorage.removeItem("token");
  window.location = "/";
}
<button onClick={logout}>Logout</button>;
