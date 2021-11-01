import {CardContainer, CardImage, CardBody, CardPrice, CardProductName } from './styles/Card';

import Button from './Button';


const Card = (props) => {
  const {data} = props
  return (
    <CardContainer width="400px">
      <CardImage src={data.imageUrl} />
      <CardBody>
        <CardPrice>{data.price}</CardPrice>
        <CardProductName>{data.productName}</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
}
export default Card;
