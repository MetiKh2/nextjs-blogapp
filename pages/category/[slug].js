import { Categories, PostCard } from "../../components";
import { getPostsByCategory } from "../../services/index";
function CategoryPost({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const data =await getPostsByCategory(query.slug) || [];
  return {
    props: {
      posts: data,
    },
  };
}

export default CategoryPost;
