import './ProjectPage.css';
import SiteBackground from "../components/SiteBackground";
import ProjectLayout from '../components/ProjectLayout';
import { Link } from 'react-router-dom';


function ProjectCarpalTunnel() {
  return (
<ProjectLayout>
      <div className="project-header">
        <SiteBackground />

        <h1>
          Machine Learning for Detecting Warning Signs of Carpal Tunnel Syndrome in Violinists
        </h1>

        <p className="project-meta">
          Do not try to practice 40 hours a day
        </p>

        <div className="project-tags">
          <span className="tag">2022 - 2023</span>
          <span className="tag">1st Place + State Qualifier – Twin Cities Regional Science Fair</span>
          <span className="tag">Minnetonka Research</span>
        </div>

        <br />

        <p className="project-meta">
          <a className="project-link" href="https://drive.google.com/file/d/1hlsgDSkJ6M0_D6EoxVJLdRcW6VhArvnu/view" target="_blank" rel="noreferrer">
            Paper </a> | <a className="project-link" href = "https://drive.google.com/file/d/1no5W_rWclFwyYPuu8spAqcxPxtvYnVxM/view?usp=sharing" target="_blank" rel="noreferrer">
            Poster
          </a>
        </p>

        
      </div>

      <div className="project-content">

        <p>
          It's January 11th, 2020, and 14-year-old me is practicing the first movement of Kabalevsky's Violin
          Concerto for my violin competition next week when all of a sudden… "I can't move my hands?"
        </p>

        <p>
          A few days later, I'm on the way home from the doctor's office with a pair of wrist braces and a referral
          to see a physical therapist for carpal tunnel syndrome in both wrists.
        </p>

        <p>
          Carpal tunnel syndrome is a condition that’s caused when the median nerve in your wrist gets compressed,
          leading to tingling, pain, and numbness in your hands. It’s quite common among classical musicians, as
          playing an instrument places a lot of strain on the hands and forces us to adopt unnatural postures for long
          periods of time that, when left unchecked, can result in overuse injury. Nearly half of all musicians have
          dealt with a playing-related injury at some point in their musical careers. I had to stop playing violin and
          piano for about half a year, which was already bad, but other musicians have had to discontinue their careers
          entirely over an injury.&nbsp;
        </p>

        <p>
          (If you want to read about the identity crisis I had while I was banned from playing violin by my doctor,
          check out my article{" "}
          <a
            href="https://www.34st.com/article/2024/04/penn-personal-essay-violin-computer-science-symphony-greater-twin-cities-youth-symphonies"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .)
        </p>

        <p>
          Physical therapy and surgery are common treatments for carpal tunnel syndrome, but these are costly and
          often don’t restore your hands to the way they used to be before the injury — though I recovered, I haven’t
          been able to play more than a few hours of violin and piano a day since I got injured, and I have to be
          careful when lifting things and typing on my laptop. It would be better if we could prevent people from
          getting carpal tunnel in the first place by identifying the motions and postures that, if repeated, could
          lead to the development of carpal tunnel syndrome.
        </p>

        <p>
          While I was in physical therapy, my physical therapist connected EMG electrodes to my arms and had me play
          my violin as I usually do. The electrodes produced a graph of the electrical activity of the nerves in my
          arms, and she showed me that when I did certain motions on my instrument, it caused the electrical activity
          to spike. This meant that my arms were under ergonomic stress during these moments, and the repetition of
          these motions over time is what caused me to develop carpal tunnel.
        </p>

        <img
          src="https://calculus.violinmeiling.net/wp-content/uploads/2024/12/Screenshot-2024-12-09-at-14.20.23-min-1024x761.png"
          alt=""
        />

        <p className="caption">
          The secret to my injury supposedly lies within these green lines.
        </p>

        <p>
          Deep learning plays an important role in the field of healthcare, especially when it comes to preventative
          treatment and clinical diagnosis. Two previous studies used body sensors to monitor the motions of military
          members and construction workers while they performed physically strenuous tasks to determine whether machine
          learning techniques could be used to identify ergonomically risky motions that could result in an injury.&nbsp;
        </p>

        <p>
          One of the studies used a recurrent neural network (RNN) for their task and compared the performance of a
          Long-Term Short Memory (LSTM) model to that of a Gated Recurrent Unit (GRU) model. RNNs in general excel in
          their ability to recognize temporal relationships across data, as opposed to only examining a single moment
          of data independently from the others. This essentially allows the RNN to track patterns in the data over
          time, which is useful for a task that relies on identifying the build-up of ergonomic stress in the body over
          time. LSTM and GRU are types of RNNs; LSTMs have more layers than GRUs and are built for larger datasets, but
          GRUs are smaller and can optimize performance on less data.
        </p>

        <p>
          I decided to use the methods presented by these two studies to develop a machine learning model that could
          assess ergonomic risk in a violinist’s arm while they played their instrument, using EMG electrodes to
          measure the electrical activity in the arm. I selected the LSTM and GRU RNNs to evaluate, as well as a
          one-layer neural network to serve as my baseline.
        </p>

        <p>
          I picked five violin techniques to test: shifting between positions, vibrato, fast scales, and arpeggios. I
          connected the EMGs to my left side at specific positions along my hand, wrist, and arm, and recorded the
          electrical activity of me playing each technique, first normally and then “badly” — for example, you aren’t
          supposed to tighten your wrist while you do vibrato because this is really stressful on your wrist, so I got
          some EMG readings of me doing vibrato with a relaxed wrist, and then I got some EMG readings of me doing
          vibrato with a tight wrist. After repeating this analogously for all the techniques, I had a set of “good”
          EMG readings that represented healthy, non-stressful motions, and a set of “bad” EMG readings of motions that
          would probably injure me again if I kept them up for a prolonged period of time.
        </p>

        <img
          src="https://calculus.violinmeiling.net/wp-content/uploads/2024/12/Screenshot-2024-12-09-at-14.12.49-min-1024x739.png"
          alt=""
        />

        <p className="caption">
          CS major learns how to use alligator clips.
        </p>

        <p>
          (Did I try to nearly trigger my own carpal tunnel again for this project? A little bit. But I was very
          careful to stretch, take lots of breaks, and ice my arms as needed while I was gathering these EMG readings.
          IRB signed off on my plan. It was all good.)&nbsp;
        </p>

        <p>
          I took my raw EMG data and resampled them into time windows of 0.1s or 0.5s each and calculated the mean,
          minimum, maximum, standard deviation, and IQR for each window to create my dataset. I had a dataset of 0.1s
          time window data and another dataset of 0.5s time window data, which I used to train the LSTM, GRU, and basic
          model. This was a pretty straightforward binary classification task — aka me asking the model to tell me if
          the time window of EMG readings it was looking at represented me doing a “good” motion on my instrument
          (non-injurious) or a “bad” motion on my instrument (could cause carpal tunnel if repeated).
        </p>

        <p>
          Overall, the LSTM performed the best out of all three models, which surprised me a bit because the other paper
          I was reading found the GRU to have a higher accuracy. But this is understandable because, as I mentioned
          before, the LSTM has more layers than the GRU and performs more robustly on a larger dataset, which I had. All
          three models performed better on the 0.5s window size compared to the 0.1s window size, which suggests to me
          that a larger window size contained more information for the model to train on, although more tests on
          different window sizes should be done to confirm this.
        </p>

        <p>
          Towards the end of this project, I was working on an application to read a stream of EMG readings in real time
          and process the data to feed into the model for inference as the data was coming in. My idea coming into this
          project was that a violinist could connect EMG electrodes to their arms while they practiced, and if the
          model detected a motion that could cause the violinist to get injured, my app could warn the player that they
          needed to change the way they were playing. I graduated high school before I was able to finish this part of
          the project, but it would be a really interesting next step to implement. Penn senior project, maybe?
        </p>

        <p>
          Oh, and for those of you who are wondering, I was able to get{" "}
          <Link to="/music">back into violin</Link> after I recovered, and I still play frequently in college. This project
          introduced me to the intersection of machine learning and clinical diagnosis, which inspired me to pursue my
          current position in Penn Medicine’s Advanced Cardiovascular Imaging Lab, where I’m researching the effects of
          weight loss treatment in patients from machine-segmented CT scans. It’s also inspired me to learn more about
          the healthcare industry as a whole and how software can help address challenges like diagnosis and patient
          safety — check out my most recent hackathon project <Link to="/pages/mhp">here</Link>.
        </p>

        <p>
          This project was brought to you by the Kabalevsky Violin Concerto.
        </p>

        <hr />
    </div>
    </ProjectLayout>
  );
}

export default ProjectCarpalTunnel;