import { useState } from "react";
import Card from "./Card";
import FormContainer from "./FormContainer";
import { posts } from "../data/posts";

function Main() {
    const [postsList, setPostsList] = useState(posts);

    // Funzione per aggiungere un post
    const handleAddPost = (newPost) => {
        setPostsList([...postsList, newPost]);
    };

    // Funzione per eliminare un post tramite id
    const handleDeletePost = (id) => {
        const updatedPosts = postsList.filter((post) => post.id !== id);
        setPostsList(updatedPosts);
    };

    // Funzione per gestire i tag di un singolo post
    const handleTags = (id, tag) => {
        setPostsList((prevPosts) =>
            prevPosts.map((post) =>
                post.id === id
                    ? {
                        ...post,
                        tags: post.tags.includes(tag)
                            ? post.tags.filter((t) => t !== tag)
                            : [...post.tags, tag],
                    }
                    : post
            )
        );
    };

    return (
        <main className="container d-flex flex-wrap justify-content-center p-4 mt-4">
            {/* Renderizza i post pubblicati */}
            {postsList
                .filter((post) => post.published)
                .map((post) => (
                    <Card
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        image={post.image}
                        content={post.content}
                        tags={post.tags}
                        published={post.published}
                        onDelete={handleDeletePost}
                    />
                ))}

            {/* Componente FormContainer per gestire il form */}
            <FormContainer onAddPost={handleAddPost} posts={postsList} />
        </main>
    );
}

export default Main;
