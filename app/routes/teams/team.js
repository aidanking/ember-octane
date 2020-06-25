import Route from '@ember/routing/route';

export default class TeamsTeamRoute extends Route {
  async model({ teamId }) {
    const resp = await fetch(`/api/teams/${teamId}`);

    return resp.json();
  }
}
