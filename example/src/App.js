import React, { Component } from 'react';
import {
  Container, Header, Segment, Form,
  Checkbox, Dropdown, Radio, Divider, TextArea
} from 'semantic-ui-react';
import { FormField } from 'semantic-ui-react-ext';

export default class App extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <React.Fragment>
        <Header as="h1" style={{textAlign: 'center'}}>Semantic UI React Ext</Header>
        <Container style={{ paddingTop: 0 }}>
          <Segment attached>
            <Form>
              <FormField
                label='First Name'
                required
              />
              <FormField
                label='Last Name'
                required
                error='Invalid last name'
              />
              <FormField
                label='I consent to everything'
                control={Checkbox}
                defaultIndeterminate={true}
              />
              <FormField
                label='Use maximum power'
                control={Checkbox}
                slider
                defaultChecked={true}
                error='You do not have enough energy'
              />

              <Divider />

              <FormField
                label='Choice'
                control={Dropdown}
                placeholder='Your choice'
                fluid
                required
                selection
                options={[
                  {
                    key: 'one',
                    text: 'One',
                    value: 1
                  },
                  {
                    key: 'two',
                    text: 'Two',
                    value: 2
                  },
                  {
                    key: 'three',
                    text: 'Three',
                    value: 3
                  }
                ]}
              />

              <Divider />

              <Form.Field>
                Selected value: <b>{this.state.value}</b>
              </Form.Field>
              <FormField
                control={Radio}
                label='Choose this'
                name='radioGroup'
                value='this'
                checked={this.state.value === 'this'}
                onChange={this.handleChange}
              />
              <FormField
                control={Radio}
                label='Or that'
                name='radioGroup'
                value='that'
                checked={this.state.value === 'that'}
                onChange={this.handleChange}
                error={this.state.value === 'that' ? 'Not allowed' : ''}
              />

              <Divider />

              <FormField
                control={TextArea}
                label='Tell us the story of your life'
                required
              />
            </Form>
          </Segment>
        </Container>
      </React.Fragment>
    )
  }
}
