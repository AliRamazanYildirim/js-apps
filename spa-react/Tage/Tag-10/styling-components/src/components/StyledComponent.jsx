import styled from 'styled-components'
const StyledComponent = () => {
    const H1 = styled.h1`
    color: #64748b;
    font-size: 20px;
    `;

    const MyButton = styled.button`
    color: white;
    background-color: #500724;
    padding: 10px;
    border-radius: 5px;
    `;
  return (
    <>
        <H1>Styled Component</H1>
        <MyButton>Click Me</MyButton>
    </>
  )
}

export default StyledComponent