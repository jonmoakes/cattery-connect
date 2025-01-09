import { format } from "date-fns";

import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const UserDetails = () => {
  const { currentUser } = useGetCurrentUserSelectors();

  return (
    <ParentDiv>
      <h2>user details</h2>

      {currentUser
        ? Object.entries(currentUser).map(([key, value]) => {
            return (
              <div style={{ width: "100%" }} key={key}>
                <h3>{key}</h3>
                {key === "email" || key === "catteryId" ? (
                  <p style={{ textTransform: "lowerCase" }}>{value}</p>
                ) : key === "address" && !value ? (
                  <p>not given</p>
                ) : key === "createdAt" ? (
                  <p>{format(value, "EEEE dd MMMM yyyy")}</p>
                ) : (
                  <p>{value}</p>
                )}

                <BlackHr />
              </div>
            );
          })
        : null}
    </ParentDiv>
  );
};

export default UserDetails;
