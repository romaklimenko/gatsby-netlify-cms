import React from "react";
import TestTemplate from "../../templates/test";

const TestPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <TestTemplate data={data} />;
  } else {
    return <div>Loading...</div>;
  }
};

export default TestPreview;
