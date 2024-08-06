import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  const projectId = process.env.REACT_APP_PROJECT_ID;
  return (
    <div className="background">
      <PrettyChatWindow
        const projectId = {projectId}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;