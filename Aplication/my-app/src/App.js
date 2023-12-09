import './App.css';

function App() {
  return (
    <div className="Parrent">
      <div className='Main'>
        <div className='Form'>
          <h1 id='center'>Form In React</h1>
          <div>
            <label htmlFor='roll'>Roll no : </label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor='Name'>First Name : </label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor='Name'>Last Name : </label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor='email'>Email : </label>
            <input type='email' />
          </div>
          <div>
            <label htmlFor='dob'>Date of Birth : </label>
            <input type='date' />
          </div>
          <div>
            <label htmlFor='pass'>Password : </label>
            <input type='password' />
          </div>
          <div>
            <label htmlFor='gender'>Gender : </label>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
            <input type="radio" value="Other" name="gender" /> Other
          </div>
          <div>
            <label htmlFor='pass'>Hobby : </label>
            <input type='checkbox' /> Drawing
            <input type='checkbox' /> Sleeping
            <input type='checkbox' /> Eating
            <input type='checkbox' /> coding
            <input type='text' placeholder='eg - playing' pattern= '{50}' /> others {"Max 50 Char"}
          </div>
          <div>
            <label htmlFor='state'>States : </label>
            <select defaultValue="States">
              <option value="States" disabled>States</option>
              <option>TamilNadu</option>
              <option>Kerala</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label>Comments : </label>
            <textarea />
          </div>
          <div>
            <input type='submit' value={"Submit"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
