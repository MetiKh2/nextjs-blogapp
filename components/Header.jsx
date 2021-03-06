import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategories } from "../services";

 
function Header() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block   py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => {
            return (
              <Link href={`/category/${category.slug}`} key={category.slug}>
                <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
