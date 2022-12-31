const Register = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [password2, setPassword2] = useState("");
  //   const [msg, setMsg] = useState(null);
  //   const [showPassword, setShowPassword] = useState(false);
  //   const [showPassword2, setShowPassword2] = useState(false);

  //   const dispatch = useDispatch();
  //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  //   const error = useSelector((state) => state.error);

  //   const handleShowPassword = () => setShowPassword(!showPassword);
  //   const handleShowPassword2 = () => setShowPassword2(!showPassword2);

  //   const handleRegister = (e) => {
  //     e.preventDefault();
  //     if (name === "" || email === "" || password === "" || password2 === "") {
  //       setMsg("Please fill in all fields");
  //     } else if (password !== password2) {
  //       setMsg("Passwords do not match");
  //     } else {
  //       const newUser = {
  //         name,
  //         email,
  //         password,
  //       };
  //       dispatch(register(newUser));
  //     }
  //   };

  //   useEffect(() => {
  //     if (isAuthenticated) {
  //       history.push("/dashboard");
  //     }
  //     if (error.id === "REGISTER_FAIL") {
  //       setMsg(error.msg.msg);
  //     }
  //   }, [error, isAuthenticated]);

  return (
    <div id="register-view">
      <h1>Register</h1>
    </div>
  );
};

export default Register;
