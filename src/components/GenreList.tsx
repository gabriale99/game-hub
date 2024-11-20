import useGenres from "@/hooks/useGenre";
import getCroppedImageURL from "@/services/image-url";
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (error) {
    return null;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <List.Root variant="plain">
      {data.map((genre) => (
        <List.Item key={genre.name} py="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageURL(genre.image_background)}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
