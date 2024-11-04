import './App.css'

import { Subscription } from "./components/Subscription";

export interface AppProps {
  username: string;
  shouldDisplayMentions?: boolean;
}

function App({ username, shouldDisplayMentions }: AppProps) {
  return <Subscription shouldDisplayMentions={shouldDisplayMentions} username={username} />;
}

export default App
