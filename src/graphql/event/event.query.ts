import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query getEvents($startDate: Date!, $endDate: Date!) {
    events(startDate: $startDate, endDate: $endDate) {
      items {
        id,
        type
        startDate
        endDate
        rrule
      }
    }
  }
`;

// export const GET_EVENT = gql`
//   query getEvent {
//     event($id: string!) {
//       id,
//       type
//       startDate
//       endDate
//       rrule
//     }
//   }
// `