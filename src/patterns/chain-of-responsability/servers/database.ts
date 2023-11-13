import PermissionType from "./permission-type";

interface IDataBaseItem {
  email: string;
  password: string;
  permission: PermissionType;
}

export const database: IDataBaseItem[] = [
  {
    email: "igor.gutoo63@gmail.com",
    password: "123456",
    permission: PermissionType.ADMIN,
  },
  {
    email: "user@gmail.com",
    password: "123456",
    permission: PermissionType.USER,
  },
];
