import React, { useState } from 'react';

import './App.css';

export const Dialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <dialog id="favDialog" open={open}>
        <form method="dialog">
          <p id="dialog-label">Select your favorite animal</p>
          <p>
            <label htmlFor="animal-select">
              Favorite animal:
              <select id="animal-select">
                <option></option>
                <option>Brine shrimp</option>
                <option>Red panda</option>
                <option>Spider monkey</option>
              </select>
            </label>
          </p>
          <menu>
            <button value="cancel" onClick={() => setOpen(false)}>Cancel</button>
            <button id="confirmBtn" value="default" onClick={() => setOpen(false)}>Confirm</button>
          </menu>
        </form>
      </dialog>

      <div className="modalStatus" role="region" aria-live="polite">{open ? 'Modal is open' : 'Modal is closed'}</div>

      <menu>
        <button id="updateDetails" onClick={() => setOpen(true)}>Menu with tabbing problem</button>
      </menu>
    </>
  );
}

