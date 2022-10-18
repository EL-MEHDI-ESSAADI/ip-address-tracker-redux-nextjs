export const actionTypes = {
   CHANGE_USER_NAME: "CHANGE_USER_NAME",
};

export const changeUserName = (newUserName: string) => {
   return {
      type: actionTypes.CHANGE_USER_NAME,
      payload: newUserName,
   };
};
