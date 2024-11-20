import { Card } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" size="sm">
      <Skeleton height="200px"></Skeleton>
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
