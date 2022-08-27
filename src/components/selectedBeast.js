import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    render() {
        return (
            <>
                <Modal size='lg' show={this.props.show} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.img} alt={this.props.title} width="700px"/>
                    </Modal.Body>
                    <Modal.Footer>
                    {this.props.description}
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default SelectedBeast;