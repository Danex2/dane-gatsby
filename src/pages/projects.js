import React from "react"
import SEO from "../components/seo"
import { Content, Project, ProjectTitle } from "../components/components"
import AppLayout from "../components/applayout"

const Projects = () => (
  <AppLayout>
    <SEO title="Projects" />
    <Content>
      <h1 className="mb-3 font-bold text-xl text-left">Web</h1>
      {[
        {
          title: "Coin Info",
          description: "View price data about various cryptocurrencies.",
          tech: "React // Styled-Components // coinmarketcap api",
          link: "https://coininfo.netlify.com",
        },
        {
          title: "FindMyPet",
          description: "Helping pet owners in the GTA find their lost pets.",
          tech: "React // Express/Nodejs // TailwindCSS // MongoDB",
          link: "https://findmypet1.herokuapp.com",
        },
        {
          title: "Twitchy",
          description: "Twitch stream roulette, find a random twitch streamer.",
          tech: "React // MaterializeCSS // SASS",
          link: "https://twitchyapp.herokuapp.com",
        },
        {
          title: "Ping Landing Page",
          description: "A landing page made with pure HTML and CSS.",
          tech: "HTML // CSS",
          link: "https://ping-landing-page.netlify.com/",
        },
      ].map(({ title, description, tech, link }) => (
        <Project href={link} target="_blank" rel="noopener noreferrer">
          <ProjectTitle>{title}</ProjectTitle>
          <p className="text-lg">{description}</p>
          <p className="text-sm lowercase">{tech}</p>
        </Project>
      ))}
    </Content>
  </AppLayout>
)

export default Projects
