import React, { useState } from "react";

function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoUpdates, setAutoUpdates] = useState(false);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center dark:text-white mb-5">
        Settings
      </h2>
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-4 rounded shadow space-y-4">
        <div className="flex items-center justify-between">
          <label className="dark:text-white">Enable Notifications</label>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            className="w-5 h-5"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="dark:text-white">Auto Updates</label>
          <input
            type="checkbox"
            checked={autoUpdates}
            onChange={() => setAutoUpdates(!autoUpdates)}
            className="w-5 h-5"
          />
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Settings
        </button>
      </div>
    </div>
  );
}

export default Settings;
