import React from 'react';
import { Grid, List, Header, Image, Segment } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class DisplayRecipe extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container>
          <Header textAlign='center' size='large'>The Perfect Cheese Omelette</Header>
          <Segment raised>Cook Time: 5 Minutes </Segment>
          <Image src='../public/images/eggomm.jpg'/>
          <Grid.Column width={4}>
            <List bulleted>
              <List.item>1 Organic Large Egg </List.item>
              <List.item>1 Teaspoon Whole Milk or Water </List.item>
              <List.item>1 Teaspoon Butter or Oil </List.item>
              <List.item>1 Tablespoon Cheddar Cheese, Shredded </List.item>
            </List>
          </Grid.Column>

          <Grid.Column width={8}>
            <Header textAlign='center' size='medium'>Instructions </Header>
            <List ordered>
              <List.item>Whisk the egg and milk in a bowl with a fork until thoroughly combined. </List.item>
              <List.item>Melt butter in a 6 or 8-inch omelette pan over medium heat (approximately 30 seconds) making
                sure it coats the bottom of the pan. As soon as the butter stops bubbling (and before it starts to
                brown) slowly pour in the egg mixture. </List.item>
              <List.item> Pour in the egg mixture tilting the pan to spread it evenly. Let the egg firm up a little, and
                after about ten-seconds shake the pan a bit and use a spatula to gently direct the mixture away from the
                sides and into the middle. Allow the remaining liquid to then flow into the space left at the sides of
                the pan.</List.item>
              <List.item>Continue to cook for another minute or so until the egg mixture holds together. Do not let the
                underside of the eggs brown. </List.item>
              <List.item>Sprinkle the top with the shredded cheese and with a spatula; gently fold the omelette in a
                half moon shape. </List.item>
              <List.item>Continue to cook another 30 seconds or until the omelette is thoroughly cooked
                through. </List.item>
            </List>
          </Grid.Column>

        </Grid>
    );
  }
}

export default DisplayRecipe;
