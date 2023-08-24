import { useEffect } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FetchUserList, Removeuser } from "../Redux/Action";

const Userlisting = (props) => {
  useEffect(() => {
    props.loaduser();
  }, []);
  const handledelete = (code) => {
    if (window.confirm("Do you want to remove?")) {
      props.removeuser(code);
      props.loaduser();
      toast.success("User removed successfully.");
    }
  };
  return props.user.loading ? (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <h2>Loading...</h2>
    </div>
  ) : props.user.errmessage ? (
    <div>
      <h2>{props.user.errmessage}</h2>
    </div>
  ) : (
    <div>
      <div className="card">
        <div className="d-flex justify-content-center m-5">
          <Link to={"/user/add"} className="btn btn-success px-4 py-2">
            Add User
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-dark">
            <thead className="bg-dark text-white">
              <tr>
                <td>Code</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Role</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {props.user.userlist &&
                props.user.userlist.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.role}</td>
                    <td>
                      <Link
                        to={"/user/edit/" + item.id}
                        className="btn btn-outline-primary"
                      >
                        Edit
                      </Link>{" "}
                      |{" "}
                      <button
                        onClick={() => {
                          handledelete(item.id);
                        }}
                        className="btn btn-outline-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(FetchUserList()),
    removeuser: (code) => dispatch(Removeuser(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);
