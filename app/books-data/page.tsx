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
  title: string;
  genre: string;
  name: string;
  surname: string;
};
// published_date: Date | null;

// Function to fetch books from the database
async function fetchBooks(): Promise<Book[]> {
  const books = await client<Book[]>`SELECT
         book.id,
         book.title,
         book.genre,
         author.name,
         author.surname
  from book LEFT JOIN author ON book.author_id = author.id`;
  return books;
}

// Component to display books in a Shadcn table
export default async function Home() {
  const books = await fetchBooks();
  // console.log(books);

  return (
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
            <TableCell>{book.name + " " + book.surname}</TableCell>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.genre}</TableCell>
            <TableCell>{}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
