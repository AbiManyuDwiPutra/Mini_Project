// import Link from "../../router/Link";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const MENU_ITEM = [
  {
    label: <Link to="/homePage">Home Page</Link>,
    key: "/",
  },
  {
    label: <Link to="/course">Course</Link>,
    key: "/course",
  },
{
  label: (
    <Link to="/loginPage">
      <Button
        type="primary"
        // onClick={() => {
        //   localStorage.removeItem("token");
        // }}
        danger
      >
        Admin
      </Button>
    </Link>
  ),
  key: "6",
},


];