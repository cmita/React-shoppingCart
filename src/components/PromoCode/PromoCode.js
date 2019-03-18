import React, { Component } from 'react';
import { Row, Col, Button, Collapse, Well, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import {handleChange} from '../../actions/promoCodeAction'
class PromoCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    handleChange= e =>{
        this.props.handleChange(e);
    }

    render() {
        return (
            <div>
                <Button
                    className="promo-code-button"
                    bsStyle="link"
                    onClick={() => this.setState({ open: !this.state.open })}>
                    {this.state.open === false ? `Apply` : `Hide`}
                    Promo Code {this.state.open === false ? `+` : `-`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <Row className="show-grid">
                                <Col md={12}>
                                    <Form>
                                        <FormGroup controlId="formInlineName">
                                            <ControlLabel> Promo Code</ControlLabel>
                                            <FormControl typle="text" placeholder="enter promocode"
                                                value={this.props.promocode}
                                                onChange={this.handleChange}></FormControl>
                                        </FormGroup>
                                        <Button block
                                            bsStyle="success"
                                            className="btn-roung"
                                            disabled={this.props.isDisabled}
                                            onClick={this.props.giveDiscount}>Apply
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Well>
                    </div>
                </Collapse>
            </div>

        );
    }
}


const mapStateToProps = state => ({
    promoCode: state.promoCode.value
})
export default connect(mapStateToProps,{handleChange})(PromoCode);