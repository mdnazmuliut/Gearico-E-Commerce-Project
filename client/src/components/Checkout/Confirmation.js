import styled from "styled-components";

const Confirmation = ({ subStatus, setSubStatus }) => { 
    
    let message = "";

    if (subStatus === "pending") message = "Please wait..."
    if (subStatus === "confirmed") message = "Order placed! Thank you for shopping with us."
    if (subStatus === "error") message = "There was an error with your order, please go back and try again."

    if (subStatus !== "idle") return (
        <PageWrapper onClick={() => setSubStatus("idle")}>
            <ContentWrapper onClick={(ev) => ev.stopPropagation()}>
                <div>{message}</div>
            </ContentWrapper>
        </PageWrapper>
    )

    return null;
};

const PageWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
    width: 400px;
    height: 200px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Confirmation;