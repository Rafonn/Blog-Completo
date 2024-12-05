import { PostData } from "@/domain/post";
import HomePage from "@/containers/homePage";
import { GetServerSideProps } from "next";
import { getAllPosts } from "@/data/posts/get-all-posts";

export type CategoryProps = {
    posts: PostData[];
    category: string;
};

export default function Category({ posts, category }: CategoryProps) {
    return <HomePage category={category} posts={posts} />;
  }

  export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const texto: string = Array.isArray(ctx.query.category) ? ctx.query.category[0] : ctx.query.category || "";

    const categoryUppercase = texto.charAt(0).toUpperCase() + texto.slice(1);
    const urlQuery = `&filters[category][name]=${categoryUppercase}`;

    const posts = await getAllPosts(urlQuery);

    return {
        props: { posts, category: texto },
    };
};
