import { useState } from "react";

const UserInput = ({ setIsLoading, setQuery }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setQuery(e.target.query.value);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <fieldset>
                <legend className="title">Pick a category</legend>
                <label htmlFor="query" className="form-label"></label>
                <input
                    className="form-input"
                    type="text"
                    name="query"
                    id="query"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="btn btn-block">
                    search
                </button>
            </fieldset>
        </form>
    );
};
export default UserInput;
