import React from 'react';
import { Card, CardImg, CardBody,CardTitle,CardText } from 'reactstrap';

const DishDetails = (props) =>{
    console.log(props);

    return(
        <div>
            <Card style={{margin:'10px'}}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{textAlign:'left'}}>
                    <CardTitle>
                        {props.dish.name}
                    </CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                </CardBody>

             
            </Card>

        </div>
    )
}
export default DishDetails