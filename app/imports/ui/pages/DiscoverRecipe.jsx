import React from 'react';
import { Container, Header, Card, Image, Button, Divider } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class DiscoverRecipe extends React.Component {
  render() {
    return (
        <Container>
          <Header as="h1" textAlign="center" size={'huge'}>Discover Recipe </Header>
          <Header as="h2" textAlign="left">Popular Recipe </Header>
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
            <Card>
              <Card.Content>
                <Card.Header>Cup noodles</Card.Header>
                <Image
                    floated='middle'
                    size='medium'
                    src='../../../images/Cup-Noodles-Curry.png'
                />
                <Card.Meta>Microwave</Card.Meta>
                <Card.Description>
                  Cup noodles for the college kids
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
                <Card.Header>Wagu steak</Card.Header>
                <Image
                    floated='middle'
                    size='medium'
                    src='../../../images/wagu-steak.jpg'
                />
                <Card.Meta>Expensive</Card.Meta>
                <Card.Description>
                  Very expensive steak
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
                <Card.Header>Kat</Card.Header>
                <Image
                    floated='middle'
                    size='medium'
                    src='../../../images/kat.jpg'
                />
                <Card.Meta>DO NOT COOK</Card.Meta>
                <Card.Description>
                  Just a picture of a cat
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
          <div class={'ui divider'}></div>

          <Header as="h2" textAlign="left">Recent search results </Header>
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
            <Card>
              <Card.Content>
                <Card.Header>Cup noodles</Card.Header>
                <Image
                    floated='middle'
                    size='medium'
                    src='../../../images/Cup-Noodles-Curry.png'
                />
                <Card.Meta>Microwave</Card.Meta>
                <Card.Description>
                  Cup noodles for the college kids
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
                <Card.Header>Wagu steak</Card.Header>
                <Image
                    floated='middle'
                    size='medium'
                    src='../../../images/wagu-steak.jpg'
                />
                <Card.Meta>Expensive</Card.Meta>
                <Card.Description>
                  Very expensive steak
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
                <Card.Header>Kat</Card.Header>
                <Image
                    floated='middle'
                    size='medium'
                    src='../../../images/kat.jpg'
                />
                <Card.Meta>DO NOT COOK</Card.Meta>
                <Card.Description>
                  Just a picture of a cat
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

export default DiscoverRecipe;
