import './ProjectPage.css';
import SiteBackground from "../components/SiteBackground";
import ProjectLayout from '../components/ProjectLayout';


function ProjectChatbot() {
  return (
        <ProjectLayout>
      <div className="project-header">
        <SiteBackground />
        <h1>
          Natural Language Processing for human language mimicry
        </h1>

        <p className="project-meta">
          I tried to build ChatGPT before ChatGPT was a thing.
        </p>

        <div className="project-tags">
          <span className="tag">2021 - 2022</span>
          <span className="tag">State Winner – Minnesota Aspirations in Computing Award</span>
          <span className="tag">Bausch and Lomb Honorary Science Award - University of Rochester</span>
          <span className="tag">Minnetonka Research</span>
        </div>

        <br />

        <div className="project-meta">
          <a className="project-link"
            rel="noreferrer noopener"
            href="https://drive.google.com/file/d/1MCUvHrn62HEFuPxsMddBnf4InEzHHV7Z/view"
            target="_blank"
          >
            Paper
          </a>
          {" | "}
          <a className="project-link"
            href="https://drive.google.com/file/d/1h9LVc8bV91SGjXphcWuQKfY09O4E7Aen/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            Poster
          </a>
        </div>
      </div>



      <div className="project-content">

        <p>
          ChatGPT was publicly released in 2022, about a year after I started working on this project in September 2021. But I first came up with the idea of mimicking a human with a machine back in August 2018, when I was fascinated by digital assistants like Siri and Alexa and wanted to learn more about the science behind AI-driven human-computer interaction.
        </p>

        <p>
          When the pandemic started at the end of my freshman year in high school, all of my friends started a Discord server to keep in touch with each other and do homework together. I spent an afternoon using Node.js to make a Discord bot that recreated the greetings and phrases of our beloved physics teacher who we all missed very much over quarantine. You could say hi to it, ask it for a random physics fact from class, and have it spit out words of encouragement in the server to help you study for the AP exam.
        </p>

        <p>
          It was a very simple program that relied on a handful of hard-coded “if” statements, but it got me thinking: what if I could take this chatbot that mimicked the conversational style of my physics teacher and augment it so it could have dynamic and “intelligent” conversations with users that didn’t rely on hard-coded responses? In theory, if the chatbot performed well enough, a user wouldn’t be able to tell whether it was corresponding with the bot or the actual person that the bot was based on.
        </p>

        <p>
          And with this, I discovered the Turing test, Natural Language Processing, and neural networks.
        </p>

        <p>
          I went through all the emails in my inbox and sorted them into two categories: emails that were sent to me (“received”), and my replies to those emails (“reply”). I paired each “received” email with its corresponding “reply” email and used an NLP library to extract keywords from each. I encoded the words into numbers and built a two-layer neural network in Python that learned which groups of keywords in the “reply” emails were appropriate responses to which groups of keywords in the “received” emails. Then, when I gave the model an input sentence, it extracted the important keywords from it, ran them through the model to figure out which other keywords were an appropriate response to my input keywords, and outputted a list of related words (“response words”).
        </p>

        <p>
          At a very basic level, my computer and I were communicating with each other in word soup. To make the replies more coherent, I cross-referenced each of the “response words” with each of my original sentences in my “reply” emails, selected the sentence that contained the most number of “response words”, and outputted that sentence as the computer’s response. While the computer wasn’t necessarily generating original sentences, I upgraded my chatbot from a list of hard-coded “if” statements to an ML-powered framework that could match input sentences to response sentences based on inferred semantic meaning.
        </p>

        <p>
          I have a lot of thoughts about this project, especially given the fact that ChatGPT came out barely half a year after I completed it. When I started this project in 2021, people kept asking me about the applications of my idea, and I genuinely couldn’t think of a single reason why a talking chatbot would be important to anyone — I mainly saw it as a means of building the thought experiment from my middle school days and exploring machine learning in the process.
        </p>

        <p>
          Now, “talking chatbots” go by a slightly more popular name – Large Language Models, and it seems like, wherever I look, someone has found yet another creative use for them, from finance and technology to healthcare and education. Like many of us, I interact with LLMs all the time these days, and I have a greater appreciation and understanding of how they work now.
        </p>

        <p>
          On a more personal note, I probably wouldn’t be in Computer Science right now if it weren’t for how much fun I had and how much I learned about neural networks, data science, and programming in general from working on this project. I owe a lot to my talking chatbots.
        </p>

        <hr />

      </div>
      </ProjectLayout>
    );
}

export default ProjectChatbot;