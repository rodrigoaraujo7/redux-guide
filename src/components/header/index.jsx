import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);

  console.log({ currentUser })

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  // using the dispatch hook
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch({ //entering the user-reduce condition
      type: 'user/login', // type is required
      payload: { // payload isn't required
        name: 'Rodrigo',
        email: 'rodrigo@gmail.com'
      },
    })
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        <div onClick={handleLoginClick}>Login</div>
        <div onClick={handleCartClick}>Cart</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
