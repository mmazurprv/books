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

// Define the Magazine type
type Magazine = {
  id: number;
  magazine_title_id: number;
  published_date: Date | null;
  genre: string;
};

// Function to fetch magazines from the database
async function fetchMagazines(): Promise<Magazine[]> {
  const magazines = await client<Magazine[]>`SELECT * FROM magazine`;
  return magazines;
}

// Component to display magazines in a Shadcn table
export default async function Home() {
  const magazines = await fetchMagazines();

  return (
    <Table>
      <TableCaption>A list of magazines</TableCaption>
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
        {magazines.map((magazine) => (
          <TableRow key={magazine.id}>
            <TableCell className="font-medium">{magazine.id}</TableCell>
            <TableCell>{magazine.author_id}</TableCell>
            <TableCell>{magazine.title}</TableCell>
            <TableCell>
              {magazine.published_date
                ? new Date(magazine.published_date).toDateString()
                : "N/A"}
            </TableCell>
            <TableCell>{magazine.genre}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
