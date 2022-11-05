import React from "react";
import styled from "styled-components";
import SearchInput from "components/SearchInput";

// styles
const StyledIpSearchSection = styled.section`
   display: grid;
   justify-items: center;
   align-content: center;
   padding-block: 2rem 3rem;
   background: #6550b9 url("images/search-section-pattern-bg.png") center/cover;
`;

function IpSearchSection() {
   return (
      <StyledIpSearchSection>
         <h1 className="fs-2 fw-400">IP Address Tracker</h1>
         <SearchInput className="mt-3" />
      </StyledIpSearchSection>
   );
}

export default IpSearchSection;
