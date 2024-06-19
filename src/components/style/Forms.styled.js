import styled from "styled-components";
export const Container = styled.div`
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  @media (max-width: 1050px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
export const Left = styled.div`
  background-color: #fff;
  max-width: 36rem;
  width: 100%;
  flex: 1;
  height: 40rem;
  text-align: left;
  padding: 1rem;
  overflow-y: scroll;
  box-shadow: 0 0 5px #ed9e17;

  h3 {
    color: #dd8533;
    text-transform: capitalize;
  }
  :is(label, p) {
    font-weight: bold;
    color: #56514d;
  }
  p {
    margin-bottom: 0.5rem;
  }
  input {
    color: #6d6d6d !important;
    transition: all 0.5s ease;
  }
  input:focus {
    color: black;
    border-color: #dd8533;
    outline: none !important;
    box-shadow: 0 0 8px #ed9e17;
  }
  span {
    color: red;
    width: 1rem;
    font-size: small;
  }
  .multipleControlsContainer {
    background-color: #f0f2e9;
    border-right: 2px solid rgb(215, 190, 0);
    border-radius: 0.5rem;
    height: 13rem;
    padding-bottom: 0.5rem;
    .icon {
      margin: 0 0.5rem 0 0.3rem;
      cursor: pointer;
      opacity: 0.8;
    }
    .icon:hover {
      opacity: 1;
    }
    .delete {
      color: #ef5812;
    }
    .append {
      color: #20c966;
      font-size: 28px;
    }
  }
  @media (max-width: 1050px) {
    max-height: 35rem;
  }
`;
export const List = styled.ul`
  padding: 0.2rem 0.2rem;
  width: 100%;
  height: 10rem;
  list-style-type: none;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
`;

export const Center = styled.div`
  max-width: 36rem;
  width: 100%;
  flex: 1;
  height: 40rem;
  overflow-y: auto;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0 5px #ed9e17;

  h4 {
    color: #dd8533;
    margin-bottom: 1rem;
  }
  ul {
    overflow-y: auto;
    list-style-type: circle;
  }
  li {
    border-bottom: 1px solid #ffa143;
    margin-bottom: 1rem;
    padding-bottom: 5px;
  }
  @media (max-width: 1050px) {
    max-height: 30rem;
  }
`;

export const Right = styled.div`
  background-color: #fff;
  box-shadow: 0 0 5px #ed9e17;
  padding: 1rem;
  max-width: 36rem;
  width: 100%;
  flex: 1;
  height: 40rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 100%;
    height: 3.2rem;
  }
`;

export const ThumpImageContainer = styled.div`
  width: 100%;
  height: 15rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-bottom: 2rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  padding: 0;
  width: 100%;
  height: 17rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #fff;
  margin-bottom: 2rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 17rem;
  img {
    width: inherit;
    height: inherit;
  }
`;
