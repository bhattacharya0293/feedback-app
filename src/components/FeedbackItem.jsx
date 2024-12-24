import React from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";

const FeedbackItem = ({ item }) => {
  return (
    <Card>
      <div className="card">
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
      </div>
    </Card>
  );
};

FeedbackItem.protoTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
