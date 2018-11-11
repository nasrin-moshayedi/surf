import React, {Component} from 'react';
import TeamStory from './../team_story';
import TeamMamberList from './../team_member_list';

class TeamMemberIndex extends Component {
  render() {
    return (
      <div className='BodyBackground'>
        <TeamStory/>
        <TeamMamberList/>
      </div>
    );
  }
}

export default TeamMemberIndex;
