interface Props {
  isAuthenticated: Boolean
  userName: string | undefined
}

export default function LoginButton({ isAuthenticated, userName }: Props) {
  if (isAuthenticated) {
    return (
      <p>{userName}</p>
    )
  }

  return <button
    className=' bg-MCS-BlueBlack text-white rounded-md h-8 w-24'
  >Log In</button>;
};