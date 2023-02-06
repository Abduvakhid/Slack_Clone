import React from "react";
import styled from "styled-components";
import Spinner from "react-spinkit";

function Loader() {
  return (
    <Loading>
      <LoadingContents>
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1647545127005/74GQszMw8.png"
          alt=""
        />

        <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
      </LoadingContents>
    </Loading>
  );
}

export default Loader;

const Loading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const LoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
