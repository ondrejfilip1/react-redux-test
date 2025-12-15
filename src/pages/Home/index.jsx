import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { name, xp } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <h1 className="text-3xl tracking-tight font-bold my-4">Home page</h1>

      <Label>Name</Label>
      <p className="text-xl">{name}</p>
      <Label>XP</Label>
      <p className="text-xl">{xp}</p>
      <Label>Current theme</Label>
      <p className="text-xl">{theme}</p>
      <Link to="/profile">
        <Button variant={"link"}>Profile page</Button>
      </Link>
    </>
  );
}
