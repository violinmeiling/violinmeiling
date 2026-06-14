import { useState, useRef, useEffect } from 'react';
import './HighSchoolAwardsCourses.css';

function HighSchoolAwardsCourses() {
  const [activeTab, setActiveTab] = useState('awards');
  const sectionRef = useRef(null);

  const scrollToTop = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    scrollToTop();
  }, [activeTab]);

  const awards = [
    {
      title: 'National Merit Finalist',
      organization: 'National Merit Scholarship Corporation',
      year: '2023'
    },
    {
      title: 'Enrichment Scholar Student of the Year',
      organization: 'Minnetonka High School Activities Department',
      year: '2023'
    },
    {
      title: 'Writing Center Exemplary Service Award',
      organization: 'Minnetonka High School Writing Center',
      year: '2023'
    },
    {
      title: 'Bausch and Lomb Honorary Science Award',
      organization: 'University of Rochester',
      year: '2022'
    },
    {
      title: 'Platinum Bilingual Seal – Mandarin Chinese',
      organization: 'Minnesota Department of Education',
      year: '2022'
    },
    {
      title: 'Student Recognition Award',
      organization: 'Minnetonka High School',
      year: '2021'
    },
    {
      title: 'Silver Key – Literacy Narrative',
      organization: 'Scholastic Art & Writing Awards',
      year: '2021'
    },
    {
      title: 'AP Scholar with Distinction',
      organization: 'College Board',
      year: '2021'
    }
  ];

  const courses = [
    {
      title: 'Normandale Community College',
      courses: [
        'Differential Equations and Linear Algebra',
        'Multivariable Calculus'
      ]
    },
    {
      courses: [
        'AP Physics C: Electricity and Magnetism',
        'AP Biology',
        'AP Chemistry',
        'AP Physics 1',
        'AP Calculus BC',
        'AP Statistics',
        'AP Language and Composition',
        'AP US History',
        'AP World History',
        'AP Human Geography',
        'IB Music SL',
        'AP Chinese Language and Culture',
        'AP Macroeconomics',
        'AP Psychology'
      ]
    }
  ];

  return (
    <section className="hs-tabs" ref={sectionRef}>
      <div className="section-content">

        <div className="tab-buttons">
          <button
            className={activeTab === 'awards' ? 'active' : ''}
            onClick={() => setActiveTab('awards')}
          >
            Awards
          </button>

          <button
            className={activeTab === 'courses' ? 'active' : ''}
            onClick={() => setActiveTab('courses')}
          >
            Coursework
          </button>
        </div>

        {activeTab === 'awards' && (
          <div className="awards-grid">
            {awards.map((award) => (
              <div key={award.title} className="award-card">
                <div className="piece-header">
                  <h3>{award.title}</h3>
                  <span className="composer">
                    {award.organization} • {award.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="repertoire-list">
            {courses.flatMap(group =>
              group.courses.map(course => (
                <div key={course} className="piece-card">
                  <div className="piece-header">
                    <h3>{course}</h3>
                    <span className="composer">{group.title}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

      </div>

      <div className="bottom-tab-bar">
        <button
          className={activeTab === 'awards' ? 'active' : ''}
          onClick={() => setActiveTab('awards')}
        >
          Awards
        </button>

        <button
          className={activeTab === 'courses' ? 'active' : ''}
          onClick={() => setActiveTab('courses')}
        >
          Coursework
        </button>
      </div>

    </section>
  );
}

export default HighSchoolAwardsCourses;