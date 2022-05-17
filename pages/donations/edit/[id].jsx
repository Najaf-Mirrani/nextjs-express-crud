import { AddEdit } from "../../../components/donations/addEdit";

export default AddEdit;

export async function getServerSideProps({ params: { id } }) {
  const donation = { id };

  return {
    props: { donation },
  };
}
