import { AddEdit } from "./../../../components/users/AddEdit";

export default AddEdit;

export async function getServerSideProps({ params: { id } }) {
  const user = { id };

  return {
    props: { user },
  };
}
