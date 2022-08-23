import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

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
                    <Card.Img variant="top" src={this.props.img} alt='img' onclick="MyVerticallyCenteredModal()" />
                    <Card.Body>
                        <Card.Title> {this.props.title}</Card.Title>
                        <Card.Text> {this.props.description} </Card.Text>
                        {/* <Button variant="primary">"number of Favourites ❤:" {this.state.numOfFavourites}</Button> */}
                    </Card.Body>
                </Card>
            </div>
        )
    }
    
}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{this.props.title}</h4>
                <img src={this.props.img}  alt={this.props.title} />
                <p>
                {this.props.description}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );

function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
}
export default HornedBeast;