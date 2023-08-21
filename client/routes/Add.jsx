const Add = () => {
  return (
    <div className="form">
      <form action="/" method="POST">
        <label>Book name</label>
        <input type="text" name="name"></input>
        <label>Description</label>
        <input type="text" name="description"></input>
        <label>Cover</label>
        <input type="text" name="cover"></input>
        <label>Price</label>
        <input type="number" name="price"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Add;
