import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import { executeQueryAndMutation } from "./../../utils/utils";

export { AddEdit };

function AddEdit(props) {
  const user = props?.user;
  const isAddMode = !user;
  const router = useRouter();
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function onSubmit() {
    return isAddMode ? createUser() : updateUser(user.id);
  }

  async function createUser() {
    executeQueryAndMutation(
      `mutation{createUser(firstName:"${userFirstName}", lastName:"${userLastName}", email:"${userEmail}"){id email lastName firstName}}`
    );
    console.log(response.data.user);
    router.push("/");
  }

  async function updateUser(id) {
    const response = await executeQueryAndMutation(
      `mutation{updateUser(id: "${id}",firstName:"${userFirstName}", lastName:"${userLastName}", email:"${userEmail}"){id email lastName firstName}}`
    );
    console.log(response.user);
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">First Name</label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            placeholder="First Name"
            onChange={(e) => {
              setUserFirstName(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Last Name</label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Last Name"
            onChange={(e) => {
              setUserLastName(e.target.value);
            }}
          />
        </div>
        <button onClick={(e) => onSubmit()} class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
