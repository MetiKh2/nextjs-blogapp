import Image from "next/image";
import React from "react";

function Author({ author }) {
  return (
    <div className="text-center mt-20 p-12 mb-8 relative rounded-lg bg-opacity-20 bg-black ">
      <div className="absolute left-0 right-2 -top-14 ">
        <Image
          src={author.photo.url}
          height="100px"
          className="align-middle rounded-full"
          width={100}
          alt={author.name}
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
}

export default Author;
