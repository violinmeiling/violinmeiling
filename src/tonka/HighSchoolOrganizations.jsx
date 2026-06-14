import './HighSchoolOrganizations.css';

function HighSchoolOrganizations() {
  const organizations = [
    {
      name: 'Minnetonka Breezes Student Newspaper',
      period: '2020 – 2023',
      role: 'Deputy Editor, Arts and Entertainment',
      description: [
        'Managed staff writers and collaborated with other editors to publish monthly issues',
        'Created digital art and designed page layouts with Adobe InDesign',
        'Interviewed students, teachers, and professionals for articles',
        'Participated in the 2022 JEA/NSPA National High School Journalism Conference in St. Louis',
        'Previously served as staff writer and copy editor'
      ]
    },
    {
      name: 'Scherzo Music Tutoring',
      period: '2022 – 2023',
      role: 'Founder',
      description: [
        'Launched music tutoring program connecting younger orchestra students with upperclassmen musicians',
        'Led recruitment, outreach, and marketing',
        'Over 1000 minutes of lessons provided during the 2022–2023 school year'
      ]
    },
    {
      name: 'Minnetonka High School Writing Center',
      period: '2021 – 2023',
      role: 'Lead, Language and Power Team • Senior Writing Coach',
      description: [
        'Coached peers on writing and staffed reception desk',
        'Contributed over 60 service hours',
        'Received Writing Center Exemplary Service Award (2023)',
        'Led Language and Power team and organized letter-writing campaign',
        'Conducted inquiry project on improving ELL student experiences'
      ]
    },
    {
      name: 'Minnetonka High School Chamber Music Club',
      period: '2021 – 2023',
      role: 'Member',
      description: [
        'Performed with string quartet at senior living communities and school events'
      ]
    },
    {
      name: 'Student Innovation Team',
      period: '2022 – 2023',
      role: 'Member',
      description: [
        'Worked with administration to improve course registration',
        'Collected feedback and presented recommendations'
      ]
    },
    {
      name: 'Academic Anchor',
      period: '2021 – 2022',
      role: 'Tutor',
      description: [
        'Tutored AP Chemistry and AP Calculus students'
      ]
    },
    {
      name: 'Student Belonging Advisory Committee',
      period: '2022 – 2023',
      role: 'Member',
      description: [
        'Collaborated with administration on cultural inclusion initiatives',
        'Created educational materials promoting awareness of cultural holidays'
      ]
    },
    {
      name: 'National Honor Society',
      period: '2021 – 2023',
      role: 'Member',
      description: [
        'Completed over 100 service hours through tutoring, music education, and volunteering'
      ]
    },
    {
      name: 'First Mates Program',
      period: '2022 – 2023',
      role: 'Orientation Leader',
      description: [
        'Planned and facilitated orientation events for incoming freshmen'
      ]
    },
    {
      name: 'Minnesota State High School Mathematics League',
      period: '2020 – 2021',
      role: 'Competitor',
      description: []
    },
    {
      name: 'Minnesota Regional High School Science Bowl',
      period: '2019 – 2021',
      role: 'Competitor',
      description: []
    }
  ];

  return (
    <section className="hs-organizations">
      <div className="section-content">
        <h2>Organizations</h2>

        <div className="organizations-list">
          {organizations.map((org) => (
            <div key={org.name} className="organization-card">
              <div className="organization-header">
                <h3>{org.name}</h3>
                <span className="period">{org.period}</span>
              </div>

              <p className="role">{org.role}</p>

              {org.description.length > 0 && (
                <ul className="highlights">
                  {org.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HighSchoolOrganizations;