import { List } from "../../components/List";

export default List;

export async function getServerSideProps({ params: { keyString } }) {
  // const keyString = { key }; //await userService.getById(params.id);

  return {
    props: { keyString },
  };
}
