import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      {/* Adding the image */}
      <Image
        src="/images/books_graph.png" // Path to your image in the public directory
        alt="Books Image" // Alt text for the image
        width={500} // Desired width of the image
        height={300} // Desired height of the image
        className="my-8" // Optional: Add any Tailwind CSS classes for styling
      />

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
