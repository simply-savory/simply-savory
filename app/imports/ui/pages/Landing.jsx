import React from 'react';
import { Grid, Image, List } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid container centered stackable columns={2}>

          <Grid.Column textAlign="center">
            <Image size="massive" src="/images/simply-savory-logo.png"/>
            <p>Simply Savory is a recipe sharing solution that creates a way for students (both on and off campus) to
              learn and share recipes that:
            </p>
            <List>
              <List.Item>Can be made using minimal kitchen facilities (at a minimum, a toaster oven).</List.Item>
              <List.Item>Can be made out of ingredients that are available within walking distance of UH.</List.Item>
              <List.Item>Suit local taste sensibilities.</List.Item>
              <List.Item>Can be filtered via dietary restrictions (gluten-free, vegan, etc).</List.Item>
              <List.Item>Have an estimated cost per serving.</List.Item>
              <List.Item>Has an estimated number of servings per recipe.</List.Item>
              <List.Item>Has an estimate of how long it takes to make.</List.Item>
            </List>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Landing;
