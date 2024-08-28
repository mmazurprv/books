import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex flex-col p-4 text-gray-300 gap-5 justify-center text-center border-gray-100 border-2 ">
      <p className="w-full">Menu - Books &amp; Magazines</p>
      <div className="flex flex-row gap-10 justify-center text-black">
        <Link href="/">Main</Link>
        <Link href="/authors-data">Authors</Link>
        <Link href="/books-data">Books</Link>
        <Link href="/magazines-data">Magazines</Link>
        <Link href="/">Tags</Link>
      </div>
    </div>
  );
}
