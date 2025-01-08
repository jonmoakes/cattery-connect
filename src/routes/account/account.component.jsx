import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const Account = () => {
  const { currentUser } = useGetCurrentUserSelectors();

  return (
    <Container>
      <ParentDiv>
        <h1>account</h1>
      </ParentDiv>
      <ParentDiv>
        <h2>user details</h2>

        {currentUser
          ? Object.entries(currentUser).map(([key, value]) => {
              return (
                <div style={{ width: "100%" }} key={key}>
                  <h3>{key}</h3>

                  {key === "email" ? (
                    <p style={{ textTransform: "lowerCase" }}>{value}</p>
                  ) : key === "address" && !value ? (
                    <p>not given</p>
                  ) : (
                    <p>{value}</p>
                  )}

                  <BlackHr />
                </div>
              );
            })
          : null}
      </ParentDiv>
    </Container>
  );
};

export default Account;
