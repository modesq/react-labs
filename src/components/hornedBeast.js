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
        this.incrementNumOfFavourites = this.incrementNumOfFavourites.bind(this);
        this.selectBeast = this.selectBeast.bind(this);
    }

    incrementNumOfFavourites() {
        this.setState({
            numOfFavourites: this.state.numOfFavourites + 1
        })
    }

    selectBeast(title, description, img) {
        this.props.openModal(title, description, img)
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img} alt='img' />
                    <Card.Body>
                        <Card.Title> {this.props.title}</Card.Title>
                        <Card.Text> {this.props.description} </Card.Text>
                        <Button padding="5px" onClick={this.incrementNumOfFavourites} variant="primary">number of Favourites ❤: {this.state.numOfFavourites}</Button>
                        <Button onClick={() => this.selectBeast(this.props.title, this.props.description, this.props.img)}>  hello there wassup</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}




// function App() {
//     const [modalShow, setModalShow] = React.useState(false);

//     return (
//         <>
//             <Button variant="primary" onClick={() => setModalShow(true)}>
//                 Launch vertically centered modal
//             </Button>

//             <MyVerticallyCenteredModal
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             />
//         </>
//     );
// }

export default HornedBeast;