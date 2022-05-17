import Head from "next/head";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { Link } from "./../components";
import { executeQueryAndMutation } from "./../utils/utils";

export function List(props) {
  const { keyString: key } = props;
  const returnString =
    key === "users"
      ? "{id email lastName firstName}"
      : "{id userId amount tip}";
  const [list, setList] = useState(null);
  useEffect(async () => {
    const response = await executeQueryAndMutation(`{${key}${returnString}}`);
    setList(response[key]);
  }, []);

  const handleDelete = async (conceptId) => {
    const queryString =
      key === "users"
        ? `mutation{deleteUser(id: "${conceptId}")}`
        : `mutation{deleteDonation(id: "${conceptId}")}`;
    const res = await executeQueryAndMutation(queryString);
    const response = await executeQueryAndMutation(`{${key}${returnString}}`);
    setList(response[key]);
  };
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
      <main>
        {key === "donations" ? (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Users
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        ) : null}
        <div>
          <h1>{key === "users" ? "Users" : "Donations"}</h1>
          <Link href={`/${key}/add`} className="btn btn-sm btn-success mb-2">
            Add
          </Link>
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ width: "30%" }}>
                  {key === "users" ? "Name" : "UserID"}
                </th>
                <th style={{ width: "30%" }}>
                  {key === "users" ? "Email" : "Amount"}
                </th>
                <th style={{ width: "30%" }}>
                  {key === "users" ? "LastName" : "Tip"}
                </th>
                <th style={{ width: "10%" }}></th>
              </tr>
            </thead>
            <tbody>
              {list &&
                list.map((item) => (
                  <tr key={item.id}>
                    <td>{item?.firstName || item?.userId}</td>
                    <td>{item?.email || item?.amount}</td>
                    <td>{item?.lastName || item?.tip}</td>
                    <td style={{ whiteSpace: "nowrap" }}>
                      {
                        <NextLink
                          href={`/${key}/edit/${item.id}`}
                          className="btn btn-sm btn-primary mr-1"
                        >
                          Edit
                        </NextLink>
                      }
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="btn btn-sm btn-danger btn-delete-user"
                      >
                        <span>Delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              {!list && (
                <tr>
                  <td colSpan="4" className="text-center">
                    <div className="spinner-border spinner-border-lg align-center"></div>
                  </td>
                </tr>
              )}
              {list && !list.length && (
                <tr>
                  <td colSpan="4" className="text-center">
                    <div className="p-2">No Concept To Display</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
