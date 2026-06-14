import './WorkExperience.css';

function WorkExperience() {
  const experiences = [
    {
      id: 1,
      company: 'RBC, Solution Acceleration & Innovation',
      location: 'Orlando, Florida',
      positions: [
        {
          title: 'Applied AI Intern',
          period: 'June 2026 - Present',
          duration: 'Current',
          highlights: []
        },
        {
          title: 'Innovation Intern',
          period: 'June 2025 - August 2025',
          duration: '3 mos',
          highlights: []
        }
      ]
    },
    {
      id: 2,
      company: 'National University of Singapore',
      location: 'Queenstown, Singapore',
      positions: [
        {
          title: 'Research Intern',
          period: 'May 2024 - July 2024',
          duration: '3 mos',
          highlights: [
            'Developed computer vision model for identifying lettuce leaf diseases in aquaponics systems in collaboration with V-Plus Agritech, a Singapore-based sustainable farming startup',
            'Proved the effectiveness of generative adversarial networks for image dataset augmentation'
          ]
        }
      ]
    },
    {
      id: 3,
      company: 'Securian Financial',
      location: 'St. Paul, Minnesota',
      positions: [
        {
          title: 'Engineering Analyst Intern',
          period: 'June 2023 - August 2023',
          duration: '3 mos',
          highlights: []
        }
      ]
    },
    {
      id: 4,
      company: 'Claire Givens Violins Inc',
      location: 'Minneapolis, Minnesota',
      positions: [
        {
          title: 'Intern',
          period: 'June 2021 - August 2022',
          duration: '1 yr 3 mos',
          highlights: []
        }
      ]
    },
    {
      id: 5,
      company: 'Violin Teacher',
      location: 'Minnetonka, Minnesota',
      positions: [
        {
          title: 'Self-employed',
          period: 'June 2020 - June 2023',
          duration: '3 yrs 1 mo',
          highlights: [
            'Taught weekly private violin lessons',
            'Founded and directed Scherzo Music Tutoring program at Minnetonka High School (2022-2023)'
          ]
        }
      ]
    }
  ];

  return (
    <section className="work-experience" id="work">
      <div className="section-content">
        <h2>Work experience</h2>
        <div className="experiences-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="company-header">
                <h3 className="company">{exp.company}</h3>
              </div>
              <p className="location">{exp.location}</p>
              
              <div className="positions-container">
                {exp.positions.map((position, index) => (
                  <div key={index} className="position">
                    <div className="position-content">
                      <div className="position-header">
                        <h4>{position.title}</h4>
                        <span className="duration">{position.duration}</span>
                      </div>
                      <p className="period">{position.period}</p>
                      {position.highlights.length > 0 && (
                        <ul className="highlights">
                          {position.highlights.map((highlight, hIndex) => (
                            <li key={hIndex}>{highlight}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
