import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="fixed w-full flex bg-white py-2 px-5 shadow-md">
      <ul className="flex text-white ml-5">
        <Link href="/">
          <li className="mr-3 cursor-pointer border border-none bg-red-600 rounded-md py-1 px-1  hover:bg-red-800">Home</li>
        </Link>
        <Link href="/heroes">
          <li className="mr-3 cursor-pointer border border-none  bg-red-600 rounded-md py-1 px-1 outline-none  hover:bg-red-800">Heroes</li>
        </Link>
        <Link href="/gallery">
          <li className="mr-3 cursor-pointer border border-none  bg-red-600 rounded-md py-1 px-1 outline-none  hover:bg-red-800">Gallery</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;