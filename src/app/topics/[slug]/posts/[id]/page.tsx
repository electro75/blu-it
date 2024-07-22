import Link from "next/link";
import PostShow from "@/components/posts/post-show";
import { Suspense } from "react";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import paths from "@/paths";
import LoadingViewPosts from "@/components/posts/view-posts-loading";

interface PostShowPageProps {
  params: {
    slug: string;
    id: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, id } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.viewTopic(slug)}>
        {"< "}Back to {slug}
      </Link>
      <Suspense  fallback={LoadingViewPosts()}>
        <PostShow postId={id}/>
      </Suspense>
      
      <CommentCreateForm postId={id} startOpen />
      <CommentList postId={id} />
    </div>
  );
}
