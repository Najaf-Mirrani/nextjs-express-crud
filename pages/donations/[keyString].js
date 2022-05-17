import { List } from "../../components/List";

export default List;

export async function getServerSideProps({ params: { keyString } }) {
  return {
    props: { keyString },
  };
}
