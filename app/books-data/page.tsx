import { Button } from "@/components/ui/button";
import Link from "next/link"; // Import the Link component for client-side navigation
import { client } from "@/lib/db/postgres";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define the Book type
type Book = {
  id: number;
  book_title: string;
  genre: string;
  authors: string;
};
// published_date: Date | null;

// Function to fetch books from the database
async function fetchBooks(): Promise<Book[]> {
  const books = await client<Book[]>`
    SELECT
      b.id,
      b.title AS book_title,
      b.genre,
      COALESCE(STRING_AGG(a.name || ' ' || a.surname, ', '), '') AS authors
    FROM
      book b
    LEFT JOIN
      book_author ba ON b.id = ba.book_id
    LEFT JOIN
      author a ON a.id = ba.author_id
    GROUP BY
      b.id
    ORDER BY
      b.id`;
  return books;
}

// Component to display books in a Shadcn table
export default async function Home() {
  const books = await fetchBooks();
  // console.log(books);

  return (
    <div>
      {/* Add Book button wrapped in Link component for navigation */}

      <Link href="/add-books" className="w-12 items-center">
        <Button variant="secondary" type="button" className="p-5">
          Add Book
        </Button>
      </Link>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Author </TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell className="font-medium">{book.id}</TableCell>
              <TableCell>{book.authors}</TableCell>
              <TableCell>{book.book_title}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
