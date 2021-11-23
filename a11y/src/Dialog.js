import React, { useState } from 'react';

export const Dialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <dialog id="favDialog" open={open}>
        <form method="dialog">
          <p><label>Favorite animal:
            <select>
              <option></option>
              <option>Brine shrimp</option>
              <option>Red panda</option>
              <option>Spider monkey</option>
            </select>
          </label></p>
          <menu>
            <button value="cancel" onClick={() => setOpen(false)}>Cancel</button>
            <button id="confirmBtn" value="default" onClick={() => setOpen(false)}>Confirm</button>
          </menu>
        </form>
      </dialog>

      <menu>
        <button id="updateDetails" onClick={() => setOpen(true)}>Menu with tabbing problem</button>
      </menu>
    </>
  );
}

