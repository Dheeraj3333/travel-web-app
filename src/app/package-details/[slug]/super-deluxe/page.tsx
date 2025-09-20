import PackageDetails from '@/containers/packageDetails';
import React from 'react'


interface PageProps {
  params: {
    slug: string;
  };
}
const page = async ({params} : PageProps) => {

    const {slug} = await params;

  return (
    <PackageDetails type='super-deluxe' packageName={slug}/>
  )
}

export default page