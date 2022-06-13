import {
  PostWidget,
  Categories,
  PostDetail,
  Author,
  CommentsForm,
  Comments,
} from "../../components/index";
import { getPostDetails } from "../../services";
function PostDetails({ post }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps({query}) {
  const data = (await getPostDetails(query.slug)) || [];
  return {
    props: {
     post: data,
    },
  };
}
export default PostDetails;
