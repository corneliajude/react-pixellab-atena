class NewsletterForm extends React.Component {
  // State V1
  state = {
    email: '',
    formMessage: '',
    busy: false,
    submitted: false,
    successMessage: '',
  };

  validateEmail(email) {
    // Regex Object
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  }

  onSubmit = (event) => {
    event.preventDefault();
    // event.target['field-newsletter'].value
    const email = this.state.email;

    this.setState({ formMessage: '' });

    if (!this.validateEmail(email)) {
      this.setState({
        formMessage: `${this.state.email} is not a valid email. Please use a valid email!`,
      });

      return;
    }

    this.setState({
      busy: true,
    });

    setTimeout(() => {
      this.setState({
        busy: false,
        email: '',
        submitted: true,
        successMessage: `${this.state.email} subscribed!`,
      });
    }, 3000);
  };

  onInputChange = (event) => {
    // currentTarget ----> elementul pe care am pus eventul
    // target ------> elementul de pe care a plecat eventul
    const email = event.target.value;

    this.setState({ email });
  };

  render() {
    // console.log(this.state.email); ptr a vedea cum se modifica starea

    if (this.state.submitted) {
      return (
        <div className="container success-message">
          {this.state.successMessage}
        </div>
      );
    }

    return (
      <form
        action=""
        className="form-newsletter container"
        onSubmit={this.onSubmit}
      >
        <label htmlFor="field-newsletter">
          Subscribe to our <span>newsletter</span>
        </label>
        <input
          type="text"
          name="field-newsletter"
          id="field-newsletter"
          value={this.state.email}
          onChange={this.onInputChange}
          placeholder="enter your email address to receive the latest news!"
        ></input>
        {this.state.email}
        <button type="submit">
          {this.state.busy ? '...loading' : 'Subscribe'}
        </button>

        <div className="form-message">{this.state.formMessage}</div>
      </form>
    );
  }
}

const newsletterContainer = document.querySelector('.home-newsletter');
// mount react the good way
ReactDOM.createRoot(newsletterContainer).render(
  <NewsletterForm></NewsletterForm>,
);

class AddToCartButton extends React.Component {
  // State V2
  constructor(props) {
    // s-a chemat constructorul clasei de sus
    super(props);

    this.state = {
      busy: false,
    };
  }

  onCLick = () => {
    this.setState({
      busy: true,
    });

    console.log('Should Run once!');

    setTimeout(() => {
      this.setState({
        busy: false,
      });
    }, 2000);
  };

  render() {
    return (
      <button
        onClick={this.onCLick}
        type="button"
        title="Add to cart"
        className="product-control"
        disabled={this.state.busy}
      >
        Add to cart
        {this.state.busy ? <i className="fas fa-spinner"></i> : <></>}
      </button>
    );
  }
}

class ProductTileControls extends React.Component {
  render() {
    return <AddToCartButton></AddToCartButton>;
  }
}

const productTileControls = document.querySelectorAll('.product-tile-controls');
productTileControls.forEach((productTileControl) => {
  ReactDOM.createRoot(productTileControl).render(
    <ProductTileControls></ProductTileControls>,
  );
});
