import React from 'react';

export type NoUser = {};

export interface LocalUser {
  id: number;
  displayName: string;
  age: number;
  gender: string;
}

export type ContextualUser = LocalUser | NoUser;

export function isLocalUser(user: ContextualUser): user is LocalUser {
  return 'name' in user;
}

export const defaultState: ContextualUser = {};

export const UserContext = React.createContext<ContextualUser>(defaultState);
