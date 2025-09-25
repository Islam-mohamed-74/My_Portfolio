import React from "react";
import styled from "styled-components";

const CardCategory = ({ tech }) => {
  return (
    <StyledWrapper>
      <div className="tags">
        <a href="#" className="p-1">
          {tech}
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .tags {
    line-height: 2;
    margin-bottom: 0;
  }

  .tags a {
    font-style: normal;
    font-weight: 700;
    color: #7a7a8c;
    text-transform: uppercase;
    font-size: 0.66rem;
    border: 3px solid #28242f;
    border-radius: 2rem;
    position: relative;
  }

  .tags a:hover {
    background: linear-gradient(90deg, #ff8a00, #fcd86f);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    background-clip: text;
    border-color: white;
  }
`;

export default CardCategory;
