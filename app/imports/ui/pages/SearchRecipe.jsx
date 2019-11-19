import React from 'react';
import { Container, Header, Card, Image, Button} from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class SearchRecipe extends React.Component {
  render() {
    return (
        <Container>
          <Header as="h1" textAlign="center" size={'huge'}>Search recipe</Header>
          <Header as="h2" textAlign="left">Showing result for &quot;eggs&quot; </Header>
          <Card.Group itemsPerRow={6}>
            <Card>
              <Card.Content>
                <Card.Header>Egg on burger</Card.Header>
                <Image
                    floated='middle'
                    size='medium'
                    src='../../../images/sampleegg.jpg'
                />
                <Card.Meta>Simple , Eggs</Card.Meta>
                <Card.Description>
                  A simple egg meal on top of burger meat
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Like
                  </Button>
                  <Button basic color='red'>
                    Dislike
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Egg omelet</Card.Header>
                <Image
                    floated='middle'
                    size='medium'
                    src='../../../images/eggomm.jpg'
                />
                <Card.Meta>Eggs</Card.Meta>
                <Card.Description>
                  I am not sure what a egg omelet is
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Like
                  </Button>
                  <Button basic color='red'>
                    Dislike
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
    );
  }
}

export default SearchRecipe;
