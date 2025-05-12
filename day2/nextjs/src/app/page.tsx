import Link from "next/link";

export default async function Home() {
  return (
    <div className="text-lg h-screen flex justify-center items-center">
      <div>
        <div className="text-3xl ml-13 font-black">Todo application</div>
        <div className="flex">
          <Link
            className="text-md rounded border-green-400 p-2  border m-2"
            href="/Signin"
          >
            Sign In to Todo App
          </Link>
          <br />
          <Link
            className="text-md rounded  border-green-400 p-2  border m-2"
            href="/Signup"
          >
            Sign Up to Todo App
          </Link>
        </div>
      </div>
    </div>
  );
}
