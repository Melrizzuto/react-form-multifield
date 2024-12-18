import { useState } from "react";
import MyForm from "./MyForm"

function FormContainer({ onAddPost, posts }) {
    const [isFormVisible, setFormVisible] = useState(false); //form non visibile

    const toggleForm = () => {
        setFormVisible(!isFormVisible); //lo nego per renderlo true
    };

    return (
        <>
            {/* icona + per aprire il form */}
            <div
                className="add-post-icon"
                onClick={toggleForm}
            >
                <i className="fa-solid fa-plus"></i>
            </div>

            {/* gestisco la visibilità del form con operatore ternario */}
            {isFormVisible ? <MyForm onAddPost={onAddPost} posts={posts} /> : null}
        </>
    );
};

export default FormContainer;