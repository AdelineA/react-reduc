import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h1>Profile data</h1>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
      <p></p>
    </div>
  );
}
