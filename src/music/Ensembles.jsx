import './Ensembles.css';

function Ensembles() {
  const ensembles = [
    {
      id: 1,
      name: "Schrödinger’s Quartet",
      period: "2023 – 2026",
      role: "Violinist and violist",
      organization: "Penn Chamber, University of Pennsylvania",
      description:
        "Studied through Penn Chamber under the instruction of the Penn Music Department faculty. Performed at recitals and campus events.",
      repertoire: [
        "String Quartet No. 15 in A minor, Op. 132: IV. Alla marcia, assai vivace (attacca) and V. Allegro appassionato – Allegro vivace (L.V. Beethoven)",
        "String Quartet No. 4 in D major, Op. 83: III. Allegretto and IV. Allegretto (Dmitri Shostakovich)",
        "“Death and the Maiden” – String Quartet No. 14 in D minor, D. 810: I. Allegro and II. Andante con moto (F. Schubert)",
        "Piano Quintet in D minor, Op. 89: I. Molto moderato (Gabriel Fauré) – Viola"
      ]
    },
    {
      id: 2,
      name: "Sedarski Quartet",
      period: "2022 – 2023",
      role: "Violinist",
      organization: "Artaria Chamber Music School",
      description:
        "Studied with the Artaria String Quartet through the Artaria Chamber Music School. Participated in the 2022 and 2023 Stringwood Chamber Music Festivals and received masterclasses and coachings from guest artists and faculty. Performed at GTCYS fundraising events and gigs.",
      repertoire: [
        "String Quintet in E♭ major, Op. 97, B. 180, I: Allegro non tanto (Antonin Dvořák)",
        "Quartet No. 1 in B minor, Op. 50, I: Allegro (Sergei Prokofiev)",
        "String Quartet No. 19 in C Major, K. 465, I: Adagio, allegro (W.A. Mozart)",
        "String Quintet No. 2 in G Major, Op. 111, I: Allegro non troppo, ma con brio (Johannes Brahms)",
        "String Quartet No. 3, I: Gliding (Kevin Lau)",
        "String Quartet No. 10 in E-flat major, Op. 74, I: Poco adagio – allegro (L.V. Beethoven)"
      ]
    },
    {
      id: 3,
      name: "Greater Twin Cities Youth Symphonies (GTCYS)",
      period: "2016 – 2023",
      role: "Principal second violin (Symphony, 2020 – 2022) / Associate concertmaster (Philharmonic, 2019 – 2020)",
      description:
        "Created and delivered yearly promotional presentations for GTCYS. Invited to speak at the 2023 GTCYS Orchestrating Opportunities benefit and 2023 Spring Festival concert. Created social media content and blog posts for GTCYS\'s 2022 Southern Italy Tour. Mentored elementary-age violinists over the pandemic.",
      repertoire: [
        "Symphony No. 5 in D minor, Op. 47 (Dmitri Shostakovich)",
        "Symphony No. 9 in E Minor, Op. 95, B. 178 (Antonin Dvořák)",
        "Romeo and Juliet, TH 42, ČW 39 (Pyotr Ilyich Tchaikovsky)",
        "Concerto for 2 Oboes in D minor, RV 535 (Antonio Vivaldi)",
        "Symphony in D Minor (César Franck)"
      ]
    },
    {
      id: 4,
      name: "Hildegard Quartet",
      period: "2022 – 2023",
      role: "Founding member and first violinist",
      organization: "Minnetonka High School Chamber Music Club",
      description:
        "Received Superior rating in the 2023 MSHSL Solo and Ensemble Festival. Performed at senior centers, gigs, and school events. Performed with the Minnetonka High School Symphony Orchestra.",
      repertoire: [
        "String Quartet No. 12 in F Major, I: Allegro ma non troppo (Antonin Dvořák)",
        "String Quartet No. 2 in D Major, I: Allegro moderato (Alexander Borodin)",
        "Fantasia on a Theme by Thomas Tallis (Vaughan Williams) – with full orchestra"
      ]
    },
    {
      id: 5,
      name: "Minnesota All-State Orchestra",
      period: "2021 – 2023",
      role: "Associate principal second violin (2021 – 2022)",
      description: "",
      repertoire: [
        "Symphony No. 5 in B-flat Major, Op. 100 (Sergei Prokofiev)",
        "Three Latin American Dances (Gabriela Lena Frank)",
        "Symphony No. 10 in E Minor, Op. 93 (Dmitri Shostakovich)",
        "Symphony No. 1 “Afro-American” (William Grant Still)",
        "The Bamboula (Samuel Coleridge-Taylor)"
      ]
    },
    {
      id: 6,
      name: "Minnetonka High School Symphony Orchestra",
      period: "2020 – 2023",
      role: "Concertmaster",
      description:
        "Received Student Recognition Award (2021) and National High School Orchestra Award (2022) for musical and leadership contributions.",
      repertoire: [
        "Introduction and Rondo Capriccioso in A minor, Op. 28 (Camille Saint-Saëns) – Senior solo",
        "Fantasia on a Theme by Vaughan Williams – Principal violin"
      ]
    },
    {
      id: 7,
      name: "Camerata Chamber Orchestra",
      period: "2020 – 2023",
      role: "Violin soloist (2023) / Associate principal viola (2022 – 2023)",
      description:
        "Received Superior rating + Best in Site at the 2023 MSHSL Solo and Ensemble Festival. Collaborated on the premiere of Ken Smith’s Concerto for Violin and Orchestra in D Major.",
      repertoire: [
        "Holberg Suite, Op. 40: I. Praeludium (Edvard Grieg)",
        "Concerto grosso in G minor, Op. 6, No. 8, I: Vivace and II. Allegro (A. Corelli)"
      ]
    }
  ];

  return (
    <section className="ensembles" id="ensembles">
      <div className="section-content">
        <h2>Ensembles</h2>

        <div className="ensembles-list">
          {ensembles.map((ensemble) => (
            <div key={ensemble.id} className="ensemble-card">
              <div className="ensemble-header">
                <h3 className="ensemble-name">{ensemble.name}</h3>
                <span className="period">{ensemble.period}</span>
              </div>

              <p className="role">{ensemble.role}</p>
              {ensemble.organization && (
                <p className="organization">{ensemble.organization}</p>
              )}

              {ensemble.description && (
                <p className="description">{ensemble.description}</p>
              )}

              {ensemble.repertoire.length > 0 && (
                <div className="repertoire">
                  <h4>Repertoire</h4>
                  <ul>
                    {ensemble.repertoire.map((piece, index) => (
                      <li key={index}>{piece}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ensembles;