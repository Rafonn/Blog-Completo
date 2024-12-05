import { getAllPosts } from "@/data/posts/get-all-posts";
import { PostData } from "../domain/post"
import { GetStaticProps } from "next"
import HomePage from "@/containers/homePage";

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <HomePage posts = {posts}/>
  );
}

export const getStaticProps: GetStaticProps = async() => {
  const posts = await getAllPosts();

  return {
    props: { posts },
    //revalidate: 5000
  }
}