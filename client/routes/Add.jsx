const Add = () => {
  return (
    <div className="form">
      <form action="/" method="POST">
        <h1>Add New Book</h1>
        <input type="text" placeholder="name"></input>
        <input type="text" placeholder="description"></input>
        <input type="text" placeholder="cover"></input>
        <input type="number" placeholder="price"></input>
      </form>
    </div>
  );
};

export default Add;
