import Head from "next/head";
import { Categories, FeaturedPosts, PostCard, PostWidget } from "../components/index";
import {getPosts} from "../services/index";
// const posts = [
//   { title: "React Test", excerpt: "This is a test excerpt" },
//   { title: "React Test 2", excerpt: "This is a test excerpt 2" },
// ];
function Index({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Meti Blog</title>
      </Head>
      <FeaturedPosts/>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}
export default Index;
