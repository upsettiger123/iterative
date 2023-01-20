import "./App.css";
import React from "react";
import { HashLink } from "react-router-hash-link";
import { intro } from "./assets/content/intro";
import { sketches } from "./assets/content/sketches";
import { lofi } from "./assets/content/lofi";
import { crit1, crit2, crit3, crit4, crit5 } from "./assets/content/crit";
import { hifi } from "./assets/content/hifi";
import {
  taskQuestions,
  testingVideos,
  analysis,
} from "./assets/content/testing";
import ImageCaption from "./components/ImageCaption";
import ButtonToggle from "./components/ImageToggle";
import VideoToggle from "./components/VideoToggle";
import DividedText from "./components/DividedText";
import { deployment, development, nextSteps } from "./assets/content/capstone";

function App() {
  return (
    <div className="app">
      <div className="sidenav-container">
        <div className="sidenav-title">
          <div>Iterative</div>
          <div>Design</div>
        </div>
        <div className="sidenav-options">
          <div className="sidenav-button">
            <HashLink smooth to="/#intro">
              - Introduction
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#sketches">
              - Sketches
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#lo-fi">
              - Lo-Fi
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#crit">
              - Group Critique
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#hi-fi">
              - Hi-Fi
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#testing">
              - User Testing
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#capstone">
              - Senior Capstone
            </HashLink>
          </div>
        </div>
      </div>
      <div className="content">
        <div id="intro">
          <ImageCaption
            title={intro.title}
            content={intro.content}
            img={intro.img}
          />
        </div>
        <div id="sketches">
          <ButtonToggle
            options={sketches.options}
            title={sketches.title}
            subtitle={sketches.subtitle}
          />
        </div>
        <div id="lo-fi">
          <ButtonToggle
            options={lofi.options}
            title={lofi.title}
            subtitle={lofi.subtitle}
          />
        </div>
        <div id="crit">
          <div className="section-title">Group Critique</div>
          <div className="section-subtitle">
            The HiFi prototype shown above is after we implemented changes from
            crit feedback, so to show our iteration, we’ve included updated
            versions of our low fidelity prototypes below (and when not
            applicable, we have our HiFi). In the LoFi Prototype section above,
            we have the first draft before feedback.
          </div>
          <ImageCaption
            img={crit1.img}
            leftSubtitle={crit1.leftSubtitle}
            leftText={crit1.leftText}
          />
          <ImageCaption
            img={crit2.img}
            leftSubtitle={crit2.leftSubtitle}
            leftText={crit2.leftText}
          />
          <ImageCaption
            img={crit3.img}
            leftSubtitle={crit3.leftSubtitle}
            leftText={crit3.leftText}
          />
          <ImageCaption
            img={crit4.img}
            leftSubtitle={crit4.leftSubtitle}
            leftText={crit4.leftText}
          />
          <ImageCaption
            img={crit5.img}
            leftSubtitle={crit5.leftSubtitle}
            leftText={crit5.leftText}
          />
        </div>
        <div id="hi-fi">
          <VideoToggle
            options={hifi.options}
            title={hifi.title}
            subtitle={hifi.subtitle}
          />
        </div>
        <div>
          <div className="section-subtitle">Figma Prototype</div>
          <p className="section-text">
            Below is the Figma file we created to prototype the design
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <iframe
              title="figma"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FzsHGHe3mr1Shfuf6N6pAhY%2FIterative-Design%3Fnode-id%3D0%253A1%26t%3DDXNbrXtjQILmafhD-1"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div id="testing">
          <div className="section-title">User testing</div>
          <div className="section-subtitle">
            Our interface’s intended functionality is first and foremost to
            allow our users to match and message with others as well as unmatch.
            Our testing instructions were as follows: "Imagine you’re a woman
            seeking both men and women on a brand new dating app. Create a
            profile and try to match with both users that are available to match
            with. Think aloud as you go through the app, especially when you
            find something confusing."
          </div>
          <DividedText content={taskQuestions.content} />
          <br></br>
          <br></br>
          <div className="section-subtitle">
            Most of the results were in line with our expectations. All subtasks
            were successfully done, but there were some confusions. Click the
            buttons to view each user’s videos.
          </div>
          <VideoToggle
            options={testingVideos.user1}
            title={testingVideos.user2}
            subtitle={testingVideos.user3}
          />
          <DividedText content={analysis.content} />
        </div>
        <div id="capstone">
          <div className="section-title">Senior Capstone</div>
          <div className="section-subtitle">Introduction</div>
          <p className="section-text">
            For our capstone, we chose to build upon our iterative design
            project from CSCI 1300. The course project was our implementation of
            the iterative design process, in which we iterate on designs for the
            UI of our app starting from sketches and moving to low fidelity
            wireframes and eventually high fidelity wireframes. To go from stage
            to stage, we reviewed and responded to critiques and user testing.
            In order to substantially develop upon the course assignment, we
            decided to build out our figma designs into an actual deployed
            mobile app. We utilized techniques learned in the course, like
            responsive design, that went beyond our coursework figma
            specifications. In addition, we decided to use react-native to learn
            and implement a different framework [is that the right word] not
            taught in class that has device specific APIs to make the user
            experience more realistic and substantive.
          </p>
          <div className="section-subtitle">Development Process</div>
          <DividedText content={development.content}></DividedText>
          <div className="section-subtitle">App Deployment</div>
          <ImageCaption
            img={deployment.img}
            leftSubtitle={deployment.leftSubtitle}
            leftText={deployment.leftText}
          />
          <div className="section-subtitle">Next Steps</div>
          <p className="section-text">
            We have three main ideas of how to build out our capstone further:
          </p>
          <DividedText content={nextSteps.content} trio={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
