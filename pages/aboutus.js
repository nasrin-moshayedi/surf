import React, {Component} from 'react';
import DefaultLayout from '../layouts/default_layout';
import TeamMemberIndex from './../components/team_member_page/team_member';

class AboutUsPage extends Component {
  render() {
    return (
      <div>
        <DefaultLayout activeItem='team member'>
          <TeamMemberIndex/>
        </DefaultLayout>
      </div>
    );
  }
}

export default AboutUsPage;
