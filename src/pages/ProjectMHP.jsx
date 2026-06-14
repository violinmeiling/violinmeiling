import './ProjectPage.css';
import SiteBackground from "../components/SiteBackground";
import ProjectLayout from '../components/ProjectLayout';


function ProjectMyHealthPassport() {
  return (
      <ProjectLayout>

      <div className="project-header">
        <SiteBackground />
        <h1>My Health Passport</h1>

        <p className="project-meta">
          No more “Forgot Password?” at the doctor’s office.
        </p>

        <div className="project-tags">
          <span className="tag">2024 PennApps Hackathon</span>
        </div>

        <br />

        <p className="project-meta">
          <a className="project-link"
            href="https://drive.google.com/file/d/1hljRDXay7iKdLY8Oyv6clcohWnPiDFST/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Business Pitch
          </a>
          {" | "}
          <a className="project-link"
            href="https://www.youtube.com/watch?v=KjH4tJ4LzkQ"
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
          {" | "}
          <a className="project-link"
            href="https://github.com/violinmeiling/myhealthpassport"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </div>

      <div className="project-content">

        <p>
How many times have you gone to the doctor’s office and been asked to recite your current medications, health history, insurance information, and other medical details? Maybe you have a very good memory, and recalling these details on the spot is no problem for you. But maybe you recently got a prescription from one specialist, and you can’t remember what its name is or what it’s for. Maybe you’re in an emergency room setting — it’s hard to think clearly, and you forget to mention that you’re allergic to a commonly-prescribed antibiotic. Or maybe you’re just trying to log in to one of your many healthcare portals from your various providers for a single document, and you find yourself wishing that all your clinical visit summaries could just be in one place.
        </p>

        <p>
MyHealthPassport addresses those issues by serving as a patient-managed one-stop-shop for all your medical information. Instead of tracking prescriptions in your Notes app, clinical visit summaries across healthcare portals, and insurance information in your wallet, you can upload all of your medical records into this app to have your entire medical history on-hand whenever you need it. This not only gives you ownership over your medical history but also ensures patient safety by making important medical information instantly accessible to providers and patients.
        </p>

        <img
          src="https://calculus.violinmeiling.net/wp-content/uploads/2024/12/Screenshot-2024-12-09-at-14.02.49-1024x571.png"
          alt=""
        />

        <p className="caption">
          “Oh, so that’s what we talked about at that appointment…”
        </p>

        <p>
Compared to clinic-managed portals that manage your documents for you and don’t always connect to clinics outside of their healthcare system, MyHealthPassport puts you in charge of your own records and allows you to easily share whatever information you want to with whichever providers you need to. Our app isn’t tied to a specific healthcare system or country, so you can access your records anywhere in the world. We also create a medication calendar based on your prescription information and export your vital details into one screen that can be easily pulled up in an emergency room setting. Lastly, since it can be challenging to understand medical jargon or remember the exact purpose of a prescription, we use Gemini LLM to remind you, in plain English, what all of your treatment plans are for.
        </p>

        <p>
My team and I built this project for the 2024 PennApps Hackathon hosted at the University of Pennsylvania. I was in charge of setting up the backend; we used MongoDB for the database and Flask with Python to set up the API routes: retrieving user information, creating new user records, and updating existing records. We also used PropelAuth for user authentication and vanilla JavaScript, HTML, and CSS for the frontend. This was my first time using MongoDB; while I’m used to using SQL for my databases, I found MongoDB’s No-SQL formatting quite simple and effective for the purposes of our project. As a next step for this project, we looked into the possibility of integrating with an Amazon S3 bucket to store images and pdfs.
        </p>

        <p>
This was the second hackathon I’ve participated in, and I thoroughly enjoyed working with my team and meeting all of the event sponsors. I was running a fever the entire weekend from getting my flu and COVID vaccines the day before, so the topic of our project was especially relevant to me, but I learned a lot about MongoDB and user authentication, as well as gained fluency in designing API routes and system architecture. I also have a strong interest in the intersection of software and healthcare, so I enjoyed tackling the issue of patient safety for this project. I’d love to continue working on products that can assist with medical services, as well as learn about the process of how software products actually get integrated into medical facilities and reach patients.
        </p>

      </div>
    </ProjectLayout>
  );
}

export default ProjectMyHealthPassport;