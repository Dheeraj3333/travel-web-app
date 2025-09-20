import { redirect } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

const page = ({ params }: PageProps) => {
  const { slug } = params;

  redirect(`${slug}/deluxe`);

  return <div>page</div>;
};

export default page;
