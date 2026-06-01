import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const Profile = () => {
  const context = useContext(AuthContext);
  if (!context) return null;

  const { user } = context;

  return <div>{user ? <h3>Welcome, {user.name}</h3> : <h3>Guest</h3>}</div>;
};
export default Profile;
