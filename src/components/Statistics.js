import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import styled from "styled-components";

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &.mt{
    margin-top: 10px;
  }
`;

export default function Statistics({ dashboard }) {
  return (
    <React.Fragment>
      <Title>Headcount</Title>
      <StatisticsContainer className='mt'>
        <Typography color="text.secondary" sx={{ flex: 1, maxWidth: "65%" }}>
          Guests:
        </Typography>
        <Typography component="p" variant="h5">
          {dashboard?.rsvp_statistics?.total}
        </Typography>
      </StatisticsContainer>

      <StatisticsContainer>
        <Typography color="text.secondary" sx={{ flex: 1, maxWidth: "65%" }}>
          Breakfasts:
        </Typography>
        <Typography component="p" variant="h5">
          {dashboard?.breakfast_statistics?.yes}
        </Typography>
      </StatisticsContainer>
      <StatisticsContainer>
        <Typography color="text.secondary" sx={{ flex: 1, maxWidth: "65%" }}>
          Dodgeball:
        </Typography>
        <Typography component="p" variant="h5">
          {dashboard?.dodge_ball_statistics?.yes}
        </Typography>
      </StatisticsContainer>
      <StatisticsContainer>
        <Typography color="text.secondary" sx={{ flex: 1, maxWidth: "65%" }}>
          Campers:
        </Typography>
        <Typography component="p" variant="h5">
          {dashboard?.lodging_statistics?.onsite}
        </Typography>
      </StatisticsContainer>
    </React.Fragment>
  );
}
