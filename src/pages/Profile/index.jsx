import { useSelector, useDispatch } from "react-redux";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { setName, increaseXp } from "@/store/slices/userSlice";
import { setTheme } from "@/store/slices/themeSlice";
import { useRef } from "react";
import { Moon, Sun } from "lucide-react";

export default function Profile() {
  const { name, xp } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const userInput = useRef();

  const changeXp = () => {
    dispatch(increaseXp());
  };

  const changeName = () => {
    dispatch(setName(userInput.current.value));
  };

  const changeTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <h1 className="text-3xl tracking-tight font-bold my-4">Profile page</h1>
      <Label>Name</Label>
      <p className="text-xl">{name}</p>
      <Label>XP</Label>
      <p className="text-xl">{xp}</p>
      <Label>Current theme</Label>
      <p className="text-xl">{theme}</p>
      <Label>Set name</Label>
      <div className="flex gap-2 mb-2">
        <Input type="text" ref={userInput} />
        <Button onClick={changeName}>Change Name</Button>
      </div>
      <div className="flex gap-2 mb-2">
        <Button onClick={changeXp}>Increase XP</Button>
        <Button onClick={changeTheme}>
          {theme !== "light" ? <Sun /> : <Moon />}
          Change Theme to{" "}
          {theme === "light" ? "Dark" : "Light"}
        </Button>
      </div>
      <Link to="/">
        <Button variant={"link"}>Home page</Button>
      </Link>
    </>
  );
}
