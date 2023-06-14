import { gql } from "@apollo/client";

export const CREATE_EVENT = gql`
  mutation create($type: EventTypes!, $rrule: RruleString!) {
    saveEvent(type: $type, rrule: $rrule) {
      id,
      startDate,
      endDate,
      rrule,
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation UpdateEvent($id: ID!, $event: EventInput!) {
    updateEvent(id: $id, event: $event) {
      id
      name
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation DeleteEvent($id: ID!) {
    deleteEvent(id: $id) {
      affected
    }
  }
`;
