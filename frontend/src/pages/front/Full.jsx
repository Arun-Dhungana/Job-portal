import React from "react";
import { Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export const Full = () => {
  const [query, setQuery] = useSearchParams();
  const value = query.get("title");
  return (
    <Col>
      <h1>{value}</h1>
    </Col>
  );
};
