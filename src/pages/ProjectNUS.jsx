import './ProjectPage.css';
import SiteBackground from "../components/SiteBackground";
import ProjectLayout from '../components/ProjectLayout';
import { Link } from 'react-router-dom';


function ProjectLettuceFarmer() {
  return (
    <ProjectLayout>

      <div className="project-header">
        <SiteBackground />
        <h1>Application of generative image models to computer vision for identifying plant leaf diseases in aquaponics systems</h1>

        <p className="project-meta">
          So you want to be a lettuce farmer?
        </p>

        <div className="project-tags">
          <span className="tag">Summer 2024</span>
          <span className="tag">National University of Singapore</span>
          <span className="tag">V-Plus Agritech</span>
        </div>

        <br />

        <p className="project-meta">
          <a className="project-link"
            href="https://docs.google.com/document/d/1Bi2-hwiaAeG27fGB3WeUJ5TalxpJ8OqSUbShtpIg3kY/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Paper
          </a>
        </p>
      </div>

      <div className="project-content">

        <p>
          Congrats on your new aquaponics startup! The fish in your tank are producing fertilizer to grow lettuce plants,
          and you're looking forward to selling both your fish and plants to make money off of this sustainable model of farming.
        </p>

        <img
          src="https://calculus.violinmeiling.net/wp-content/uploads/2024/12/Screenshot-2024-12-09-at-14.43.39-min-812x1024.png"
          alt=""
        />

        <p className="caption">
          A very profitable aquaponics plant tower.
        </p>

        <p>
          Only one issue: One of your lettuce plants has some strange spots on it, and you aren't sure why. Thankfully,
          you have a friend in the Singapore Food Agency who knows a lot about lettuce plants. You take a picture of your
          spotty plant, email it to them, and ask them to tell you what's wrong with the plant and how to fix it.
        </p>

        <p>
          It works, but...can we do better?
        </p>

        <p>
          Computer vision is a machine learning tool that allows computers to "interpret what they see" when given images
          or videos. This is the same technology that lets you search for certain people in your camera roll or helps Teslas
          differentiate between traffic lights and street signs. If you give a computer vision model a picture of your spotty
          lettuce plant, it can tell you what’s wrong with it right away, which is a lot faster than emailing your friend for help.
        </p>

        <p>
          Other research teams have already conducted studies examining the applications of computer vision models to plant disease diagnosis,
          but a commonly encountered issue is that computer vision models need a lot of data to train accurately. That is, if you want your
          computer vision model to analyze sick lettuce plants, you need a lot of pictures of sick lettuce plants, including pictures of different
          types of plant diseases. And it’s not always easy to find those on Google Images.
        </p>

        <p>So, how do we get more pictures?</p>

        <p>
          As it turns out, you can generate them with AI. A Generative Adversarial Network (GAN) allows a machine to take in an image and generate
          a bunch of similar-looking images. From 3 real-life images of sick lettuce plants, we can use a GAN to create 6 more, and now we have
          triple the amount of lettuce plant pictures that we can use to train our model.
        </p>

        <p>
          (If you’re interested: here’s an{" "}
          <a
            href="https://www.34st.com/article/2024/02/ai-deepfakes-social-media-generative-adversarial-network-gan-misinformation"
            target="_blank"
            rel="noreferrer"
          >
            article
          </a>{" "}
          I wrote on the ethics and regulation of Gen AI because I absolutely love this stuff.)
        </p>

        <p>
          The real question now is: if you train a computer vision model on a dataset of images that is mostly AI-generated,
          will it still function accurately on real-life images?
        </p>

        <p>I spent nine weeks at the National University of Singapore to figure this out.</p>

        <p>
          My professor’s previous team of students developed FIIGNET, a GAN pipeline that generates pictures of diseased fish
          (they were working on an analogous project for the fish part of the aquaponics setup). My partner and I modified FIIGNET
          to generate images of lettuce plants instead. The lettuce plant images we used were split into 6 categories: healthy plants
          and plants with 5 different types of diseases, summing to 46 images total. We first tried giving the raw images to FIIGNET
          and letting FIIGNET’s pre-processing steps take care of the image segmentation. Then, we took our original images plus the
          generated images (call this batch F1) and fed them back into FIIGNET a second time to produce batch F2. We did this three
          times total, and after the third round of image generation, we had a total of 114 images of lettuce plants across the six
          categories (batch F3).
        </p>

        <p>
          Then, we repeated the process, but we removed the backgrounds from the original 46 images first — so, just a plant against a
          white background with no dirt or leaves behind it. After three rounds of image generation, FIIGNET yielded 125 images, a
          noticeable increase from before. We also noted that, of the 6 categories, the spotty lettuce disease saw the most images
          generated for it as opposed to the other disease types that had less obvious features; this suggests that FIIGNET performs
          better when it is given more distinguishable features, like dark spots or increased contrast between the plant and the background.
        </p>

        <p>
          My partner and I built two kinds of convolutional neural networks: a binary classifier that checked if a plant was healthy or
          diseased for each of the 5 types of diseases, and a multi-classifier that sorted all the images at once into their respective
          6 categories. Each model was run on the original set of 46 images, F1, F2, and F3, for both the images generated with and
          without backgrounds.
        </p>

        <p>
          My paper above goes more in-depth about how we set up the neural networks and the results we got; basically, we used an 80-20
          training-testing split, and none of the FIIGNET-generated images were included in the validation set.
        </p>

        <p>
          The initial takeaway was that the binary classifier trained on F1 with backgrounds included performed the most accurately,
          with its performance decreasing along F2 and F3. But the multi-classifier trained on F3 with backgrounds removed was a very
          close runner-up — differing in accuracy by 0.7%. In fact, the binary classifier trained on images without backgrounds also saw
          increasing accuracies up to the F3 level, as opposed to the binary and multi-classifier models on backgrounds included that
          started losing accuracy after the F1 and F2 rounds.
        </p>

        <p>
          This suggests to us that removing the backgrounds from the images before giving them to FIIGNET allowed FIIGNET to generate
          more realistic images with each round, allowing both the binary and multi-classifier to perform even better the more FIIGNET-generated
          images we gave them. Otherwise, leaving the backgrounds in seemed to cause the quality of FIIGNET-generated images to decrease
          after F1 and F2, causing the models to peter out after the number of FIIGNET-generated images dominated the number of real-life images.
        </p>

        <p>
          So, in conclusion, training a computer vision model on a mixed dataset of real-life and AI-generated images actually increases
          its performance on real-life images, provided that you are careful with how you process the images beforehand (etc. removing
          backgrounds) and prioritize features that are easily distinguishable by an image segmentation model (like dark spots).
        </p>

        <p>What’s next for the aquaponics farm?</p>

        <p>
          The sustainable farming startup we worked with, V-Plus Agritech, was founded by my professor’s colleague, and we had the
          opportunity to meet him and visit one of the company’s farms. During our conversation, we floated the idea of mounting a small
          camera near one of his plant towers that could periodically photograph the plants and send the images to our model. We also
          suggested that he keep records of his previous emails to the Singapore Food Agency containing the images of his lettuce plants
          labeled with the various suggestions that the SFA had for him, potentially serving as the starting point for a more tailored dataset.
        </p>

        <img
          src="https://calculus.violinmeiling.net/wp-content/uploads/2024/12/B66EE992-12C3-4852-A83C-45FDDD041DAE-min-1024x768.jpg"
          alt=""
        />

        <p className="caption">
          My research team with V-Plus Agritech's CEO.
        </p>

        <p>
          <strong><em>What was I doing in Singapore?</em></strong>
        </p>

        <p>
          I applied for the National University of Singapore’s Summer Engineering Research Internship for U.S. Students (SERIUS)
          through my home school, Penn. I wanted to work with my professor, Dr. Kelvin Fong, on this research project, as I’ve been
          involved in ML research for a couple of years now and wanted to learn more about using technology to solve sustainability
          challenges. I was fortunate to be accepted into NUS’s Department of Electrical and Computer Engineering as a summer exchange
          student for this project, and I couldn’t have been happier with how my study abroad experience turned out.
        </p>

        <p>
          I’ve always wanted to visit Singapore for its diversity and culture, and I was not disappointed – from enjoying the world-class
          public transportation and delicious foods to exploring every corner of the city-state with all the wonderful people I met, I had
          a lot to be excited about from start to finish. The machine learning experience and research skills I gained continue to inform
          my current work in Penn Medicine’s Advanced Cardiovascular Imaging Lab, and learning about the importance of sustainability through
          this project inspired me to lead the development of a{" "}
          <Link to="/pages/stride">sustainable transportation</Link> app as a Project Manager with Penn Spark the following fall. I hope I’ll be able
          to intern abroad again, and I’ll definitely be back to visit Singapore soon.
        </p>

      </div>
    </ProjectLayout>
  );
}

export default ProjectLettuceFarmer;