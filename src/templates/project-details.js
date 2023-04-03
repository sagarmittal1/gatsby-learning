import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { details, htmlContent } from '../styles/project-details.module.css';

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, stack } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div className={details}>
        <h1>{title}</h1>
        <h3>{stack}</h3>
      </div>
      <div className={htmlContent} dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default ProjectDetails;

export const query = graphql`
  query ProjectPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
      }
    }
  }
`;
