import styled from "styled-components";

export const StyledButton = styled.button`
cursor: pointer;
padding: 0.5em 1.5 em;
font-family: sans-serif;
font-size: 1.25em;
border-color: ${(props) => (props.outline ? "lightblue" : "white")};
border-width: 1px;
border-style: solid;
background-color: ${(props) => (props.outline ? "white" : "lightblue")};
color: ${(props) => (props.outline ? "lightblue" : "white")};
width: ${(props) => (props.fullWidth ? "100%" : "auto")};

&:hover {
    border-color: ${(props) => (props.outline ? "lightblue" : "cornflowerblue")};
    background-color: ${(props) => (props.outline ? "lightblue" : "cornflowerblue")};
    border: 1px;
    border-style: solid;
    color: white;
}
`;