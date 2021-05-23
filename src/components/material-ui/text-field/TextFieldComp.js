import TextField from "@material-ui/core/TextField/TextField";

const TextFieldComp = () => {
  return (
    <TextField
      color="secondary"
      variant="filled"
      type="email"
      label="Email"
      //   defaultValue="some@example.com"
      placeholder="some@example.com"
    />
  );
};

export default TextFieldComp;
