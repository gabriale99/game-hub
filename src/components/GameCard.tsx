import { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";
import React from "react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Header>
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
      </Card.Header>
      <Card.Body></Card.Body>
    </Card.Root>
  );
};

export default GameCard;
