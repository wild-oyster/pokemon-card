import "./styles.css";

import { Button, Input, Stack, Switch, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Card from "./Card";
import Loader from "./Loader";
import { axiosRequest } from "./request";

export default function App() {
  const [data, setData] = useState<Array<any>>([]);
  const [search, setSearch] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isFlipping, setIsFlipping] = useState<boolean>(true);

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
      <Stack direction={"row"} spacing={4} align={"center"}>
        <Input
          color={"white"}
          colorScheme={"blue"}
          size={"sm"}
          style={{
            marginRight: "10px",
          }}
          placeholder="Search a pokémon card"
          type="text"
          value={search || ""}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          color={"white"}
          colorScheme={"gray"}
          variant="outline"
          size={"sm"}
          onClick={searchCard}
        >
          Search
        </Button>
        <Switch
          size={"lg"}
          checked={isFlipping}
          onChange={() => setIsFlipping(!isFlipping)}
        />
        <Text width={300} color={"white"}>
          Switch display mode
        </Text>
      </Stack>
      <div className="App">
        {loading && <Loader />}
        {!loading &&
          data.length > 0 &&
          data.map((pokemon) => {
            if (!isFlipping)
              return <Card key={pokemon.id} src={pokemon.images.large} />;

            return (
              <img
                key={pokemon.id}
                src={pokemon.images.large}
                alt="pokemon"
                width="260"
                height="365"
                style={{
                  margin: "10px",
                  padding: "10px 10px 10px 10px",
                  borderRadius: "20px",
                }}
              />
            );
          })}
      </div>
    </div>
  );
}
