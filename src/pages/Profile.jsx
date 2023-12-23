import styled from "styled-components";
const Profile = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 ">
      <div className="w-full max-w-9xl mx-auto bg-white dark:bg-slate-800 border">
        <form className="w-fit mx-auto py-16 ">
          <CustomInput>
            <label htmlFor="name">Name</label>
            <input id="name" placeholder="Enter the name" />
          </CustomInput>
          <CustomInput>
            <label htmlFor="email">E-mail</label>
            <input id="email" placeholder="Enter the E-mail" />
          </CustomInput>
          <CustomInput>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter the Password"
            />
          </CustomInput>
          <CustomInput>
            <label htmlFor="password_check">Password</label>
            <input
              id="password_check"
              type="password"
              placeholder="Re-Enter the Password"
            />
          </CustomInput>
          <CustomInput>
            <label htmlFor="phone">Phone</label>
            <input id="phone" placeholder="Enter the Phone" />
          </CustomInput>
          <button
            type="submit"
            className="btn bg-indigo-500 hover:bg-indigo-600 text-white mt-4 w-full"
          >
            <span className="hidden xs:block ml-2">Save</span>
          </button>
        </form>
      </div>
    </main>
  );
};

export default Profile;

const CustomInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  label {
    display: flex;
    margin-right: 10px;
    text-align: center;
  }
  input {
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;
