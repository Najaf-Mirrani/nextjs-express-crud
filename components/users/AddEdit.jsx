import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import { toast, ToastContainer } from "react-nextjs-toast";
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
    if (userEmail && userFirstName && userLastName) {
      executeQueryAndMutation(
        `mutation{createUser(firstName:"${userFirstName}", lastName:"${userLastName}", email:"${userEmail}"){id email lastName firstName}}`
      );
      router.push("..");
    } else {
      toast.notify(`please fill all the fields`);
    }
  }

  async function updateUser(id) {
    if (userEmail && userFirstName && userLastName) {
      const response = await executeQueryAndMutation(
        `mutation{updateUser(id: "${id}",firstName:"${userFirstName}", lastName:"${userLastName}", email:"${userEmail}"){id email lastName firstName}}`
      );
      router.push("..");
    } else {
      toast.notify(`please fill all the fields`);
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Nest-Graphql</title>
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
      <ToastContainer />
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            required
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">First Name</label>
          <input
            className="form-control"
            id="exampleInputPassword1"
            required
            placeholder="First Name"
            onChange={(e) => {
              setUserFirstName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Last Name</label>
          <input
            required
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Last Name"
            onChange={(e) => {
              setUserLastName(e.target.value);
            }}
          />
        </div>
        <button onClick={(e) => onSubmit()} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
