import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Links() {
  return (
    <>
      <h1 className="text-3xl tracking-tight font-bold my-4">Content</h1>
      <Link to="/home">
        <Button variant={"link"}>Home page</Button>
      </Link>
      <Link to="/profile">
        <Button variant={"link"}>Profile page</Button>
      </Link>
      <Link to="/products">
        <Button variant={"link"}>Products page</Button>
      </Link>
    </>
  );
}
