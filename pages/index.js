import React, {Component} from 'react';
import MyLayout from '../layouts/my_layout';
import TeamMember from './../components/team_member_page/team_member';

class Index extends Component {
  render() {
    return (
      <div>
        <MyLayout>
          <TeamMember/>
        </MyLayout>
      </div>
    );
  }
}

export default Index;
