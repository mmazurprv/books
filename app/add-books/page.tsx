import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Component to add a new book
export default function AddBook() {
  return (
    <div className="border-2">
      <h1 className="text-gray-400">Add New Book</h1>
      <form>
        <div className="flex flex-col gap-4 p-24 items-center justify-center">
          <Input placeholder="Title" />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
