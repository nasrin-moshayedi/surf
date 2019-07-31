import React from 'react';
import {Grid, Tab} from 'semantic-ui-react';
import UserInformation from 'user_information';

const panes = [
  {menuItem: 'User Info', render: () => <Tab.Pane><UserInformation/></Tab.Pane>},
  {menuItem: 'Shopping Info', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>},
  {menuItem: 'Payment', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>},
];

const TabExampleDefaultActiveIndex = () => (
  <Grid textAlign='center' style={{margin: 100}}>
    <Grid.Column width={12}>
      <Tab style={{margin: 100}} panes={panes} defaultActiveIndex={2}/>
    </Grid.Column>
  </Grid>
);

export default TabExampleDefaultActiveIndex;
