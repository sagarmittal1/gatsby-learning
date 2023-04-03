import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';
import { project, projectItem } from '../../styles/project.module.css';

export default function Projects({ data }) {
  console.log(data);
  const projects = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className="projects">
        <h1>Projects</h1>
        <h2>Projects that I have made</h2>
        <div className={project}>
          {projects.map((project) => (
            <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
              <div className={projectItem}>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          stack
          slug
        }
        id
      }
    }
  }
`;
