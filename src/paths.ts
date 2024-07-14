const paths = {
    home() {
        return '/'
    },
    viewTopic(topicSlug: string) {
        return `/topics/${topicSlug}`
    },
    createPost(topicSlug: string) {
        return `/topics/${topicSlug}/posts/new`
    },
    viewPost(topicSlug: string, postId: string) {
        return `/topics/${topicSlug}/posts/${postId}`
    }
}

export default paths;