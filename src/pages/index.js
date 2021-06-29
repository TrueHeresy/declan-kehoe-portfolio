import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Declan Kehoe Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <ProjectsSection sectionId="projects" heading="Recent Projects" />
        <InterestsSection sectionId="details" heading="Details" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <ContactSection sectionId="github" heading="@ ME LIKE IT'S 1999!?" />
      </Page>
    </>
  );
}
