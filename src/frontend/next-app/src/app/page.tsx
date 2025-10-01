import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid">
      <main className="flex flex-col items-center gap-3 justify-center min-h-screen">
        <h1 className="text-6xl font-semibold text-center mb-4">
          Welcome to my Form
        </h1>
        <p className="text-2xl ">
          Proceed to&nbsp;
          <Link href="/target" className="text-blue-500 underline font-mono">
            form
          </Link>
        </p>
      </main>
    </div>
  );
}
