import React from "react";
import {
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
  Badge,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "../context/CartContext";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = useGlobalContext();
  console.log("header", cart);
  return (
    <Navbar bg="dark" style={{ height: "80" }}>
      <Container>
        <Navbar.Brand>
          <Link path="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text>
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
          ></FormControl>
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              {<FaShoppingCart color="white" fontSize="25px" />}
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                cart.map((pr) => {
                  return (
                    <div
                      style={{
                        padding: 10,
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <img
                        src={pr.image}
                        alt={pr.name}
                        style={{ width: "25px", height: "25px" }}
                      />
                      <span>{pr.name}</span>
                      <span>{`$${pr.price}`}</span>
                      <span style={{ marginLeft: "auto" }}>
                        <AiFillDelete
                          fontSize="20px"
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: pr.id,
                            });
                          }}
                        />
                      </span>
                    </div>
                  );
                })
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty</span>
              )}
              <Link to="/cart">
                <Button style={{ width: "95%", margin: "0 10px" }}>
                  Go To Cart
                </Button>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
