import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList = () => {
  const { users, loading, error } = useTypedSelector((state) => state.user);

  return <div>UserList</div>;
};

export default UserList;
