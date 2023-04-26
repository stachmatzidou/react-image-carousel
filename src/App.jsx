import { useEffect, useState } from "react";
import "./App.css";
import UserInput from "./UserInput";
import Loading from "./Loading";
import Error from "./Error";
import NoResult from "./NoResult";
import Carousel from "./Carousel";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [query, setQuery] = useState("carousel");
    const [data, setData] = useState([]);

    const key = import.meta.env.VITE_API_KEY;
    const url = `https://pixabay.com/api/?key=${key}&q=${query}&per_page=10`;

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.hits.length === 0) {
                setIsLoading(false);
                setIsEmpty(true);
            }
            setData(data.hits);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            setIsError(true);
        }
    };

    useEffect(() => {
        fetchData();
    }, [query]);

    return (
        <main className="container">
            <UserInput setIsLoading={setIsLoading} setQuery={setQuery} />
            {isLoading ? (
                <Loading />
            ) : isError ? (
                <Error />
            ) : isEmpty ? (
                <NoResult />
            ) : (
                <Carousel data={data} />
            )}
        </main>
    );
}

export default App;
