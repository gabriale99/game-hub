import { Grid, GridItem } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ColorModeProvider>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem hideBelow="lg" area="aside">
          Aside
        </GridItem>
        <GridItem area="main">Main</GridItem>
      </Grid>
    </ColorModeProvider>
  );
}

export default App;
