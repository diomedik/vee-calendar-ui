import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../graphql/event/event.query";
import { GetEventsResult } from "../graphql/event/event.types";

export const useEvents = (endDate: string, startDate: string) => {
  const result = useQuery<GetEventsResult>(GET_EVENTS, {variables: {startDate, endDate}});

  return result;
};
