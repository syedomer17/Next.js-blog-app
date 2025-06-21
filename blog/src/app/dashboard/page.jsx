import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Welcome {session?.user?.name}</h1>
      <p>Email: {session?.user?.email}</p>
    </div>
  );
};
