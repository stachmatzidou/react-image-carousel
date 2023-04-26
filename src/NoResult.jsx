import { GiMagnifyingGlass } from "react-icons/gi";

const NoResult = () => {
    return (
        <section className="no-result-container">
            <GiMagnifyingGlass className="no-result-icon" />
            <h5>no images match your search</h5>
        </section>
    );
};
export default NoResult;
