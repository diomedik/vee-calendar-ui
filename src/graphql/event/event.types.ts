import { IEvent } from "../../interfaces/Event.interface";

export type GetEventsResult = {
  events: {
    items: IEvent[];
  }
};

export type CreateEventInput = Omit<IEvent, "id">;

export type CreateEventResult = {
  event: IEvent;
};
