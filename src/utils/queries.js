import { gql } from "@apollo/client";

// Fetch all users
export const GET_USERS = gql`
  query {
    users {
      id
      name
      email
      city
      state
      gender
      interestedIn
      profileImage
    }
  }
`;

// Fetch a single user by ID
export const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      city
      state
      gender
      interestedIn
      profileImage
      attendedEvents {
        id
        eventName
        date
      }
      upcomingEvents {
        id
        eventName
        date
      }
    }
  }
`;

// Fetch all events
export const GET_EVENTS = gql`
  query {
    events {
      id
      eventName
      description
      date
      time
      city
      address
      images
      eventType
      tags
      price
      status
      maxParticipants
      soldTickets
    }
  }
`;

// Fetch a single event by ID
export const GET_EVENT = gql`
  query getEvent($id: ID!) {
    event(id: $id) {
      id
      eventName
      description
      date
      time
      city
      address
      images
      eventType
      tags
      price
      status
      maxParticipants
      soldTickets
      attendees {
        id
        name
      }
    }
  }
`;

// Fetch user's attended and upcoming events
export const GET_MY_EVENTS = gql`
  query {
    myEvents {
      attendedEvents {
        id
        eventName
        date
      }
      upcomingEvents {
        id
        eventName
        date
      }
    }
  }
`;

// Fetch user's matches for a specific event
export const GET_MY_MATCHES = gql`
  query getMyMatches($eventId: ID!) {
    myMatches(eventId: $eventId) {
      id
      name
      email
      profileImage
    }
  }
`;

// Fetch chat messages by chat ID
export const GET_CHAT = gql`
  query getChat($id: ID!) {
    chat(id: $id) {
      id
      users {
        id
        name
      }
      messages {
        id
        message
        timestamp
        sender {
          id
          name
        }
      }
    }
  }
`;

// Fetch messages of a chat by chat ID
export const GET_MESSAGES = gql`
  query getMessages($chatId: ID!) {
    messages(chatId: $chatId) {
      id
      message
      timestamp
      sender {
        id
        name
      }
    }
  }
`;
