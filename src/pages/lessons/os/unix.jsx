import React from 'react';
import Layout from '../../../layout/Layout';
import IndexSection from '../../../components/IndexSection';
import IndexItemList from '../../../components/IndexItemList';
import LessonTopic from '../../../data/LessonTopic';

const filter = (lesson) => {
  return LessonTopic.filter(type => type.lessonType === lesson)
}

export default ({ data: { site, mdx } }) => {
  return (
    <Layout site={site} pageTitle="Unix">
      <h1>Unix</h1>
      <h3>The Unix operating system was developed by Ken Thompson, Dennis Ritchie in 1970 at Bell Labs research center. It was created to be a stable, multi-user and multi-tasking system for desktops and servers.</h3>
      <IndexSection title="Core concepts">
       <IndexItemList lessonTopic={filter('unix')} />
      </IndexSection>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
