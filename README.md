# CRUD GRAPHQL+NEXT+EXPRESS

The project contains the crud functionality of a simple user & donations schema.The technologies used in this project are NextJs, Express, NodeJs, GraphQl.

## Installation

Install NEXTJS-EXPRESS-CRUD with npm after extracting it

```bash
  npm install
```

## How to run

To start the backend express server

```bash
  npm run backend
```

To start the frontend next application

```bash
  npm run dev
```

## API Reference

## User Apis

#### Get all users

```http
  GET /users
```

#### Create user

Creates a user based on the information given in the mutation

```http
  POST /ceateUser
```

| Parameter     | Type     | Description                     |
| :------------ | :------- | :------------------------------ |
| `{firstName}` | `string` | **Required** first name of user |
| `{lastName}`  | `string` | **Required** last name of user  |
| `{email}`     | `string` | **Required** email of user      |

#### Update user

Updates a user based on the information given in the mutation.

```http
  POST /updateUser
```

| Parameter     | Type     | Description                               |
| :------------ | :------- | :---------------------------------------- |
| `{id}`        | `string` | **Required** Id of the user to be updated |
| `{firstName}` | `string` | first name of user                        |
| `{lastName}`  | `string` | last name of user                         |
| `{email}`     | `string` | email of user                             |

#### Delete user

Deletes a user based on the given user id

```http
  DELETE /deleteUser
```

| Parameter | Type     | Description                               |
| :-------- | :------- | :---------------------------------------- |
| `{id}`    | `string` | **Required** Id of the user to be deleted |

## Donation Apis

```http
  GET /donations
```

#### Create donation

Creates a donation based on the information given in the mutation

```http
  POST /ceateDonation
```

| Parameter  | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `{userId}` | `string` | id of user who donated |
| `{amount}` | `number` | amount of donation     |
| `{tip}`    | `number` | tip amount             |

#### Update Donation

Updates a donation based on the information given in the mutation

```http
  POST /updateDonation
```

| Parameter  | Type     | Description                                   |
| :--------- | :------- | :-------------------------------------------- |
| `{id}`     | `string` | **Required** Id of the donation to be updated |
| `{userId}` | `string` | id of user who donated                        |
| `{amount}` | `number` | amount of donation                            |
| `{tip}`    | `number` | tip amount                                    |

#### Delete donation

Deletes a donation based on the given donation id

```http
  DELETE /deleteDonation
```

| Parameter | Type     | Description                               |
| :-------- | :------- | :---------------------------------------- |
| `{id}`    | `string` | **Required** Id of the user to be deleted |

## Authors

- [@NajafAliMirrani](https://github.com/Najaf-Mirrani)
