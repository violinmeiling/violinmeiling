import './ProjectPage.css';
import SiteBackground from "../components/SiteBackground";
import ProjectLayout from '../components/ProjectLayout';


function ProjectStride() {
  return (
    <ProjectLayout>
      

      <div className="project-header">
        <SiteBackground />
        <h1>Stride</h1>

        <p className="project-meta">
          Saving the environment one API call at a time
        </p>

        <div className="project-tags">
          <span className="tag">Penn Spark Fall 2024 Showcase</span>
          <span className="tag">Project Lead</span>
        </div>

        <br />

        <p className="project-meta">
          <strong>
            <a className="project-link"
              href="https://drive.google.com/file/d/1GS2uEKk5XH_EBhU-Yx3aKnmuzg0ceWMb/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            {' '}|{' '}
            <a className="project-link"
              href="https://docs.google.com/presentation/d/1K-vD9XWRMI7kYx2qhHNf3OpPqhR2401Ic04RpYXCEtQ/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Showcase Slides
            </a>
          </strong>
        </p>
      </div>

      <div className="project-content">

        <p>
          If I wanted to get from my apartment to Philadelphia Chinatown, I could hop in my (nonexistent) car, drive 15 minutes, probably get stuck in traffic on I-76 for a bit, and arrive at my destination having emitted 1.5kg of carbon dioxide traveling one way alone. Alternatively, I could use Stride, the app my team at Penn Spark developed this past semester, to find a more sustainable way of getting around the city.
        </p>

        <p>
          Stride is an app that encourages users to travel sustainably around Philadelphia by finding the fastest walking, cycling, and SEPTA (the Philly transit system) routes between waypoints. Users can log the trips they make with our app to calculate how much CO2 emissions they’ve saved by traveling sustainably, as well as view how much CO2 their friends have saved.
        </p>

<p>
  As the project manager for this app, I reached out to the Delaware Valley Regional Planning Commission (DVRPC) and Clean Air Council (CAC), two organizations that work with the City of Philadelphia to promote civilian access to sustainable transportation. 
</p>
        <p>
          During my interviews with these two organizations, I learned that people are often motivated to take/not take sustainable transportation based on preconceived notions of what their trip will be like. For instance, if someone is unfamiliar with the biking route between places A and B or doesn’t know the safety conditions of a certain bus stop on the way, they are much more likely to drive from A to B instead, even if the biking route was more convenient or the bus stop was safe. Additionally, the staff at DVRPC and CAC advised us to create concrete and relevant incentives for users; while everyone wants to feel good about helping the environment, the reality is that most people won’t change their behavior unless they’re motivated by a monetary or personal incentive to do so. 
        </p>

        <p>
          With these insights in mind, I created the MVP requirements for the project:
        </p>

        <ul>
          <li>Users can find sustainable (walking, cycling, SEPTA) routes between A and B.</li>
          <li>Users can click on each route and view Street View images of their route so they can visualize what that route would look like if they traveled along it.</li>
          <li>Users can select a route, which will log the route as a trip in their profile.</li>
          <li>Users can see the lifetime statistics of how many miles and hours they’ve traveled sustainably with our app, as well as their total CO2 emissions saved.</li>
          <li>As users save more CO2, they unlock achievements on their profile.</li>
          <li>Users can add friends and view a leaderboard displaying how many pounds of CO2 each person in their social circle has saved, as well as how they compare to the rest of their friends – friendly competition works wonders when it comes to motivation.</li>
        </ul>

        <p>
          My designers used Figma to create the branding and user flow for our app, and my backend developers used DynamoDB, Amazon S3, and NodeJS for the database and backend. I decided to work as a frontend developer for this project since I’ve mainly done backend in the past and wanted to learn something new. My frontend team used React Native with Expo for the app screens, and we used Axios, Express, and Amazon API Gateway to make API calls and connect to the backend. Google Maps’s Directions and Street View API both cost money, which was initially an obstacle for us (since the entire functionality of our app relies on route mapping), but we found a third-party service called SerpAPI that let us connect to Google Maps API for free.


        </p>

        <p>
          After finishing the MVP, we presented our designs and app demo to DVRPC. They liked what we had to show them and provided us with some additional feature suggestions, such as implementing an activity feed where people can post highlights from their trips to encourage friends to join them in traveling sustainably, crowdsourced safety and accessibility reviews in addition to Street View images to give users an even better idea of what their trip will look like, and a link to the Philly311 hotline for users to report urgent maintenance issues around the city (broken SEPTA elevator, sidewalk in need of repair, etc.).</p>

        <p>
          This was the first project that I formally managed from start to finish, and I learned a lot from the experience of reaching out to stakeholders, scoping out requirements, and managing a team. As we encountered various technical challenges throughout the build process, my plan for finishing the MVP went through a few adjustments, as I had to remain realistic about what we could get done in our given timeframe of two months, as well as prioritize the most important features to build to maximize functionality. Even though I’ve worked as both a developer and a designer in the past, being a project manager gave me a more in-depth understanding of how developer and designer tasks fit together, as well as a broader overview of what all goes into the creation of a project from start to finish. As someone interested in pursuing an engineering leadership/management role after college, leading the development of Stride was an incredibly valuable learning experience, and I hope to do something similar again soon.
        </p>

        <p>
          <strong><em>Thinking about Penn’s impact on Philadelphia</em></strong>
        </p>

        <p>
          As a teaching assistant for Access Engineering, a program where Penn students provide engineering lessons to Philadelphia high schoolers, I’ve gotten to learn about my university’s history and impact on the city of Philadelphia, specifically how Penn’s actions have shaped the distribution of resources, wealth, and education across Philly. I’ve found that a lot of students, including myself when I first arrived at Penn, don’t know about the consequences our school has imposed on the city, especially within marginalized communities, and therefore don’t really think about our role as student organizations in giving back to the Philadelphia community.


        </p>

        <p>
          As the Vice President External of Penn Spark, one of my goals when I first stepped into this role was to increase Spark’s social impact on the broader Philadelphia community in addition to the students and clients that we serve. Stride was the pilot project for my initiative, and it was encouraging to learn how many of our club members have an interest in working on projects that contribute to community wellness and equity. I’m looking forward to working with Spark’s exec team to continue programming community projects and make social impact one of our core club values.
        </p>

      </div>
    </ProjectLayout>
  );
}

export default ProjectStride;