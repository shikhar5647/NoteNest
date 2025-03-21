import React from 'react';


export const Home = () => {
  return (
    <div>
      <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <h1>Your Notes</h1>
    </div>
  );
};