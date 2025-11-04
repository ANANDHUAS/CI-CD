import { useMyDetailsContext } from "./context.js";

function Profile() {
  const { myname, updateMyName } = useMyDetailsContext();

  return (
    <>
      <h1>name</h1>
      {myname}
      <button type="button" onClick={() => updateMyName("vanish")}>
        Vanish
      </button>
    </>
  );
}

export default Profile;
