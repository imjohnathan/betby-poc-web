import { FC } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconBar from '~icons/customIcons/react'

export interface ISubscriptionProps {
  username: string;
  shouldDisplayMentions?: boolean;
}

export const Subscription: FC<ISubscriptionProps> = (props: ISubscriptionProps) => {
  console.log(props);
  const { username, shouldDisplayMentions } = props;
  return (
    <>
        <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    <IconBar />
      <div className="subscription">
        <h2 className="subscription__title">Subscription</h2>
        <p className="subscription__greeting">Hello {username}!</p>

        <label htmlFor="email">
          <input
            id="email"
            type="email"
            className="subscription__input"
            placeholder="Enter your email"
          />
        </label>

        {shouldDisplayMentions && (
          <p className="subscription__mentions">
            My mention should be display here...
          </p>
        )}
      </div>
    </>
  );
};

export default Subscription;