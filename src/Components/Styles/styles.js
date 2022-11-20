import styled from "@emotion/styled";

/* Header */

export const HeaderContainer = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
`;

/* Gallery */

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-gap: 20px;
  justify-content: center;
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 200px);
  }
`;

/* Footer */

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoreButton = styled.div`
  border: none;
  color: black;
  padding: 10px 45px;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 2px;
  cursor: ${(props) => (props.disable ? "no-drop" : "pointer")};
  &:hover {
    background-color: ${(props) => (props.disable ? null : "gray")};
  }
`;

/* Loader */

export const LoaderContainer = styled.div`
  text-align: center;
`;

/* Error */

export const ErrorContainer = styled.div`
  text-align: center;
`;

/* CharacterCard */

export const CharacterCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const CardInfo = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 5px 20px;
  color: gray;
`;

export const CardImage = styled.img`
  display: flex;
  justify-content: center;
  height: 150px;
  width: 150px;
  object-fit: cover;
  border: 2px solid black;
  border-radius: 20px;
`;

export const CardFullName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;
