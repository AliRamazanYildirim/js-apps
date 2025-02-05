import styled from "styled-components"

const SteyledButton = styled.button` 
    backgroundColor: '#083344',
    color: ${props => props.color || 'white'};
    color: ${props => props.color || '#083344'};
    background-color: ${props => props.white ? 'white' : '#083344'};
`;

export default SteyledButton