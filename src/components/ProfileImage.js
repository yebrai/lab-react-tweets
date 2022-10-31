function ProfileImage(props) {
    return(

        <img
          src={props.userImage}
          className="profile"
          alt="profile"
        />
    )
}

export default ProfileImage