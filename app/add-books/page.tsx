import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Component to add a new book
export default function AddBook() {
  return (
    <div>
      <h1>Add New Book</h1>
      <form>
        <div>
          <Input type="email" placeholder="Email" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
