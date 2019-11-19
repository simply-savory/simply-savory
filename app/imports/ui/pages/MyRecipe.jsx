import React from 'react';
import { Container, Header, Card, Image, Button, Icon, Divider, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RecipeOptions = [
  { key: 'Egg on burger', text: 'Egg on burger', value: 'Egg on burger' },
  { key: 'Egg omelet', text: 'Egg omelet', value: 'Egg omelet' },
  { key: 'Cup Noodle', text: 'Cup Noodle', value: 'Cup Noodle' },
  { key: 'Wagyu Steak', text: 'Wagyu Steak', value: 'Wagyu Steak' },
  { key: 'Kat', text: 'Kat', value: 'Kat' },
];

/** A simple static component to render some text for the landing page. */
class MyRecipe extends React.Component {
  render() {
    return (
        <Container>
          <Header as="h1" textAlign="center" size={'huge'}>My Recipes </Header>
          <Dropdown
              button
              className='icon'
              floating
              labeled
              icon='food'
              options={RecipeOptions}
              search
              text='Search My Recipes'/>
          <Header as="h2" textAlign="left">Most Recent </Header>
          <Card.Group itemsPerRow={4}>
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
            <Card as={ Link } to='/Recipe'>
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
                    src='../../../images/Cup-Noodles-Curry.png'
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
          <Divider horizontal/>

          <Header as="h2" textAlign="left">Most Popular </Header>
          <Card.Group itemsPerRow={4}>
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
              </Card.Content>
            </Card>
            <Card as={ Link } to='/Recipe'>
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
                    src='../../../images/Cup-Noodles-Curry.png'
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

export default MyRecipe;
