import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../graphql/event/event.query";
import { GetEventsResult } from "../graphql/event/event.types";

export const useEvents = (endDate: Date, startDate: Date) => {
  const result = useQuery<GetEventsResult>(GET_EVENTS, {variables: {endDate, startDate}});

  return result;
};
