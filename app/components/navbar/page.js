import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex bg-gray-800 py-2 px-5">
      <ul className="flex text-white ml-5">
        <Link href="/">
          <li className="mr-3 cursor-pointer">Home</li>
        </Link>
        <Link href="/product">
          <li className="mr-3 cursor-pointer">Product</li>
        </Link>
        <Link href="/posts">
          <li className="mr-3 cursor-pointer">Posts</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;