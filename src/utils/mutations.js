// mutations.js
import { gql } from "@apollo/client";

// Mutation to add a user (for signup)
export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $email: String!
    $password: String!
    $state: String!
    $gender: String!
    $interestedIn: String!
    $profileImage: String!
    $city: String
  ) {
    addUser(
      name: $name
      email: $email
      password: $password
      state: $state
      gender: $gender
      interestedIn: $interestedIn
      profileImage: $profileImage
      city: $city
    ) {
      token
      user {
        id
        name
        email
        password
        city
        state
        gender
        interestedIn
        profileImage
      }
    }
  }
`;

// Mutation to login a user (for login)
export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

// Mutation to update user profile
export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: ID!
    $name: String
    $email: String
    $password: String
  ) {
    updateUser(id: $id, name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

// Mutation to delete a user
export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      email
    }
  }
`;
