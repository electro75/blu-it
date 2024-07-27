import PostCreateForm from "@/components/post/post-create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostsByTopicSlug } from "@/db/queries/post";
import Link from "next/link";
interface ViewTopicPageProps {
    params: {
        slug: string
    }
}

export default function ViewTopicPage({params}: ViewTopicPageProps) {
    const {slug} = params


    return (
        <>
            <Link className="underline decoration-solid" href='/'>
                    {"< "}Back to Home
            </Link>
            <div className="grid grid-cols-4 gap-4 p-4">
                <div className="col-span-3">
                    <h1 className="text-2-xl font-bold mb-2 capitalize" >{slug}</h1>
                    <PostList fetchData={() => fetchPostsByTopicSlug(slug)}/>
                </div>

                <div>
                    <PostCreateForm slug={slug}/>
                </div>
            </div>
        </>
    )
}