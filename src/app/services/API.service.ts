/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection";
  items?: Array<Category | null> | null;
  nextToken?: string | null;
};

export type Category = {
  __typename: "Category";
  id?: string;
  name?: string | null;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
  ads?: ModelAdvertisementsConnection;
};

export type ModelAdvertisementsConnection = {
  __typename: "ModelAdvertisementsConnection";
  items?: Array<Advertisements | null> | null;
  nextToken?: string | null;
};

export type Advertisements = {
  __typename: "Advertisements";
  id?: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  createdTime?: string;
  createdAt?: string;
  updatedAt?: string;
  user?: ModelUserConnection;
  category?: ModelCategoryConnection;
  owner?: string | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items?: Array<User | null> | null;
  nextToken?: string | null;
};

export type User = {
  __typename: "User";
  id?: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
  ads?: ModelAdvertisementsConnection;
};

export type ModelAdvertisementsFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  categoryID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  country?: ModelStringInput | null;
  state?: ModelStringInput | null;
  city?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  createdTime?: ModelStringInput | null;
  and?: Array<ModelAdvertisementsFilterInput | null> | null;
  or?: Array<ModelAdvertisementsFilterInput | null> | null;
  not?: ModelAdvertisementsFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateUserInput = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type UpdateUserInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateCategoryInput = {
  id?: string | null;
  name?: string | null;
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type UpdateCategoryInput = {
  id: string;
  name?: string | null;
};

export type DeleteCategoryInput = {
  id?: string | null;
};

export type CreateAdvertisementsInput = {
  id?: string | null;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  createdTime: string | Date;
};

export type ModelAdvertisementsConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  categoryID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  country?: ModelStringInput | null;
  state?: ModelStringInput | null;
  city?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  createdTime?: ModelStringInput | null;
  and?: Array<ModelAdvertisementsConditionInput | null> | null;
  or?: Array<ModelAdvertisementsConditionInput | null> | null;
  not?: ModelAdvertisementsConditionInput | null;
};

export type UpdateAdvertisementsInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  createdTime?: string | null;
};

export type DeleteAdvertisementsInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type ListCategoryIDQuery = {
  __typename: "ModelCategoryConnection";
  items?: Array<{
    __typename: "Category";
    id: string;
    name?: string | null;
    ads?: {
      __typename: "ModelAdvertisementsConnection";
      items?: Array<{
        __typename: "Advertisements";
        title?: string | null;
      } | null> | null;
    } | null;
  } | null> | null;
};

