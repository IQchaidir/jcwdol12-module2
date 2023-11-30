import { cache } from "react";

export const revalidate = 1800;

export const getServerTime = cache(async (param) => {
  console.log(param);
  const date = new Date();
  return date.getTime();
});
