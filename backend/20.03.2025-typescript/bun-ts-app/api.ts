interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await response.json();
    return posts;
};

fetchPosts().then((posts) => {
    posts.forEach((post) => {
        console.log(`Title: ${post.title}`);
    });
});