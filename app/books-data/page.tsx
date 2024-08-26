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
  author_id: number;
  title: string;
  published_date: Date | null;
  genre: string;
};

// Function to fetch books from the database
async function fetchBooks(): Promise<Book[]> {
  const books = await client<Book[]>`SELECT * FROM book`;
  return books;
}

// Component to display books in a Shadcn table
export default async function Home() {
  const books = await fetchBooks();

  return (
    <Table>
      <TableCaption>A list of books</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Author ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Published Date</TableHead>
          <TableHead>Genre</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.map((book) => (
          <TableRow key={book.id}>
            <TableCell className="font-medium">{book.id}</TableCell>
            <TableCell>{book.author_id}</TableCell>
            <TableCell>{book.title}</TableCell>
            <TableCell>
              {book.published_date
                ? new Date(book.published_date).toDateString()
                : "N/A"}
            </TableCell>
            <TableCell>{book.genre}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
