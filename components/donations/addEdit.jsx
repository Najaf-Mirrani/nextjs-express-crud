import { useRouter } from "next/router";
import Head from "next/head";
import { useState } from "react";
import { toast, ToastContainer } from "react-nextjs-toast";
import { executeQueryAndMutation } from "../../utils/utils";

export { AddEdit };

function AddEdit(props) {
  const donation = props?.donation;
  const isAddMode = !donation;
  const router = useRouter();
  const [userAmount, setUserAmount] = useState(null);
  const [userTip, setUserTip] = useState(null);
  const [userId, setUserId] = useState(null);

  function onSubmit() {
    return isAddMode ? createDonation() : updateDonation(donation.id);
  }

  async function createDonation() {
    if (userId && userAmount && userTip) {
      await executeQueryAndMutation(
        `mutation{createDonation(userId:"${userId}", amount:${userAmount}, tip:${userTip}){id userId amount tip}}`
      );
      router.push("..");
    } else {
      toast.notify(`please fill all the fields`);
    }
  }

  async function updateDonation(id) {
    if (userId && userAmount && userTip) {
      const response = await executeQueryAndMutation(
        `mutation{updateDonation(id:"${id}",userId:"${userId}", amount:${userAmount}, tip:${userTip}){id userId amount tip}}`
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
          <label>UserId</label>
          <input
            required
            className="form-control"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Donation</label>
          <input
            className="form-control"
            id="tip"
            placeholder="number"
            required
            onChange={(e) => {
              setUserAmount(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Tip</label>
          <input
            className="form-control"
            id="tip"
            placeholder="number"
            required
            onChange={(e) => {
              setUserTip(e.target.value);
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
