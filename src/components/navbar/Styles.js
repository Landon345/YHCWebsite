import styled from "@emotion/styled";
import Theme from "../../Theme";

export const NavbarStyle = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  padding: 35px 10% 55px 3%;
  background-color: ${(props) => Theme.colors[props.color] || "black"};
  border-bottom: 1px solid ${Theme.colors["paragraph"]};
`;

export const NavbarLink = styled.a`
  text-decoration: none;
  color: ${Theme.colors["headline"]};
  padding: 0px 40px;
  cursor: pointer;
  &:hover {
    background-color: ${Theme.colors["secondary"]};
    transition: background-color 0.2s ease-in-out;
  }
`;
