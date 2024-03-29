interface Post {
    id: number;
    title: string;
    content: string;
    authorId: string;
}

class Forum {
    private posts: Post[] = [];
    private users: Map<number, string>;

    constructor() {
        this.users = new Map();
    }

    public registerUser(userId: number, username: string): void {
        if (this.users.has(userId)) {
            console.log("User already exists!");
        } else {
            this.users.set(username, userId); // Error here
        }
    }

    public createPost(userId: number, postId: number, title: string, content: string): boolean {
        if (!this.users.get(userId)) {
            console.error("User does not exist!");
            return false;
        }

        if (this.findPost(postId)) {
            console.error("Post already exists!");
            return false;
        }

        this.posts.push({
            id: postId,
            title,
            content,
            authorId: userId, // Error here
        });

        return true;
    }

    private findPost(postId: number): Post | undefined {
        return this.posts.find(post => post.id == postId); // Potential issue here
    }

    public editPost(userId: number, postId: number, newTitle: string, newContent: string): boolean {
        const post = this.findPost(postId);
        if (!post) {
            console.error("Post not found!");
            return false;
        }

        if (post.authorId !== userId) { // Error here
            console.error("User is not the author of the post!");
            return false;
        }

        post.title = newTitle;
        post.content = newContent;
        return true;
    }

    public deletePost(userId: number, postId: number): boolean {
        const postIndex = this.posts.findIndex(post => post.id === postId);
        if (postIndex === -1) {
            console.error("Post not found!");
            return false;
        }

        if (this.posts[postIndex].authorId !== userId) { // Error here
            console.error("User is not the author of the post!");
            return false;
        }

        this.posts.splice(postIndex, 1);
        return true;
    }
}
