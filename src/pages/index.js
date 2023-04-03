import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function Home({ data }) {
  console.log(data);
  const { title, description } = data.site.siteMetadata;

  return (
    <Layout>
      <h1>Sagar Mittal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis minima
        illum, perferendis quaerat voluptatum quas eveniet officiis possimus
        consequatur tenetur? Quas amet nulla ab vel ea autem nesciunt et est?
      </p>
      <p>{title}</p>
      <p>{description}</p>
    </Layout>
  );
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
