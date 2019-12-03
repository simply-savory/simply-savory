import React from 'react';
import { Grid, List, Header, Image, Segment, GridColumn, Container, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class DisplayRecipe extends React.Component {
  render() {
    return (
        <Container>
          <Header textAlign='center' size='large'>The Perfect Cheese Omelette</Header> <br/>
          <Segment raised><b>Cook Time:</b> 5 Minutes                   <b>Ratings (43):</b> <Icon size='small' name='star'/><Icon size='small' name='star'/><Icon size='small' name='star'/><Icon size='small' name='star'/><Icon size='small' name='star half'/>       <b>Category:</b>Breakfast</Segment> <br/>
          <Image size='big' centered src='../../../images/eggomm.jpg'/>

          <Grid>

            <GridColumn width={4}>
              <Header textAlign='center' size='medium'>Ingredients List </Header>
              <List bulleted>
                <List.Item>1 Organic Large Egg </List.Item>
                <List.Item>1 Teaspoon Whole Milk or Water </List.Item>
                <List.Item>1 Teaspoon Butter or Oil </List.Item>
                <List.Item>1 Tablespoon Cheddar Cheese, Shredded </List.Item>
              </List>
            </GridColumn>
            <GridColumn width ={12}>
              <Header textAlign='center' size='medium'> Steps & Procedure </Header>
              <List ordered>
              <List.Item>Whisk the egg and milk in a bowl with a fork until thoroughly combined. </List.Item>
              <List.Item>Melt butter in a 6 or 8-inch omelette pan over medium heat (approximately 30 seconds) making
                sure it coats the bottom of the pan. As soon as the butter stops bubbling (and before it starts to
                brown) slowly pour in the egg mixture. </List.Item>
              <List.Item> Pour in the egg mixture tilting the pan to spread it evenly. Let the egg firm up a little, and
                after about ten-seconds shake the pan a bit and use a spatula to gently direct the mixture away from the
                sides and into the middle. Allow the remaining liquid to then flow into the space left at the sides of
                the pan.</List.Item>
              <List.Item>Continue to cook for another minute or so until the egg mixture holds together. Do not let the
                underside of the eggs brown. </List.Item>
              <List.Item>Sprinkle the top with the shredded cheese and with a spatula; gently fold the omelette in a
                half moon shape. </List.Item>
              <List.Item>Continue to cook another 30 seconds or until the omelette is thoroughly cooked
                through. </List.Item>
              </List>
            </GridColumn>
          </Grid>

        </Container>
    );
  }
}

export default DisplayRecipe;
