import './HighSchoolOrganizations.css';

function HighSchoolOrganizations() {
  const organizations = [
    {
      name: 'Minnetonka Breezes Student Newspaper',
      period: '2020 – 2023',
      role: 'Deputy Editor, Arts and Entertainment',
      description: [
        'Managed team of staff writers and collaborated with editor team to publish monthly issues for over 3000 readers',
        'Interviewed students, teachers, + professionals, wrote monthly articles, created digital art, designed pages, and edited the works of the rest of the staff',
        'Participated in the 2022 JEA/NSPA National High School Journalism Conference in St. Louis',
      ]
    },
    {
      name: 'Scherzo Music Tutoring',
      period: '2022 – 2023',
      role: 'Founder',
      description: [
        'Launched program to connect freshmen orchestra students without private music teachers with lessons from upperclassmen musicians',
        'Led recruitment, outreach, and marketing efforts to attract students, tutors, and parents',
        'Over 1000 minutes of lessons were provided to students by tutors during the 2022-2023 school year'
      ]
    },
    {
      name: 'Minnetonka High School Writing Center',
      period: '2021 – 2023',
      role: 'Lead, Language and Power Team • Senior Writing Coach',
      description: [
        'Spent over 60 hours coaching peers on their writing and staffing Writing Center reception desk',
        'Organized a letter-writing campaign in 2022 to elected officials in Minnesota ',
        'Designed research project on how to improve the experiences of ELL students in the Writing Center. Conducted student interviews + mock coachings and presented findings at information session',
        'Received Writing Center Exemplary Service Award for contributions to students and leadership team'
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
        'Improved the course registration process by minimizing the amount of course drops/changes',
        'Distributed surveys, collected feedback, and presented ideas for administrative approval and implementation'
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
        'Collaborated with students and school administration to improve cultural sensitivity in the classroom',
        'Created materials to promote cultural holidays and awareness of social issues'
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
      description: ["Competed at regional and state-level math competitions"]
    },
    {
      name: 'Minnesota Regional High School Science Bowl',
      period: '2019 – 2021',
      description: ["Competed in the Minnesota Regional High School Science Bowl"]
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