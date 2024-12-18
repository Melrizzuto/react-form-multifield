import { useState } from "react";
import { tags } from "../data/posts";

function MyForm({ onAddPost, posts }) {

    // Stati del form
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [published, setPublished] = useState(true);
    const [tagsSelected, setTagsSelected] = useState([]);
    const tagList = tags();

    // Fn per gestire il submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Nuovo post con i dati raccolti
        const newPost = {
            id: posts.length + 1,
            title,
            content,
            image,
            tags: tagsSelected,
            published,
        };

        // Fn passata dal main
        onAddPost(newPost);

        // Resetta i campi del form
        setTitle("");
        setContent("");
        setImage("");
        setPublished(true);
        setTagsSelected([]);
    };

    // Gestione dei tag selezionati
    const handleTagChange = (tag) => {
        setTagsSelected((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 rounded shadow-lg bg-light m-auto my-4">
            <h3 className="mb-4 text-center text-secondary">Aggiungi post</h3>

            {/* title */}
            <div className="mb-3">
                <label htmlFor="title" className="form-label fw-bold">
                    Titolo
                </label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Inserisci il titolo del nuovo post"
                    required
                    id="title"
                    name="title"
                />
            </div>

            {/* content */}
            <div className="mb-3">
                <label htmlFor="content" className="form-label fw-bold">
                    Contenuto
                </label>
                <textarea
                    className="form-control"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Inserisci il contenuto del post"
                    id="content"
                    name="content"
                ></textarea>
            </div>

            {/* url img */}
            <div className="mb-3">
                <label htmlFor="image" className="form-label fw-bold">
                    Immagine (URL)
                </label>
                <input
                    type="text"
                    className="form-control"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Inserisci l'URL dell'immagine"
                    id="image"
                    name="image"
                />
            </div>

            {/* checkbox published */}
            <div className="form-check mb-3">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={published}
                    onChange={(e) => setPublished(e.target.checked)}
                    id="published"
                    name="published"
                />
                <label htmlFor="published" className="form-check-label">
                    Pubblicalo
                </label>
            </div>

            {/* check tags */}
            {tagList.map((tag, index) => (
                <div className="form-check mb-3" key={index}>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={tagsSelected.includes(tag)}
                        onChange={() => handleTagChange(tag)}
                        id={`tag-${index}`}
                        name={`tag-${index}`}
                        value={tag}
                    />
                    <label htmlFor={`tag-${index}`} className="form-check-label">
                        {tag}
                    </label>
                </div>
            ))}

            {/* btn submit */}
            <div className="d-grid">
                <button type="submit" className="btn btn-secondary">
                    Aggiungi
                </button>
            </div>
        </form>
    );
};

export default MyForm;


