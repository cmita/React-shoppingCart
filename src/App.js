import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCode from './components/PromoCode/PromoCode';
import { connect } from 'react-redux'
import { handleChange} from './actions/promoCodeAction'
import './App.css';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 102.96,
      PickupSavings: -3.82,
      TaxesFees: 0,
      EstimatedTotal:0,
      disablePromoButton: false
    }
  }

  componentDidMount = () => {
    this.setState({
      TaxesFees: (this.state.total + this.state.PickupSavings)* 0.875
    },
      function () {
        this.setState({
          EstimatedTotal: this.state.PickupSavings + this.state.total
      })
    })
   
}
giveDiscountHandler= ()=>{
  if(this.props.promoCode === 'DISCOUNT'){
    this.setState({
      EstimatedTotal: this.state.EstimatedTotal*0.9
    },function(){
      this.setState({
        disablePromoButton:true
      })
    })
  }
}
render() {
  return (
    <div className="container">
      <Grid className="purchase-card">
        <SubTotal price={this.state.total.toFixed(2)}></SubTotal>
        <PickupSavings price={this.state.PickupSavings}></PickupSavings>
        <TaxesFees taxes={this.state.TaxesFees.toFixed(2)}></TaxesFees>
        <hr></hr>
        <EstimatedTotal price={this.state.EstimatedTotal}></EstimatedTotal>
        <ItemDetails price={this.state.EstimatedTotal.toFixed(2)}></ItemDetails>
        <PromoCode
          giveDiscount={() => this.giveDiscountHandler()}
          isDisabled={this.state.disablePromoButton}>
        </PromoCode>
      </Grid>

    </div>
  );
}
}

const mapStateToProps = state =>({
  promoCode: state.promoCode.value
})
export default connect(mapStateToProps,{handleChange})(App);
