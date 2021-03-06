import { NextPage } from "next";

import ErrorPage from "./_error";
import styled from "styled-components";
import { IndexBody, IndexContainer } from "../components/body";
import { ProfileContainer, ProfileImage, ProfileItem, ProfileSubItem } from "../components/profile";
import { SocialContainer, SocialItem } from '../components/social';
import { ProjectsContainer, ProjectsItem, ProjectsTitle, ProjectsDescription, ProjectsImage } from '../components/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Particles from 'react-particles-js';
import { isAbsolute } from "path";


interface Props {
  error?: string;
}

function sec2time(timeInSeconds: number) {
  let pad = function (num, size) { return ('000' + num).slice(size * -1); };
  let time: number = timeInSeconds;
  let minutes = Math.floor(time / 60) % 60;
  let seconds = Math.floor(time - minutes * 60);

  return pad(minutes, 2) + ':' + pad(seconds, 2);
}

const Index: NextPage<Props> = ({ error }) => {
  if (error) return <ErrorPage err={error} statusCode={500} />;
  return (
    <IndexBody>
      <IndexContainer>
        <ProfileContainer>
          <ProfileImage src="/profile.png" />
          <ProfileItem>
            Stephen Freerking
            </ProfileItem>
          <ProfileSubItem>
            Full Stack Engineer Located in California
            </ProfileSubItem>
          <SocialContainer>
            <a href="https://twitter.com/snipeydev">
              <SocialItem>
                <FontAwesomeIcon className="fa" icon={["fab", "twitter"]} />
              </SocialItem>
            </a>
            <a href="https://github.com/snipey">
              <SocialItem>
                <FontAwesomeIcon className="fa" icon={["fab", "github"]} />
              </SocialItem>
            </a>
            <a href="mailto:contact@snipey.dev">
              <SocialItem>
                <FontAwesomeIcon className="fa" icon={["fas", "envelope"]} />
              </SocialItem>
            </a>
            <a href="https://discord.getsporked.lol">
              <SocialItem>
                <FontAwesomeIcon className="fa" icon={["fab", "discord"]} />
              </SocialItem>
            </a>
            <a href="https://paypal.me/snipeydev">
              <SocialItem>
                <FontAwesomeIcon className="fa" icon={["fab", "paypal"]} />
              </SocialItem>
            </a>
            <a href="https://www.linkedin.com/in/stephenfdev/">
              <SocialItem>
                <FontAwesomeIcon className="fa" icon={["fab", "linkedin"]} />
              </SocialItem>
            </a>
            <a href="https://clips.snipey.dev">
              <SocialItem>
                <FontAwesomeIcon className="fa" icon={["fas", "film"]} />
              </SocialItem>
            </a>
            <a href="https://www.patreon.com/snipeydev">
              <SocialItem>
                <FontAwesomeIcon className="fa" icon={["fab", "patreon"]} />
              </SocialItem>
            </a>

          </SocialContainer>
        </ProfileContainer>
        {/* <BlogContainer>
          <p>Latest Posts</p>
          <div className="projects">
            <BlogItem>

            </BlogItem>
            <BlogItem>
              
            </BlogItem>
            <BlogItem>
            
            </BlogItem>
          </div>
        </BlogContainer> */}
        <ProjectsContainer>
          <p>Latest Projects</p>
          <div className="projects">
            {/* TODO Add Functional component to render all the data from an array */}
            <ProjectsItem>
              <a href="https://getsporked.lol">
                <ProjectsImage src="/spork-league.jpg" />
              </a>
              <ProjectsTitle>Spork League</ProjectsTitle>
              <ProjectsDescription>
                Discord PUG bot for making custom 10 man games with automatic voice channels and auto teams.
              </ProjectsDescription>
            </ProjectsItem>
          </div>
        </ProjectsContainer>
        <Particles
          style={{
            position: 'absolute',
          }}
          params={{
            "particles": {
              "number": {
                "value": 60,
                "density": {
                  "enable": true,
                  "value_area": 1500
                }
              },
              "line_linked": {
                "enable": true,
                "opacity": 0.02
              },
              "move": {
                "direction": "right",
                "speed": 0.05
              },
              "size": {
                "value": 1
              },
              "opacity": {
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.05
                }
              }
            },
            "interactivity": {
              "events": {
                "onclick": {
                  "enable": true,
                  "mode": "push"
                }
              },
              "modes": {
                "push": {
                  "particles_nb": 1
                }
              }
            },
            "retina_detect": true
          }} />
      </IndexContainer>
    </IndexBody>
  );
};

// Index.getInitialProps = async () => {
// };

export default Index;

