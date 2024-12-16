import styled from "styled-components"

const CardStyle = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 2px 3px #ccc;
    background-color: #f4f4f4;
`;
const CardHeader = styled.h2`
    color: #500724;
`;

const ImgCard = styled.img`
    width: 100%;
    height: 150px;
`;

const CardText = styled.p`
    color: #500724;
`;
const MyCard = ({title, imgUrl}) => {

    return (
        <CardStyle>
            <CardHeader>{title}</CardHeader>
            <ImgCard src={imgUrl} alt="Placeholder" />
            <CardText>This is a card text.</CardText>
        </CardStyle>
    )
}

export default MyCard;
