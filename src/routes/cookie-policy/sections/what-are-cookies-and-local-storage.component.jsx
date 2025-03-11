import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";

const WhatAreCookiesAndLocalStorage = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">
      what are cookies and local storage?
    </CustomBalancedText>

    <CustomBalancedText>
      Cookies are small text files stored on your device ( computer, tablet, or
      mobile ) when you visit a website or use an app.
    </CustomBalancedText>

    <CustomBalancedText>
      They help the website or app recognise your device and store information
      about your preferences or past actions.
    </CustomBalancedText>

    <CustomBalancedText>
      Local storage is a web storage method that allows websites and apps to
      store data directly on your device.
    </CustomBalancedText>

    <CustomBalancedText>
      Unlike cookies, data stored in local storage is not automatically sent to
      the server with each HTTP request, and it can hold more data.
    </CustomBalancedText>
  </ParentDiv>
);

export default WhatAreCookiesAndLocalStorage;
