import React from 'react';
import {Grid} from 'semantic-ui-react';
import TeamMember from './team_member';
import './team_member_list.css';

const TeamMemberIndex = () => (
  <div>
    <h1 className='DarkGrey CenterText'>Our Team</h1>
    <Grid container textAlign='center' className='TeamCardGrid' centered={true}>
      {[0, 1, 2].map(item =>
        <Grid.Column width={14} className='TeamMemberGrid'><TeamMember reverse={false} key={item}/></Grid.Column>
      )}
    </Grid>
  </div>
);
export default TeamMemberIndex;
