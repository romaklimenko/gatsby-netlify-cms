import * as React from "react";
import { graphql } from "gatsby";

const TestTemplate = ({ data }) => {
  return (
    <>
      <hr />
      <div
        className="col-md-8"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
      <hr />
    </>
  );
};

export default TestTemplate;

export const pageQuery = graphql`
  query PageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
