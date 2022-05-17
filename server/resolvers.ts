const { users: usersData, donations: donationsData } = require("./db");

const Query = {
  users: () => usersData.list(),
  donations: () => donationsData.list(),
};

const Mutation = {
  /**
   * createUser resolver is responsible for creating new user
   * in the data with the given input from the endpoint
   *
   * @param parent the invoking resolver up in the hierarchy
   * @param newUser the input data provided at the endpoint
   * @returns {Promise<user>}
   */
  createUser: async (parent, newUser) => {
    const { firstName, lastName, email } = newUser;
    const id = usersData.create({
      firstName,
      lastName,
      email,
    });
    return { id, ...newUser };
  },

  /**
   * deleteUser is responsible for deleting the user from
   * data, based on the id provided at endpoint
   *
   * @param parent the invoking resolver up in the hierarchy
   * @param param1 the id of user provided in the endpoint
   * @returns {Promise<number>} id of user
   */
  deleteUser: async (parent, { id }) => {
    usersData.delete(id);
    return id;
  },

  /**
   * updateUser is responsible for updating the user based on
   * the provided(new) data
   *
   * @param parent the invoking resolver up in the hierarchy
   * @param param1 provided user update input
   * @returns {Promise<user>}
   */
  updateUser: async (
    parent,
    { id, firstName: newFirstName, lastName: newLastName, email: newEmail }
  ) => {
    const {
      firstName: currentFirstName,
      lastName: currentLastName,
      email: currentEmail,
    } = usersData.get(id);
    usersData.update({
      id,
      firstName: newFirstName || currentFirstName,
      lastName: newLastName || currentLastName,
      email: newEmail || currentEmail,
    });
    return usersData.get(id);
  },

  /**
   * createDonation resolver is responsible for creating new donation
   * in the data with the given input from the endpoint
   *
   * @param parent the invoking resolver up in the hierarchy
   * @param newDonation provided donation create input
   * @returns {Promise<donation>}
   */
  createDonation: async (parent, newDonation) => {
    const { userId, amount, tip } = newDonation;
    const id = donationsData.create({
      userId,
      amount,
      tip,
    });
    return { id, ...newDonation };
  },

  /**
   * deleteDonation is responsible for deleting a donation from
   * data, based on the id provided at endpoint
   *
   * @param parent the invoking resolver up in the hierarchy
   * @param param1 the id of donation provided in the endpoint
   * @returns {Promise<number>} id of donation
   */
  deleteDonation: async (parent, { id }) => {
    donationsData.delete(id);
    return id;
  },

  /**
   * updateDonation is responsible for updating the donation based on
   * the provided(new) data
   *
   * @param parent the invoking resolver up in the hierarchy
   * @param param1 provided donation update input
   * @returns {Promise<donation>}
   */
  updateDonation: async (
    parent,
    { id, userId: newUserId, amount: newAmount, tip: newTip }
  ) => {
    const {
      userId: currentUserId,
      amount: currentAmount,
      tip: currentTip,
    } = donationsData.get(id);

    donationsData.update({
      id,
      userId: newUserId || currentUserId,
      amount: newAmount || currentAmount,
      tip: newTip || currentTip,
    });
    return donationsData.get(id);
  },
};
module.exports = { Query, Mutation };
