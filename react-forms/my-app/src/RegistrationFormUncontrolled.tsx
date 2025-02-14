import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData);
    console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="username" />
      </label>
      <label>
        Password:
        <input name="password" type="password" />
      </label>
      <button>Submit</button>
    </form>
  );
}
