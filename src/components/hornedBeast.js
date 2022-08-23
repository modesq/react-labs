import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfFavourites: 0
        }
    }

    incrementNumOfFavourites() {
        this.setState({
            numOfFavourites: this.state.numOfFavourites + 1
        })
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img} alt='img' onClick={this.incrementNumOfFavourites()} />
                    <Card.Body>
                        <Card.Title> {this.props.title}</Card.Title>
                        <Card.Text> {this.props.description} </Card.Text>
                        <Button variant="primary">"number of Favourites ❤:" {this.state.numOfFavourites}</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default HornedBeast;