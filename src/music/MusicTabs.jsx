import { useState, useRef, useEffect } from 'react';
import './MusicTabs.css';

function MusicTabs() {
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
      id: 1,
      title: 'Mary West Solo Competition – Honorable Mention',
      year: '2021',
      excerpt: 'Minnesota String and Orchestra Teachers Association'
    },
    {
      id: 2,
      title: 'International Violin, Piano, and Guitar Competition – Honorable Mention',
      year: '2020',
      excerpt: 'Progressive Musicians'
    },
    {
      id: 3,
      title: 'National School Orchestra Award',
      year: '2023',
      excerpt: 'Minnetonka High School Symphony Orchestra'
    },
    {
      id: 4,
      title: 'Solo/Ensemble Festival Awards',
      year: '2021 – 2023',
      excerpt: 'Minnetonka State High School League',
      tags: [
        'Superior + Perfect Score + Best in Site (2023)',
        'Superior + Perfect Score (2022)',
        'Superior (2021)'
      ]
    }
  ];

  const pieces = [
    { id: 1, title: 'Violin Concerto in D Major, Op. 35: I. Allegro moderato', composer: 'Pyotr Illyich Tchaikovsky' },
    { id: 2, title: 'Violin Concerto in D Minor, Op. 47: I. Allegro moderato', composer: 'Jean Sibelius' },
    { id: 3, title: 'Introduction and Rondo Capriccioso in A Minor, Op. 28', composer: 'Camille Saint-Saëns' },
    { id: 4, title: 'Violin Concerto in B Minor, Op. 61: I. Allegro non troppo', composer: 'Camille Saint-Saëns' },
    { id: 5, title: 'Violin Concerto in G Minor, Op. 26', composer: 'Max Bruch' },
    { id: 6, title: 'Violin Concerto in E Minor, Op. 64', composer: 'Felix Mendelssohn' },
    { id: 7, title: 'Violin Concerto, Op. 14: I. Allegro', composer: 'Samuel Barber' },
    { id: 8, title: 'Zigeunerweisen, Op. 20', composer: 'Pablo de Sarasate' },
    { id: 9, title: 'Violin Concerto in C Major, Op. 48', composer: 'Dmitry Kabalevsky' },
    { id: 10, title: 'Caprice No. 19 in E-flat Major', composer: 'Niccolò Paganini' },
    { id: 11, title: 'Violin Sonata No. 1 in G minor, BWV 1001', composer: 'J.S. Bach' }
  ];

  return (
    <section className="multi-tab-section" ref={sectionRef}>
      <div className="section-content">

        {/* TOP TABS */}
        <div className="tab-buttons">
          <button
            className={activeTab === 'awards' ? 'active' : ''}
            onClick={() => setActiveTab('awards')}
          >
            Awards
          </button>

          <button
            className={activeTab === 'repertoire' ? 'active' : ''}
            onClick={() => setActiveTab('repertoire')}
          >
            Repertoire
          </button>
        </div>

        {/* CONTENT */}
        <div className="tab-content">

          {activeTab === 'awards' && (
            <div className="awards-grid">
              {awards.map((award) => (
                <div key={award.id} className="award-card">

                  <div className="award-header-row">
                    <h3>{award.title}</h3>
                    <span className="award-year">{award.year}</span>
                  </div>

                  <p className="excerpt">{award.excerpt}</p>

                  {award.tags && (
                    <div className="tags">
                      {award.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}

                </div>
              ))}
            </div>
          )}

          {activeTab === 'repertoire' && (
            <div className="repertoire-list">
              {pieces.map((piece) => (
                <div key={piece.id} className="music-card">

                  <h3>{piece.title}</h3>

                  <span className="composer">
                    {piece.composer}
                  </span>

                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* BOTTOM TABS */}
      <div className="bottom-tab-bar">
        <button
          className={activeTab === 'awards' ? 'active' : ''}
          onClick={() => setActiveTab('awards')}
        >
          Awards
        </button>

        <button
          className={activeTab === 'repertoire' ? 'active' : ''}
          onClick={() => setActiveTab('repertoire')}
        >
          Repertoire
        </button>
      </div>
    </section>
  );
}

export default MusicTabs;