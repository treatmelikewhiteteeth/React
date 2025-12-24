import StyledButton from "./StyledButton";

const ThemedButton = styled.button`
    background : ${props => props.theme.mainColor};
    color : white;
    padding : 10px;
`

export default ThemedButton;