import Link from "next/link";

interface Params {
  params: { id: string };
}

const Page = ({ params }: Params) => {
  const { id } = params;

  return (
    <Link href={`/products/${id}`}>
      <div className="p-4 border rounded hover:shadow cursor-pointer">
        <h2 className="text-lg font-semibold">View Product: {id}</h2>
        
      </div>
    </Link>
  );
};

export default Page;
