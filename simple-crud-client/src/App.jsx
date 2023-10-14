import "./App.css";

function App() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
  };

  return (
    <>
      <h1>Simple Crud</h1>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="name" placeholder="name" id="" />
          <br />
          <input type="email" name="email" placeholder="email" id="" />
          <br />
          <input type="submit" value="Add User" />
        </form>
      </div>
    </>
  );
}

export default App;
