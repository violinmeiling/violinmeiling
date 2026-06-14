import { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import './MultiTabSection.css';
import { Link } from 'react-router-dom';

function MultiTabSection() {
  const [activeTab, setActiveTab] = useState('projects');
  const tabRef = useRef(null);
  const hasMounted = useRef(false);

  // ✅ FIX: scroll AFTER tab changes (not inside click handler)
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const el = document.getElementById('tabs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeTab]);

  const projects = [
    {
      id: 1,
      title: 'Dewey',
      year: '2026',
      excerpt: 'Built for startup Dewey: a social platform for discovering, tracking, and sharing books, powered by personalized recommendations. Developed and deployed mobile app to test users using React Native, Expo, and Supabase. Implemented all major app features, including background LLM tagging for books, ML and collaborative filtering-based recommendation algorithm, onboarding flow, and post creation/book logging/social profile behavior.',
      link: 'https://docs.google.com/presentation/d/1xdDaFzbXz49HziJmyBLRc23fKSy1aYOt2vkKBQatgIk/edit?usp=sharing',
      tags: ['Product development', 'Collaborative filtering', 'Machine learning', 'Full-stack mobile app'],
      award: 'Project Lead, Penn Spark',
      external: true,
      externalLink: 'https://docs.google.com/presentation/d/1xdDaFzbXz49HziJmyBLRc23fKSy1aYOt2vkKBQatgIk/edit?usp=sharing'
    },
    {
      id: 2,
      title: 'Penn Forward: Access, Affordability, and Value',
      year: '2025',
      excerpt: '"A university-wide initiative to shape Penn\'s future." Collaborated with administrative staff and faculty to develop initiatives to improve the accessibility and affordability of a Penn education across undergraduate admissions, financial aid, and student support services.',
      link: 'https://www.upenn.edu/pennforward',
      tags: ['Higher education', 'Strategic planning', 'policy'],
      award: 'Access, Affordability, and Value undergraduate committee member',
      external: true,
      externalLink: 'https://www.upenn.edu/pennforward'
    },
    {
      id: 3,
      title: 'Penn Museum: Into the Blue',
      year: '2025',
      excerpt: 'A companion app to Penn Museum\'s "Into the Blue" Student Exhibition to guide visitors around the use of the color blue in artifacts throughout history by turning pictures of blue objects into stickers for users to arrange their collected stickers into their own exportable board. The exhibit ran from 2025 to 2026, reaching over 1000 museum visitors.',
      link: '/pages/blue',
      tags: ['Next.js', 'React', 'Computer vision'],
      award: 'Penn Museum',
      externalLink: 'https://penn.museum/sites/blue/'
    },
    {
      id: 4,
      title: 'Stride',
      year: '2024',
      excerpt: 'Saving the environment one API call at a time.',
      link: '/pages/stride',
      tags: ['React Native', 'Expo', 'Node.js', 'DynamoDB', 'AWS S3', 'Google Maps API'],
      award: 'Project Lead, Penn Spark'
    },
    {
      id: 5,
      title: 'My Health Passport',
      year: '2024',
      excerpt: 'No more "Forgot Password?" at the doctor\'s office.',
      link: '/pages/mhp',
      tags: ['MongoDB', 'Flask', 'Python', 'PropelAuth', 'Gemini'],
      award: '2024 PennApps Hackathon'
    },
    {
      id: 6,
      title: 'Application of generative image models to computer vision for identifying plant leaf diseases in aquaponics systems',
      year: '2024',
      excerpt: 'So you want to be a lettuce farmer?',
      link: '/pages/nus',
      tags: ['Python', 'Computer vision', 'GANs', 'Neural networks', 'Machine learning'],
      award: 'Research Intern, National University of Singapore',
    },
    {
      id: 7,
      title: 'SquishModel',
      year: '2024',
      excerpt: 'I turned your 3D stuffed animals into browser objects.',
      link: '/pages/squishmodel',
      tags: ['Swift', 'iOS Object Capture', 'Three.js', 'AWS S3', 'WebSockets'],
      award: 'Software developer, Penn Spark'
    },
    {
      id: 8,
      title: 'Spark Insight',
      year: '2024',
      excerpt: 'Linkedin Translator: "A cutting-edge, AI-driven visualization program to synthesize resume metadata with early professional career aspirations to empower young professionals in pursuing their next strategic milestone."',
      link: '/pages/sparkinsight',
      tags: ['Python', 'Nomic AI', 'Natural language processing', 'Data visualization'],
      award: 'Best Rookie Project – 2024 Contrary GenAI Hackathon'
    },
    {
      id: 9,
      title: 'HARK Website Design',
      year: '2023 - 2024',
      excerpt: 'Created website for HARK, a non-profit organization serving Historically Black Colleges in Louisiana, Arkansas, and Texas, to host their 2024 virtual Southern Wit writers\' conference. Conducted UX surveys, created company branding guide, and designed user flow.',
      link: '/pages/hark',
      tags: ['Figma', 'UX design', 'Branding'],
      award: 'Product Designer, Develop for Good',
      externalLink: 'https://fossil-plastic-e89.notion.site/HARK-Technical-Documentation-10ee3c9334418054b702f03d62414044'
    },
    {
      id: 10,
      title: 'Machine learning for detecting warning signs of carpal tunnel syndrome in violinists',
      year: '2022 - 2023',
      excerpt: 'How the downfall of my violin career sparked the onset of my next one.',
      link: '/pages/carpal-tunnel',
      tags: ['Python', 'Neural networks', 'Biometric data'],
      award: '1st Place + State Qualifier – 2023 Twin Cities Regional Science Fair'
    },
    {
      id: 11,
      title: 'Natural Language Processing for human language mimicry',
      year: '2021 - 2022',
      excerpt: 'I tried to build ChatGPT before ChatGPT was a thing.',
      link: '/pages/chatbot',
      tags: ['Python', 'Natural language processing', 'Neural networks'],
      award: 'State Winner – 2023 Minnesota Aspirations in Computing Award + Bausch and Lomb Honorary Science Award - University of Rochester',
    },
    {
      id: 12,
      title: 'Supporting English Language Learner students in the Writing Center',
      year: '2022',
      excerpt: 'Conducted a research study to determine the effectiveness and practicality of proposed ELL tutoring methods to improve the experiences of ELL writers in the Writing Center.',
      link: 'https://drive.google.com/file/d/1Zuh86caXKlvGb0ft74En23jFMPTXCFo2/view',
      tags: [, 'Education research', 'Language learning'],
      award: 'Inquiry Project, Minnetonka High School Writing Center',
      external: true
    }
  ];

  const pennActivities =[
  {
    id: 1,
    title: 'Penn Aerospace Club',
    role: 'Executive Director / Flight Data and Research Engineer / High-Altitude Balloon Director',
    link: 'https://aerospaceclub.seas.upenn.edu/',
    description: [
      {
        section: 'Executive Director (May 2024 - May 2026 · 2 yrs 1 mo)',
        bullets: [
          'Managed organizational, storage, safety, sponsorship, and outreach operations for four aircraft subteams of over 150 engineers, as well as managed purchasing and financial planning for a budget of over $20k',
          'Organized speaker events, alumni panels, and external career opportunities for members',
          'Collaborated with Wharton Aerospace to send student volunteers to conferences and connect them with recruiters + industry projects',
          'Brought in industry and research professionals to serve as mentors for aircraft subteams',
          'Collaborated with other on-campus aerospace-related groups to host social and professional development events',
          'Re-founded the pre-pandemic Operations team in Fall 2025; managing the Operations team on club-wide sponsorship and professional development projects',
          '[Fall 2024] Led recruitment and marketing efforts that resulted in a 33% increase in club applications compared to Fall 2023, the highest number of applicants seen since the pandemic',
          'Launched semesterly coffee chat initiative to connect first-years and new members with more experienced peer mentors',
          'Re-designed and managed website and created social media content'
        ]
      },
      {
        section: 'Flight Data and Research Engineer (Jan 2024 - Apr 2026 · 2 yrs 4 mos)',
        bullets: [
          'Developed Arduino software and configured environmental sensors, solar cells, and electronics to capture data during flight',
          "Designed and conducted project to determine the effects of altitude on solar cell efficiency through analysis of flight data; results presented at American Meteorological Society's 2026 Symposium"
        ]
      },
      {
        section: 'High-Altitude Balloon Director (Aug 2024 - May 2025 · 10 mos)',
        bullets: [
          'Led an engineering team of over 20 members for two launches of our high-altitude balloon payload',
          'Communicated with FAA Air Traffic Controllers to obtain the necessary launch authorizations and organized transportation for the team to the launch site',
          'Managed team budget, supply purchasing, and storage; outlined deliverables, collaborated with project leads, led weekly team meetings',
          'Led recruitment and marketing operations that resulted in the highest number of applications seen by the team since the pandemic -- 22.5% increase from the previous year'
        ]
      }
    ],
    period: 'Jan 2024 - May 2026'
  },

  {
    id: 2,
    title: 'Penn Spark',
    role: 'President / Project Lead / Software Developer / Vice President External',
    link: 'https://pennspark.org/',
    description: [
      {
        section: 'President (Jun 2025 - Apr 2026 · 11 mos)',
        bullets: [
          'Managed over 50 software developers and product designers; oversaw progress and completion of semesterly projects',
          'Hosted recruiting, speaker, and panel events for companies and startups, including Khosla Ventures and its portfolio companies',
          'Sourced client projects from various startups and the City of Philadelphia',
          'Led weekly board and general body meetings, as well as organized recruitment events and operations'
        ]
      },
      {
        section: 'Project Lead (Sep 2024 - Apr 2026 · 1 yr 8 mos · Philadelphia, Pennsylvania, United States)',
        bullets: [
          '[DEWEY - SPRING 2026] Led development of mobile app for startup Dewey, an AI-powered social media platform for sharing reading goals and receiving personalized book recommendations. Managed team of 6 designers and developers + collaborated with founders to scope requirements and deploy to test users',
          '[STRIDE - FALL 2024] Led team of developers and designers to build Stride, an app to encourage and reduce barriers to sustainable transportation use in Philadelphia. Collaborated with Delaware Valley Regional Planning Commission and Philadelphia\'s Clean Air Council to research current barriers and areas of improvement related to transportation. Scoped technical and marketing requirements for development and showcase and managed team deliverables'
        ]
      },
      {
        section: 'Software Developer (Feb 2024 - Apr 2026 · 2 yrs 3 mos)',
        bullets: [
          '[SPRING 26] Developed mobile app for social media platform Dewey with React Native, Expo, and Supabase',
          '[SPRING 25] Developed a companion app for Penn Museum\'s Into the Blue Student Exhibition, an interactive guided experience that ran from 2025 to 2026 and was projected to reach over 1000 visitors. Used NextJS to develop the frontends of a camera capture and a stickerboard feature for a scavenger hunt that guides users around various blue objects in the museum',
          '[FALL 24] Used React Native for frontend development on a mobile app to encourage sustainable transportation use in Philadelphia by gamifying user environmental impacts and crowdsourcing information about safety and accessibility on sustainable routes',
          '[SPRING 24] Developed web application to convert user-uploaded images to interactive 3D object models with photogrammetry. Implemented image upload pipeline from client to iOS Object Capture backend and model retrieval from Amazon S3'
        ]
      },
      {
        section: 'Vice President External (Aug 2024 - May 2025 · 10 mos)',
        bullets: [
          'Led recruitment, marketing, and social media operations',
          'Brought in over $1000 in profit through fundraising',
          'Published monthly club newsletters for over 700 readers',
          'Connected industry professionals and alumni with project teams to serve as mentors',
          'Piloted new product development track to strengthen Spark\'s impact on off-campus community spaces',
          'Created sponsorship packet materials for corporate outreach'
        ]
      }
    ],
    period: 'Feb 2024 - Apr 2026'
  },

  {
    id: 3,
    title: 'Biomedical Researcher - University of Pennsylvania Perelman School of Medicine',
    role: 'Biomedical Researcher',
    link: 'https://www.med.upenn.edu/corlab/',
    description: [
      {
        section: 'Advanced Cardiovascular Imaging Lab',
        bullets: [
          'Abstract accepted to Perelman School of Medicine\'s 2025 Pendergrass Symposium',
          'Developed pipeline using Python to quantify volumes of visceral and subcutaneous fat using ML-segmented CT scans',
          'Developed baseline models of fat and muscle compositions based on demographic data to investigate the effects of weight loss treatments on patient body compositions',
          'Assembled patient data for cohort analysis on body composition; paper in progress'
        ]
      }
    ],
    period: 'Jan 2024 - Apr 2026'
  },

  {
    id: 4,
    title: 'Student Committee on Undergraduate Education',
    role: 'Committee Chair - Diversity, Equity, and Inclusion / White Paper Liaison',
    link: 'https://www.scue.org/',
    description: [
      {
        section: 'DEI Committee Chair',
        bullets: [
          'Organized meetings with administration and campus stakeholders to address issues including cost of academic materials, inclusive course syllabi language, identity group funding, and support for summer research for international students',
          'Organized and hosted events for Penn students to voice their questions, thoughts, and concerns surrounding DEI on campus'
        ]
      },
      {
        section: 'White Paper Liaison',
        bullets: [
          'Wrote and published 2025 White Paper for university administration outlining SCUE\'s educational policy recommendations',
          'Led and managed team writing deliverables for the White Paper'
        ]
      }
    ],
    period: 'Feb 2024 - May 2025'
  },

  
  {
    id: 5,
    title: 'West Philly Swing',
    role: 'Operations Director',
    link: 'https://westphillyswingers.my.canva.site/',
    description: [
      {
        section: 'Operations Director · Aug 2025 – Present',
        bullets: [
          'Managing space, scheduling, event planning, and logistics for dance troupe of 20+ members',
          '6 7 hours of lessons and rehearsals a week; perform at shows and public events'
        ]
      }
    ],
    period: 'Aug 2025 – Present'
  },

  {
    id: 6,
    title: "34th Street Magazine, The Daily Pennsylvanian",
    role: 'Features Writer',
    link: 'https://www.34st.com/staff/meiling_mathur',
    description: [
      {
        section: '',
        bullets: [
          'Produced monthly long-form Feature articles for an audience of over 40,000 readers online and in-print',
          'Interviewed professionals, sourced stories, and collaborated with editors.'

        ]
      }
    ],
    period: 'Sep 2023 – Apr 2024'
  },
  {
    id: 7,
    title: "Schrödinger's Quartet, Penn Chamber",
    role: 'Violinist',
    description: [
      {
        section: '',
        bullets: [
          'Performed at recitals and campus events'
        ]
      }
    ],
    period: 'Sep 2023 – Apr 2026'
  },

  {
    id: 8,
    title: 'Access Engineering',
    role: 'Teaching Assistant',
    link: 'http://accessengineering.seas.upenn.edu/',
    description: [
      {
        section: '',
        bullets: [
          'Created and led weekly Materials Science Engineering labs for Philadelphia high school students'
        ]
      }
    ],
    period: 'Feb 2024 - Dec 2024'
  },

  {
    id: 9,
    title: 'ESE Senior Design',
    role: 'Intern - AquaBorea',
    link: 'https://devpost.com/software/team-16-aquaborea',
    description: [
      {
        section: '',
        bullets: [
          'Constructed swimming pool in the back parking lot of engineering, facilitated drone testing on apartment rooftop, and supplied team members with coffee and sweet treats'
        ]
      }
    ],
    period: 'Apr 2026 · 1 mo'
  }
];
  const publications = [
    {
      id: 1,
      title: '34th Street Magazine',
      publication: 'Features Writer',
      date: '2023 - 2024',
      link: 'https://www.34st.com/staff/meiling_mathur',
      description: 'The Daily Pennsylvanian\'s Arts and Culture Magazine, serving an audience of over 40,000 readers'
    },
    {
      id: 4,
      title: 'White Paper 2025',
      publication: 'Student Committee on Undergraduate Education',
      date: 'February 2025',
      link: 'http://pennspark.substack.com/',
      description: 'SCUE\'s educational policy recommendations for Penn\'s administration, compiling five years of research, stakeholder collaboration, and input from Penn\'s student body. As DEI Committee Chair, I included my research on and recommendations to address socioeconomic disparities across campus. Definitely a privelige to have been on this project'
    },
    {
      id: 3,
      title: 'Penn Spark Newsletter',
      publication: 'President',
      date: '2024 - 2026',
      link: 'http://pennspark.substack.com/',
      description: 'Penn Spark\'s alumni and student newsletter of over 700 readers. It was sitting dormant for a few years, so I decided it was high time to revive it'
    },
    {
      id: 2,
      title: 'Minnetonka Breezes',
      publication: 'Deputy Editor, Arts and Entertainment',
      date: '2021 - 2023',
      link: 'https://www.minnetonkabreezes.com/staff_name/meiling-mathur/',
      description: 'Minnetonka High School\'s student newspaper'
    },
    
    
  ];


  return (
    <section className="multi-tab-section" id="tabs" ref={tabRef}>
      <div className="section-content">
        <div className="tab-buttons">
          <button
            className={activeTab === 'projects' ? 'active' : ''}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>

          <button
            className={activeTab === 'penn' ? 'active' : ''}
            onClick={() => setActiveTab('penn')}
          >
            Penn
          </button>

          <button
            className={activeTab === 'publications' ? 'active' : ''}
            onClick={() => setActiveTab('publications')}
          >
            Writing
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'projects' && (
            <div className="projects-grid">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {activeTab === 'penn' && (
            <div className="penn-activities">
              {pennActivities.map(activity => (
                <div key={activity.id} className="activity-card">
                  <div className="activity-header">
                    <h3>{activity.title}</h3>
                    <span className="period">{activity.period}</span>
                  </div>

                  <h4 className="role">{activity.role}</h4>

                  {activity.link && (
                    <Link
                      to={activity.link}
                      className="details-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website →
                    </Link>
                  )}

                  {activity.id == 2 && (
                    <div className="project-links">
                      <Link to={projects[0].externalLink}>Dewey</Link>
                      <Link to={projects[2].externalLink}>Penn Museum</Link>
                      <Link to={projects[3].link}>Stride</Link>
                      <Link to={projects[6].link}>SquishModel</Link>
                    </div>
                  )}

                  {activity.description.map((block, i) => (
                    <div key={i} className="activity-section">
                      {block.section && <h5>{block.section}</h5>}
                      <ul>
                        {block.bullets.map((bullet, j) => (
                          <li key={j}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'publications' && (
            <div className="publications-list">
              {publications.map(pub => (
                <div key={pub.id} className="publication-card">
                  <h3>{pub.title}</h3>
                  <div className="pub-meta">
                    <span className="publication-name">{pub.publication}</span>
                    <span className="pub-date">{pub.date}</span>
                  </div>
                  <p>{pub.description}</p>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                  >
                    Read here →
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bottom-tab-bar">
        <button
          className={activeTab === 'projects' ? 'active' : ''}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>

        <button
          className={activeTab === 'penn' ? 'active' : ''}
          onClick={() => setActiveTab('penn')}
        >
          Penn
        </button>

        <button
          className={activeTab === 'publications' ? 'active' : ''}
          onClick={() => setActiveTab('publications')}
        >
          Writing
        </button>
      </div>
    </section>
  );
}

export default MultiTabSection;