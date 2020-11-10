export const getAll = `select * from levels where status = "1" `;
export const getById = `select * from levels where levelid =$1 and status =$2`;