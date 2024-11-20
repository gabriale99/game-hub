import useGenres from "@/hooks/useGenre";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((gen) => (
        <li key={gen.name}>{gen.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
