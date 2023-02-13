"use client";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";
import { Container, Grid, Card, Box } from "@mui/material";

import { useAppContext } from "../../app/context/AppContext";
import UserCard from "../UserDetails/components/UserCard";

const Mainpage = () => {
  const { users } = useAppContext();
  const router = useRouter();

  return (
    <Container>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={{ display: "flex", flexWrap: "wrap" }}
      >
        {users
          .filter((user: User, i: number) => i < 8)
          ?.map((user: User) => (
            <UserCard
              user={user}
              key={user.id}
              mainpageVariant
              handleClick={() => router.push(`/user/${user.id}`)}
            />
          ))}
      </Grid>
    </Container>
  );
};

export default Mainpage;
