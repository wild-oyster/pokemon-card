import "./styles.css";

import { Button, Input, Stack, Switch, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { AxiosResponse } from "axios";
import Card from "./components/Card/Card";
import { Card as CardType } from "./interfaces/card";
import Loader from "./components/Loader/Loader";
import { axiosRequest } from "./api/request";
import { groupApiCardsTransformer } from "./api/transformers/groupApiCardsTransformer";

export default function App() {
  const [data, setData] = useState<CardType[]>([]);
  const [search, setSearch] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isFlipping, setIsFlipping] = useState<boolean>(true);

  const searchCard = async () => {
    setLoading(true);
    const url = search ? `cards?q=name:${search}` : "cards";
    try {
      const response = await axiosRequest(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getCards = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<CardType[]> = await axiosRequest("cards");
      console.log(groupApiCardsTransformer(response.data));
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Stack padding={"20px"} direction={"row"} spacing={4} align={"center"}>
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
        <Button size={"sm"} onClick={searchCard}>
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
          data.map((card) => {
            return (
              <Card
                key={card.id}
                src={card.images.large}
                flipped={isFlipping}
              />
            );
          })}
      </div>
    </div>
  );
}