export type ListAdsHomeQuery = {
  __typename: "ModelAdvertisementsConnection";
  items?: Array<{
    __typename: "Advertisements";
    id: string;
    title?: string | null;
    description?: string | null;
    categoryID?: string | null;
    userID?: string | null;
    country?: string | null;
    state?: string | null;
    city?: string | null;
    phone?: string | null;
    createdTime: string;
    createdAt: string;
    updatedAt: string;
    user?: {
      __typename: "ModelUserConnection";
      items?: Array<{
        __typename: "User";
        name?: string | null;
      } | null> | null;
    } | null;
    category?: {
      __typename: "ModelCategoryConnection";
      items?: Array<{
        __typename: "Category";
        name?: string | null;
      } | null> | null;
    } | null;
  } | null> | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type CreateCategoryMutation = {
  __typename: "Category";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type UpdateCategoryMutation = {
  __typename: "Category";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type DeleteCategoryMutation = {
  __typename: "Category";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type CreateAdvertisementsMutation = {
  __typename: "Advertisements";
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  createdTime: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type UpdateAdvertisementsMutation = {
  __typename: "Advertisements";
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  createdTime: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type DeleteAdvertisementsMutation = {
  __typename: "Advertisements";
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  createdTime: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items?: Array<{
    __typename: "User";
    id: string;
    name?: string | null;
    email?: string | null;
    address?: string | null;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    ads?: {
      __typename: "ModelAdvertisementsConnection";
      nextToken?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCategoryQuery = {
  __typename: "Category";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type ListCategorysQuery = {
  __typename: "ModelCategoryConnection";
  items?: Array<{
    __typename: "Category";
    id: string;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    ads?: {
      __typename: "ModelAdvertisementsConnection";
      nextToken?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetAdvertisementsQuery = {
  __typename: "Advertisements";
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  createdTime: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type ListAdvertisementssQuery = {
  __typename: "ModelAdvertisementsConnection";
  items?: Array<{
    __typename: "Advertisements";
    id: string;
    title?: string | null;
    description?: string | null;
    categoryID?: string | null;
    userID?: string | null;
    country?: string | null;
    state?: string | null;
    city?: string | null;
    phone?: string | null;
    createdTime: string;
    createdAt: string;
    updatedAt: string;
    user?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    category?: {
      __typename: "ModelCategoryConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateCategorySubscription = {
  __typename: "Category";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnUpdateCategorySubscription = {
  __typename: "Category";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnDeleteCategorySubscription = {
  __typename: "Category";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateAdvertisementsSubscription = {
  __typename: "Advertisements";
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  createdTime: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type OnUpdateAdvertisementsSubscription = {
  __typename: "Advertisements";
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  createdTime: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type OnDeleteAdvertisementsSubscription = {
  __typename: "Advertisements";
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  createdTime: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async ListCategoryID(): Promise<ListCategoryIDQuery> {
    const statement = `query ListCategoryID {
        listCategorys {
          __typename
          items {
            __typename
            id
            name
            ads {
              __typename
              items {
                __typename
                title
              }
            }
          }
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <ListCategoryIDQuery>response.data.listCategorys;
  }
  async ListAdsHome(
    filter?: ModelAdvertisementsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAdsHomeQuery> {
    const statement = `query ListAdsHome($filter: ModelAdvertisementsFilterInput, $limit: Int, $nextToken: String) {
        listAdvertisementss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            categoryID
            userID
            country
            state
            city
            phone
            createdTime
            createdAt
            updatedAt
            user {
              __typename
              items {
                __typename
                name
              }
            }
            category {
              __typename
              items {
                __typename
                name
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAdsHomeQuery>response.data.listAdvertisementss;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          address
          phone
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          address
          phone
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          address
          phone
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateCategory(
    input: CreateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<CreateCategoryMutation> {
    const statement = `mutation CreateCategory($input: CreateCategoryInput!, $condition: ModelCategoryConditionInput) {
        createCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCategoryMutation>response.data.createCategory;
  }
  async UpdateCategory(
    input: UpdateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<UpdateCategoryMutation> {
    const statement = `mutation UpdateCategory($input: UpdateCategoryInput!, $condition: ModelCategoryConditionInput) {
        updateCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCategoryMutation>response.data.updateCategory;
  }
  async DeleteCategory(
    input: DeleteCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<DeleteCategoryMutation> {
    const statement = `mutation DeleteCategory($input: DeleteCategoryInput!, $condition: ModelCategoryConditionInput) {
        deleteCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCategoryMutation>response.data.deleteCategory;
  }
  async CreateAdvertisements(
    input: CreateAdvertisementsInput,
    condition?: ModelAdvertisementsConditionInput
  ): Promise<CreateAdvertisementsMutation> {
    const statement = `mutation CreateAdvertisements($input: CreateAdvertisementsInput!, $condition: ModelAdvertisementsConditionInput) {
        createAdvertisements(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          categoryID
          userID
          country
          state
          city
          phone
          createdTime
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          category {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAdvertisementsMutation>response.data.createAdvertisements;
  }
  async UpdateAdvertisements(
    input: UpdateAdvertisementsInput,
    condition?: ModelAdvertisementsConditionInput
  ): Promise<UpdateAdvertisementsMutation> {
    const statement = `mutation UpdateAdvertisements($input: UpdateAdvertisementsInput!, $condition: ModelAdvertisementsConditionInput) {
        updateAdvertisements(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          categoryID
          userID
          country
          state
          city
          phone
          createdTime
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          category {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAdvertisementsMutation>response.data.updateAdvertisements;
  }
  async DeleteAdvertisements(
    input: DeleteAdvertisementsInput,
    condition?: ModelAdvertisementsConditionInput
  ): Promise<DeleteAdvertisementsMutation> {
    const statement = `mutation DeleteAdvertisements($input: DeleteAdvertisementsInput!, $condition: ModelAdvertisementsConditionInput) {
        deleteAdvertisements(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          categoryID
          userID
          country
          state
          city
          phone
          createdTime
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          category {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAdvertisementsMutation>response.data.deleteAdvertisements;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          name
          email
          address
          phone
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            email
            address
            phone
            createdAt
            updatedAt
            owner
            ads {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetCategory(id: string): Promise<GetCategoryQuery> {
    const statement = `query GetCategory($id: ID!) {
        getCategory(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCategoryQuery>response.data.getCategory;
  }
  async ListCategorys(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCategorysQuery> {
    const statement = `query ListCategorys($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String) {
        listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
            owner
            ads {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCategorysQuery>response.data.listCategorys;
  }
  async GetAdvertisements(id: string): Promise<GetAdvertisementsQuery> {
    const statement = `query GetAdvertisements($id: ID!) {
        getAdvertisements(id: $id) {
          __typename
          id
          title
          description
          categoryID
          userID
          country
          state
          city
          phone
          createdTime
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          category {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAdvertisementsQuery>response.data.getAdvertisements;
  }
  async ListAdvertisementss(
    filter?: ModelAdvertisementsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAdvertisementssQuery> {
    const statement = `query ListAdvertisementss($filter: ModelAdvertisementsFilterInput, $limit: Int, $nextToken: String) {
        listAdvertisementss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            categoryID
            userID
            country
            state
            city
            phone
            createdTime
            createdAt
            updatedAt
            user {
              __typename
              nextToken
            }
            category {
              __typename
              nextToken
            }
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAdvertisementssQuery>response.data.listAdvertisementss;
  }
  OnCreateUserListener: Observable<
    SubscriptionResponse<OnCreateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          name
          email
          address
          phone
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateUserSubscription>>;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<OnUpdateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          name
          email
          address
          phone
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateUserSubscription>>;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<OnDeleteUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          name
          email
          address
          phone
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteUserSubscription>>;

  OnCreateCategoryListener: Observable<
    SubscriptionResponse<OnCreateCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCategory {
        onCreateCategory {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCategorySubscription>>;

  OnUpdateCategoryListener: Observable<
    SubscriptionResponse<OnUpdateCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCategory {
        onUpdateCategory {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCategorySubscription>>;

  OnDeleteCategoryListener: Observable<
    SubscriptionResponse<OnDeleteCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCategory {
        onDeleteCategory {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCategorySubscription>>;

  OnCreateAdvertisementsListener: Observable<
    SubscriptionResponse<OnCreateAdvertisementsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAdvertisements {
        onCreateAdvertisements {
          __typename
          id
          title
          description
          categoryID
          userID
          country
          state
          city
          phone
          createdTime
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          category {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateAdvertisementsSubscription>>;

  OnUpdateAdvertisementsListener: Observable<
    SubscriptionResponse<OnUpdateAdvertisementsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAdvertisements {
        onUpdateAdvertisements {
          __typename
          id
          title
          description
          categoryID
          userID
          country
          state
          city
          phone
          createdTime
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          category {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateAdvertisementsSubscription>>;

  OnDeleteAdvertisementsListener: Observable<
    SubscriptionResponse<OnDeleteAdvertisementsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAdvertisements {
        onDeleteAdvertisements {
          __typename
          id
          title
          description
          categoryID
          userID
          country
          state
          city
          phone
          createdTime
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          category {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteAdvertisementsSubscription>>;
}
