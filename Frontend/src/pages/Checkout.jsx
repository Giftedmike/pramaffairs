import React from 'react'

const Checkout = () => {
  return (
    <>
        <div className="row">
            <div className="col-75">
                <div className="container">
                <form action="/">

                    <div className="row">
                    <div className="col-50">
                        <h3>Billing Address</h3>
                        <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Mike Freeman" />
                        <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                        <input type="text" id="email" name="email" placeholder="mike@example.com" />
                        <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                        <input type="text" id="adr" namen="address" placeholder="No25. James Street" />
                        <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                        <input type="text" id="city" name="city" placeholder="Abuja" />

                        <div className="row">
                        <div className="col-50">
                            <label htmlFor="state">State</label>
                            <input type="text" id="state" name="state" placeholder="Kano" />
                        </div>
                        <div className="col-50">
                            <label htmlFor="zip">Post Code</label>
                            <input type="text" id="zip" name="zip" placeholder="10001" />
                        </div>
                        </div>
                    </div>

                    <div className="col-50">
                        <h3>Payment</h3>
                        <label htmlFor="fname">Accepted Cards</label>
                        <div className="icon-container">
                        <i className="fab fa-cc-visa pe-2" style={{color: "navy"}}></i>
                        <i className="fab fa-cc-amex pe-2" style={{color: "blue"}}></i>
                        <i className="fab fa-cc-mastercard" style={{color: "red"}}></i>
                        </div>
                        <label htmlFor="cname">Name on Card</label>
                        <input type="text" id="cname" name="cardname" placeholder="Mike Freeman" />
                        <label htmlFor="ccnum">Credit card number</label>
                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                        <label htmlFor="expmonth">Exp Month</label>
                        <input type="text" id="expmonth" name="expmonth" placeholder="September" />

                        <div className="row">
                        <div className="col-50">
                            <label htmlFor="expyear">Exp Year</label>
                            <input type="text" id="expyear" name="expyear" placeholder="2018" />
                        </div>
                        <div className="col-50">
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" placeholder="352" />
                        </div>
                        </div>
                    </div>

                    </div>
                    <label>
                    <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
                    </label>
                    <input type="submit" value="Continue to checkout" className="btn btn-success" />
                </form>
                </div>
            </div>
{/* What ever product added to cart will appear here */}
            <div className="col-25">
                <div className="container">
                <h4>Cart
                    <span className="price" style={{color: "black"}}>
                    <i className="fa fa-shopping-cart"></i>
                    <b>4</b>
                    </span>
                </h4>
                <p><a href="#">Product 1</a> <span className="price">&#8358;15</span></p>
                <p><a href="#">Product 2</a> <span className="price">&#8358;5</span></p>
                <p><a href="#">Product 3</a> <span className="price">&#8358;8</span></p>
                <p><a href="#">Product 4</a> <span className="price">&#8358;2</span></p>
                <hr />
                <p>Total <span className="price" style={{color: "black"}}><b>&#8358;30</b></span></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout