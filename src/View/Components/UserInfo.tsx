import LoginButton from "./LoginButton";
import ProfilePopover from "./ProfilePopover";

export default function UserInfo() {
  const isLoading = false;
  const isAuthenticated = true;
  const user = {
    name: 'John Doe',
    picture: 'https://via.placeholder.com/150'
  }
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <LoginButton isAuthenticated={isAuthenticated} userName={user?.name}></LoginButton>
      <ProfilePopover isAuthenticated={isAuthenticated} userPicture={user?.picture}></ProfilePopover>
    </>
  )
}