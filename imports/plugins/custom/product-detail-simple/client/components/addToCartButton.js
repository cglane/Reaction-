import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert, Translation } from "/imports/plugins/core/ui/client/components";


class AddToCartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedToCart: false,
      showPiping: true,
      ceilingHeight: 10,
      pipingOption: "regular"
    };
    console.log(this.props.product, "product");
  }
  get hasVariants() {
    return Array.isArray(this.props.variants) && this.props.variants.length > 0;
  }
  addedToCart = () => {
    this.setState({ addedToCart: true });
  }
  setCeilingHeight = (e) => {
    this.setState({ ceilingHeight: e });
  }
  handleClick = () => {
    const otherData = {
      pipingOption: this.state.pipingOption,
      ceilingHeight: this.state.ceilingHeight
    };
    this.props.onAddToCart(otherData);
    this.addedToCart();
  }
  handleCartQuantityChange = (event) => {
    if (this.props.onCartQuantityChange) {
      this.props.onCartQuantityChange(event, event.target.value);
    }
  }

  render() {
    if (this.hasVariants) {
      return (
        <div className="pdp add-to-cart block">
          <input
            className="form-control input-md"
            id="add-to-cart-quantity"
            min="1"
            name="addToCartQty"
            onChange={this.handleCartQuantityChange}
            type="number"
            value={this.props.cartQuantity}
          />
          {this.state.addedToCart ? <span> Don't forget to buy Cushions </span> :

            <button
              className="input-group-addon add-to-cart-text js-add-to-cart"
              data-i18n="productDetail.addToCart"
              onClick={this.handleClick}
            >
              <Translation defaultValue="Add to cart" i18nKey="productDetail.addToCart" />
            </button>
          }


        </div>
      );
    }

    if (this.props.editable && this.hasVariants === false) {
      return (
        <Alert>
          <Translation defaultValue="Add options to enable 'Add to Cart' button" i18nkey="productVariant.addVariantOptions" />
        </Alert>
      );
    }
    return null;
  }
}

AddToCartButton.propTypes = {
  cartQuantity: PropTypes.number,
  editable: PropTypes.bool,
  onAddToCart: PropTypes.func,
  onCartQuantityChange: PropTypes.func,
  onClick: PropTypes.func,
  product: PropTypes.object,
  variants: PropTypes.arrayOf(PropTypes.object)
};

export default AddToCartButton;
