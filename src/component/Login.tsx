import { useDispatch } from "react-redux";
import { login, logout } from "../feature/User";

export default function Login() {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-3">
      <button className="bg-blue-300 px-4 py-2 rounded-lg"
        onClick={() =>
          dispatch(
            login({ name: "Adeline", age: 20, email: "adelinemug6@gmail.com" })
          )
        }
      >
        Login
      </button>
      <button className="bg-red-300 px-4 py-2 rounded-lg" onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
