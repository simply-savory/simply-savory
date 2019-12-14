import React from 'react';
import { Container, Header, Grid, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class RandomRecipe extends React.Component {
  render() {
    return (
        <Container>
          <Header as="h1" textAlign="center" size={'huge'}>Random Recipe</Header>
          <Grid centered>
            <Button>
              Im feeling lucky
            </Button>
          </Grid>
        </Container>
    );
  }
}

export default RandomRecipe;
