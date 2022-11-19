export const chkFilledObj = (obj) => {
  return Object.values(obj).every((v) => v.length !== 0);
};

export const chkEmptyObj = (obj) => {
  return Object.values(obj).every((v) => v.length === 0);
};
