import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1 className="text-3xl tracking-tight font-bold my-4">About page</h1>
      <Link to="/">Go Home</Link>
    </>
  );
}
