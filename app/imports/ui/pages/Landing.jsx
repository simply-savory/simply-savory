import React from 'react';
import { Container, Header, Card, Image, Button, Icon, List } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Container>
          <Header as="h1" textAlign="center">WHAT IS SIMPLY SAVORY?</Header>
          <p textAlign="center">
            Simply Savory is a recipe sharing solution that creates a way for students
            (both on and off campus) to learn and share recipes that:
<List bulleted>
  <List.Item>Can be made using minimal kitchen facilities (at a minimum, a toaster oven).</List.Item>
  <List.Item>Can be made out of ingredients that are available within walking distance of UH.</List.Item>
  <List.Item>Suit local taste sensibilities.</List.Item>
  <List.Item>Can be filtered via dietary restrictions (gluten-free, vegan, etc).</List.Item>
  <List.Item>Have an estimated cost per serving.</List.Item>
  <List.Item>Has an estimated number of servings per recipe.</List.Item>
  <List.Item>Has an estimate of how long it takes to make.</List.Item>
</List>
          </p>
          <Header as="h2" textAlign="center">New Recipes</Header>
          <Card.Group itemsPerRow={3}>
            <Card>
              <Card.Content>
                <Card.Header>Egg on burger</Card.Header>
                <Image
                    floated='middle'
                    size='medium'
                    src='../../../images/samplefood.jpg'
                />
                <Card.Meta>Simple , Eggs</Card.Meta>
                <Card.Description>
                  A simple egg meal on top of burger meat
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui three buttons'>
                  <Button basic color='green'>
                    Like
                  </Button>
                  <Button basic color='red'>
                    Dislike
                  </Button>
                  <Button icon color={'red'}>
                    <Icon name='heart' />
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
                    src='../../../images/samplefood.jpg'
                />
                <Card.Meta>Eggs</Card.Meta>
                <Card.Description>
                  I am not sure what a egg omelet is
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui three buttons'>
                  <Button basic color='green'>
                    Like
                  </Button>
                  <Button basic color='red'>
                    Dislike
                  </Button>
                  <Button icon color={'red'}>
                    <Icon name='heart' />
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Cup noodles</Card.Header>
                <Image
                    floated='middle'
                    size='medium'
                    src='../../../images/samplefood.jpg'
                />
                <Card.Meta>Microwave</Card.Meta>
                <Card.Description>
                  Cup noodles for the college kids
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui three buttons'>
                  <Button basic color='green'>
                    Like
                  </Button>
                  <Button basic color='red'>
                    Dislike
                  </Button>
                  <Button icon color={'red'}>
                    <Icon name='heart' />
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
    );
  }
}

export default Landing;
