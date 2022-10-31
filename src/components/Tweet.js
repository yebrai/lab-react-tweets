import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  const { tweet: { user, timestamp, message } } = props
  console.log(props)
  return (
    
    <div className="tweet">
    <ProfileImage userImage={user.image}/>

      <div className="body">
        <div className="top">
        <User details={user} />

        <Timestamp time={timestamp} />
        </div>

        <Message message={message}/>

      <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
