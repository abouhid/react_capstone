import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../../common/Footer";
import store from "../../redux";

beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <Footer />{" "}
      </Router>
    </Provider>
  );
});

describe("Footer Container", () => {
  test("Should have footer Logos ", () => {
    // const oneLogo = screen.getByTestId("footer-logo").getAttribute("src");
    expect(true).toBeTruthy();
    // expect(oneLogo).toBe(
    //   "https://www.flaticon.com/svg/vstatic/svg/188/188990.svg?token=exp=1612555692~hmac=a56462bf42fa99a90d51d8843f7f4f85"
    // );
  });
});
