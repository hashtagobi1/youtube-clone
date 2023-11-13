import React from "react";

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const WatchID = ({ params, searchParams }: PageProps) => {
  console.log({ params, searchParams });
  return <div>WatchID {params.slug} </div>;
};

export default WatchID;
