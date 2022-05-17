import { useRouter } from "next/router";
import Head from "next/head";
import { useState } from "react";
import { executeQueryAndMutation } from "../../utils/utils";

export { AddEdit };

function AddEdit(props) {
  const donation = props?.donation;
  const isAddMode = !donation;
  const router = useRouter();
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function onSubmit() {
    return isAddMode ? createDonation() : updateDonation(donation.id);
  }

  async function createDonation() {
    await executeQueryAndMutation(
      `mutation{createDonation(userId:"${userFirstName}", amount:${userLastName}, tip:${userEmail}){id userId amount tip}}`
    );
    router.push("..");
  }

  async function updateDonation(id) {
    const response = await executeQueryAndMutation(
      `mutation{updateDonation(id:"${id}",userId:"${userFirstName}", amount:${userLastName}, tip:${userEmail}){id userId amount tip}}`
    );
    router.push("..");
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
          <label>UserId</label>
          <input
            required
            class="form-control"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Donation</label>
          <input
            class="form-control"
            id="tip"
            placeholder="number"
            required
            onChange={(e) => {
              setUserFirstName(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Tip</label>
          <input
            class="form-control"
            id="tip"
            placeholder="number"
            required
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
