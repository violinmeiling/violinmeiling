import './ProjectPage.css';
import SiteBackground from "../components/SiteBackground";
import ProjectLayout from '../components/ProjectLayout';
import { Link } from 'react-router-dom';

function ProjectSquishModel() {
  return (
    <ProjectLayout>

      <div className="project-header">
        <SiteBackground />
        <h1>
          SquishModel
        </h1>

        <p className="project-meta">
          I turned your stuffed animals into 3D browser objects.
        </p>

        <div className="project-tags">
          <span className="tag">Penn Spark Spring 2024 Showcase</span>
        </div>

        <br />


        <p className="project-meta">
          <a className="project-link"
            href="https://drive.google.com/file/d/1ERP6Zisog80cA_ayfgj9g7NAjSpAX3b5/view"
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
          {" "} | {" "}
          <a className="project-link"
            href="https://drive.google.com/file/d/1Jm1jKswll-bpMKPo1Auj95IDmP-MshFz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Showcase Slides
          </a>
        </p>
      </div>

      <div className="project-content">

        <p>
          I love my stuffed animals. I have four at Penn with me: a rainbow Squishmallow named Bevin, a giant pink
          octopus named Cal (short for Calamari), a similarly-sized penguin named Penguin (8-year-old me was creative
          with the names, I know), and a sparkly purple reversible octopus named Jean, after the Finnish composer Jean
          Sibelius.
        </p>

        <p>
          I could talk a lot more about my stuffed animals. But I won’t, because this is supposed to be a professional
          website featuring the very cool tech projects I’ve worked on. As it turns out though, I’m not the only college
          student who adores their stuffed animals — a team of us at Penn Spark built SquishModel, a web application
          that turns your stuffed animals into digital browser objects.
        </p>

        <p>
          (Learn more about what we do at Penn Spark{" "}
          <a href="https://pennspark.org/" target="_blank" rel="noreferrer">
            here
          </a>
          .)
        </p>

        <p>
          Photogrammetry is the process of taking a series of 2D images of an object and converting them into a 3D
          digital model. It’s been used by geographers to create 3D maps from aerial photographs and artists to create
          3D recreations of spaces. Our team used it to save digital copies of your stuffed animals to your device, so
          you can see them on your phone at any time.
        </p>

        <figure>
          <img
            src="https://calculus.violinmeiling.net/wp-content/uploads/2024/12/Screenshot-2024-12-09-at-14.25.32-1024x550.png"
            alt=""
          />
        </figure>

        <p className="caption">
          avocado in your browser.
        </p>

        <p>
          Users take 360-degree photos of a stuffed animal of their choosing and upload them to our frontend. Then, we
          load the images into our Swift backend and use Apple’s iOS Object Capture kit to perform the photogrammetry
          process. The backend uses an Amazon S3 bucket to store the 2D image files while it is creating the 3D object,
          and it opens a connection to the frontend via a web socket to display a progress bar to the user since the
          photogrammetry process generally takes a couple of minutes. Finally, when the object is ready, the backend
          retrieves it from the Amazon S3 bucket and passes it along to the frontend, where we use Three.js to render it
          on the screen and provide the user with controls to pan, rotate, and zoom into their now-digitized stuffed
          animal.
        </p>

        <p>
          As a backend developer for this project, I built the API routes and implemented the functionality to take
          user-uploaded images from the frontend to the Swift backend. I helped set up the web socket connection to the
          frontend, store the 2D images in Amazon S3, and transport the completed 3D object file from the backend to the
          frontend. I also came up with the name for this project, inspired by Bevin.
        </p>

        <p>
          This project not only helped me become more comfortable with Axios but also introduced me to web sockets,
          Amazon S3, and system architecture. While the tech stack above sounds straightforward, our team spent a lot of
          time researching which tools to use for our needs, and we had to pivot a few times to accommodate cost and
          usage constraints. This was my first time working with a team to ideate, design, and develop a project from
          start to finish, and I thoroughly enjoyed the process of learning how to delegate development and design tasks,
          scope requirements, and implement features. The development and leadership skills I gained from this project
          served as a foundation for my other projects and inspired me to lead a{" "}
          <Link to="/pages/stride">project of my own</Link> with Penn Spark the following semester.
        </p>

        <hr />

      </div>
    </ProjectLayout>
  );
}

export default ProjectSquishModel;