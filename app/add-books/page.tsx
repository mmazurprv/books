import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addBook } from "@/lib/actions";

// Component to add a new book
export default function AddBook() {
  return (
    <div className="p-4 border-2">
      <h1 className="text-gray-400 text-center">Add New Book</h1>
      <form action={addBook}>
        <div className="flex flex-col gap-4 p-24 items-center justify-center">
          <Input placeholder="Title" name="title" />
          <Input placeholder="Genre" name="genre" />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
