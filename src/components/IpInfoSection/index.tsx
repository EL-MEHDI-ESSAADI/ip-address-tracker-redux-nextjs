import React, { useState } from "react";
import styled from "styled-components";

const Divider = styled.li`
   width: 1px;
   height: 40px;
   margin-inline: 1rem;
   background-color: #dbdbdb;
   &:last-of-type {
      display: none;
   }
`;

const InfoItemName = styled.header`
   text-transform: uppercase;
`;
const InfoItemData = styled.p`
   text-transform: capitalize;
`;

const InfoList = styled.ul`
   display: flex;
   align-items: center;
   justify-content: space-between;
   @media screen and (max-width: 692px) {
      row-gap: 1rem;
      align-items: flex-start;
      flex-wrap: wrap;

      & > li {
         flex-basis: 50%;
         text-align: center;
      }
      ${Divider} {
         display: none;
      }
   }
   @media screen and (max-width: 450px) {
      & > li {
         flex-basis: 100%;
      }
   }
`;

const StyledIpInfoSection = styled.section`
   width: min(90vw, 900px);
   padding: 1.5rem 2rem;
   margin: auto;
   border-radius: 1rem;
   background-color: var(--cl-primary);
`;

function IpInfoSection() {
   const [ipInfo, setipInfo] = useState([
      { name: "ip adress", data: "192.459.625.45" },
      { name: "location", data: "morocco" },
      { name: "timezone", data: "UTC-05:00" },
      { name: "isp", data: "inwi" },
   ]);
   return (
      <StyledIpInfoSection>
         <InfoList className="not-styled">
            {ipInfo.map((infoItem, index) => (
               <React.Fragment key={index}>
                  <li>
                     <InfoItemName className="fs-7 fw-700 text-accent">{infoItem.name}</InfoItemName>
                     <InfoItemData className="fs-4 fw-700 text-secondary mt-1">{infoItem.data}</InfoItemData>
                  </li>
                  <Divider />
               </React.Fragment>
            ))}
         </InfoList>
      </StyledIpInfoSection>
   );
}

export default IpInfoSection;
