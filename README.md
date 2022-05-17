
# CRUD GRAPHQL+NEXT+EXPRESS

The project contains the crud functionality of a simple user & donations schema.The technologies used in this project are NextJs, Express, NodeJs, GraphQl. 



## Installation

Install my-project with npm after extracting it

```bash
  cd my-project
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
  GET /api/users
```

#### Create user
Creates a user based on the information given in the mutation

```http
  POST /api/ceateUser
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `{firstName}`      | `string` | **Required** first name of user |
| `{lastName}`      | `string` | **Required**  last name of user |
| `{email}`      | `string` | **Required**  email of user |

#### Update user
Updates a user based on the information given in the mutation.If a field is left empty than it does not update that field

```http
  POST /api/updateUser
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `{id}`      | `string` | **Required** Id of the user to be updated |
| `{firstName}`      | `string` | first name of user |
| `{lastName}`      | `string` | last name of user |
| `{email}`      | `string` | email of user |

#### Delete user
Deletes a user based on the given user id

```http
  DELETE /api/deleteUser
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `{id}`      | `string` | **Required** Id of the user to be deleted |


## Donation Apis

```http
  GET /api/donations
```

#### Create donation
Creates a donation based on the information given in the mutation

```http
  POST /api/ceateDonation
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `{userId}`      | `string` | id of user who donated |
| `{amount}`      | `number` | amount of donation |
| `{tip}`      | `number` | tip amount |

#### Update Donation
Updates a donation based on the information given in the mutation.If a field is left empty than it does not update that field

```http
  POST /api/updateDonation
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `{id}`      | `string` | **Required** Id of the donation to be updated |
| `{userId}`      | `string` | id of user who donated |
| `{amount}`      | `number` | amount of donation |
| `{tip}`      | `number` | tip amount |

#### Delete donation
Deletes a donation based on the given donation id

```http
  DELETE /api/deleteDonation
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `{id}`      | `string` | **Required** Id of the user to be deleted |


## Authors

- [@NajafAliMirrani](https://github.com/Najaf-Mirrani)

