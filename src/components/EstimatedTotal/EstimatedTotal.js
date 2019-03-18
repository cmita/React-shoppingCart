import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class EstimatedTotal extends Component {
    render() {
        return (
            <Row className="show-grid">
                <Col md={6}>Estimated Total</Col>
                <Col md={6}>${this.props.price}</Col>
            </Row>

        );
    }
}