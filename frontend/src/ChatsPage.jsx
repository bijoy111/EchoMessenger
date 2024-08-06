import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  const projectId = '6568a657-09e0-46c7-82fb-952f84430139';
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