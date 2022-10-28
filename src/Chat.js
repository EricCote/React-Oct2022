import { useEffect } from "react";

function Chat() {
  const [userId, setUserId] = useState();

  useEffect(() => {
    RegisterChat(userId);
    return () => {
      UnregisterChat(userId);
    };
  }, [userId]);

  return <div></div>;
}

export default Chat;
<div></div>;
