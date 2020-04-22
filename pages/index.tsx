import { NextPage } from "next";
import { fetcher } from "../lib/fetcher";
import ErrorPage from "./_error";
import styled from "styled-components";
import { timeSince } from "../lib/timeSince";
import { IndexBody, IndexContainer } from "../components/body";
import { ProfileContainer, ProfileImage, ProfileItem, ProfileSubItem } from "../components/profile";
import { SocialContainer, SocialItem } from '../components/social';
import { ProjectsContainer, ProjectsItem, ProjectsTitle, ProjectsDescription, ProjectsImage } from '../components/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface Props {
  error?: string;
}
function sec2time(timeInSeconds: number) {
  let pad = function(num, size) { return ('000' + num).slice(size * -1); };
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
            <ProfileImage src="https://picsum.photos/200"/>
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
            <ProjectsItem>
              <ProjectsImage className="notify" src="/notify-icon-white.png"/>
              <ProjectsTitle>Notify</ProjectsTitle>
              <ProjectsDescription>
                Team member at Notify
              </ProjectsDescription>
            </ProjectsItem>
            <ProjectsItem>
              <ProjectsImage src="/logo.png"/>
              <ProjectsTitle>PulseJS Docs</ProjectsTitle>
              <ProjectsDescription>
                Documentation for the javascript state management lib PulseJS
              </ProjectsDescription>
            </ProjectsItem>
            <ProjectsItem>
              <ProjectsImage src="/spork-league.jpg"/>
              <ProjectsTitle>Spork League</ProjectsTitle>
              <ProjectsDescription>
                Discord pug bot for making custom 10 man games with automatic voice channels and auto teams.
              </ProjectsDescription>
            </ProjectsItem>
          </div>
        </ProjectsContainer>
      </IndexContainer>
    </IndexBody>
  );
};

// Index.getInitialProps = async () => {
// };

export default Index;