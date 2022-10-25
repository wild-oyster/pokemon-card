import "./styles.css";

import { useEffect, useState } from "react";

import Card from "./Card";
import Loader from "./Loader";
import { axiosRequest } from "./request";

export default function App() {
  const [data, setData] = useState<Array<any>>([]);
  const [search, setSearch] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const searchCard = () => {
    setLoading(true);
    const url = search ? `cards?q=name:${search}` : "cards";
    axiosRequest(url)
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    axiosRequest("cards")
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "20px",
        }}
      >
        <input
          style={{
            marginRight: "10px",
          }}
          placeholder="Search a pokémon card"
          type="text"
          value={search || ""}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchCard}>Search</button>
      </div>
      <div className="App">
        {loading && <Loader />}
        {!loading &&
          data.length > 0 &&
          data.map((pokemon) => (
            <Card key={pokemon.id} src={pokemon.images.large} />
          ))}
      </div>
    </div>
  );
}
