import { User } from "../../../types/user";

import Link from "next/link";
import { Box, Typography, Avatar, Container, Button } from "@mui/material";
import { FaRegUserCircle } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";
import { ImOffice } from "react-icons/im";

interface IProps {
  user: User;
  handleClick?: () => void;
  mainpageVariant?: boolean;
}

const UserCard = ({ user, handleClick, mainpageVariant }: IProps) => {
  return (
    <Container
      onClick={handleClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        maxWidth: {
          xl: "50%",
          lg: "50%",
          md: "50%",
          sm: "100%",
          xs: "100%",
        },
        margin: "1rem auto",
        border: "1px solid rgba(0, 0, 0, 0.06)",
        borderRadius: "0.5rem",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.03)",
        padding: "1rem",
        backgroundColor: "rgba(0, 0, 0, 0.07)",
      }}
    >
      <Avatar
        alt={user?.name}
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Faui.atlassian.com%2Faui%2Flatest%2Fdocs%2Favatars.html&psig=AOvVaw3sFas7RkRqxSs8Vgrq_t2D&ust=1676398047600000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjJ6MKLk_0CFQAAAAAdAAAAABAE"
      />
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "1.4rem",
        }}
      >
        {user?.name}
        {mainpageVariant ? ` (${user.username})` : " "}
      </Typography>
      {mainpageVariant && (
        <Typography
          sx={{
            fontSize: "1.2rem",
            textAlign: "center",
            fontWeight: "400",
            color: "gray",
            fontVariant: "small-caps",
          }}
          component="h2"
        >
          {user?.email}
        </Typography>
      )}
      {mainpageVariant && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "flex-row",
            alignItems: "center",
            position: "relative",
            margin: "0.3rem 0",
          }}
        >
          <BsTelephone />

          <Typography
            sx={{
              fontSize: "0.8rem",
              textAlign: "center",
              fontWeight: "300",
              color: "gray",
              fontVariant: "small-caps",
              marginLeft: "0.5rem",
            }}
          >
            {user?.phone}
          </Typography>
        </Box>
      )}
      {mainpageVariant && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "flex-row",
            alignItems: "center",
            position: "relative",
            margin: "0.3rem 0",
          }}
        >
          <GrPersonalComputer />

          <Typography
            sx={{
              fontSize: "0.8rem",
              textAlign: "center",
              fontWeight: "300",
              color: "gray",
              fontVariant: "small-caps",
              marginLeft: "0.5rem",
            }}
          >
            <Link href={user?.website}>{user?.website}</Link>
          </Typography>
        </Box>
      )}
      {mainpageVariant && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "flex-row",
            alignItems: "center",
            position: "relative",
            margin: "0.3rem 0",
          }}
        >
          <ImOffice />

          <Typography
            sx={{
              fontSize: "0.8rem",
              textAlign: "center",
              fontWeight: "300",
              color: "gray",
              fontVariant: "small-caps",
              marginLeft: "0.5rem",
            }}
          >
            {user?.company.name}
          </Typography>
        </Box>
      )}

      {handleClick && (
        <Button variant="contained" onClick={handleClick}>
          View
        </Button>
      )}
    </Container>
  );
};

export default UserCard;
