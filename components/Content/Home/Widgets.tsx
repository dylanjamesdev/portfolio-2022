"use strict";

export default function Widgets() {
  return (
    <section className="animate__animated animate__fadeInUp interests pt-5 pb-5">
      <h1 className="display-4">Ah, the widgets</h1>
      <p className="lead pl-2 text-white">
        This site couldn't be completed without some widgets.
      </p>
      <br />
      <div className="col-lg-8 pb-5">
        <img
          style={{ width: "100%" }}
          src="https://metrics.lecoq.io/dylanjamesdev?template=classic&repositories.forks=true&repositories.affiliations=member&languages=1&habits=1&followup=1&people=1&stargazers=1&activity=1&code=1&lines=1&introduction=1&wakatime=1&traffic=1&stars=1&music=1&skyline=1&languages.limit=8&languages.threshold=0%25&languages.colors=github&languages.sections=most-used&languages.indepth=false&languages.analysis.timeout=15&languages.categories=markup%2C%20programming&languages.recent.categories=markup%2C%20programming&languages.recent.load=300&languages.recent.days=14&stars.limit=4&habits.from=200&habits.days=14&habits.facts=true&habits.charts=true&habits.trim=false&followup.sections=repositories&followup.indepth=true&people.limit=24&people.identicons=false&people.size=28&people.types=followers%2C%20following&people.shuffle=false&stargazers.charts.type=classic&code.lines=12&code.load=100&code.days=3&code.visibility=public&activity.limit=5&activity.load=300&activity.days=14&activity.visibility=all&activity.timestamps=false&activity.filter=all&introduction.title=true&skyline.year=current-year&skyline.frames=60&skyline.quality=0.5&skyline.compatibility=false&music.provider=spotify&music.playlist=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F2ScWfoPJjsIfsw4LBE64t8%3Fsi%3D3f921b95a6734233&music.limit=4&music.played.at=true&music.time.range=short&music.top.type=tracks&music.user=.user.login&wakatime.days=7&wakatime.sections=time%2C%20projects%2C%20projects-graphs%2C%20languages%2C%20languages-graphs%2C%20editors%2C%20os&wakatime.limit=5&wakatime.url=https%3A%2F%2Fwakatime.com&wakatime.user=dylanjamesdev&config.timezone=America%2FNew_York"
        />
        <br />
        <br />
        <codersrank-skills-chart
          username="dylanjamesdev"
          labels
          legend
          tooltip
        ></codersrank-skills-chart>
        <br />
        <br />
        <figure>
          <embed src="https://wakatime.com/share/@dylanjamesdev/9fb90fd2-9600-4e31-8042-299bd6e2f7ae.svg"></embed>
        </figure>
      </div>
    </section>
  );
}
