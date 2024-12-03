To ensure the task works correctly, the server must be run on an HTTPS host. For this, we will use ngrok.

1. Install ngrok globally:

   Run the following command to install ngrok:

   - brew install ngrok (mac-os)
   - https://download.ngrok.com/windows (windows)

2. Start the server:

   Run the server with:

   - npm start
     The server will start on port 9000.

3. Run ngrok:

   Now, you need to run ngrok with this command:

   - ngrok http 9000
     You will receive output similar to this:
     Forwarding https://55e9-193-108-241-19.ngrok-free.app -> http://localhost:9000

   Copy the URL, for example:
   https://55e9-193-108-241-19.ngrok-free.app

4. Update script.js:

   In the client folder, you will find the file script.js. On line 10, replace the URL with the one you copied earlier, like this:
   const response = await fetch("https://55e9-193-108-241-19.ngrok-free.app/api/send", {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ index }),
   });

5. Open the project:

   Now, you can open the index.html file in your browser or open it via Live Server if you are using VSCode.
