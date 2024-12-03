const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const ul = document.querySelector("ul");
const maxInputValue = 100;
const minInputValue = 0;

const sendRequest = async (index) => {
  try {
    const response = await fetch(
      "https://f654-193-108-241-19.ngrok-free.app/api/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ index }),
      }
    );

    const data = await response.json();

    if (!data.index) {
      const li = document.createElement("li");
      li.textContent = `Reply to a request ${data.index}`;
      ul.appendChild(li);
    }
  } catch (error) {
    console.error(`Error sending request`, error);
  }
};

buttonElement.addEventListener("click", async () => {
  const concurrencyLimit = parseInt(inputElement.value);
  if (concurrencyLimit <= minInputValue || concurrencyLimit > maxInputValue) {
    alert("Enter a number from 1 to 100");
    return;
  }

  buttonElement.disabled = true;

  let requestIndex = 1;
  let reqCount = 1000;

  const limitRequests = async () => {
    const promises = [];

    for (let i = 0; i < Math.min(reqCount, concurrencyLimit); i++) {
      const promise = sendRequest(requestIndex++);
      promises.push(promise);
    }
    reqCount -= promises.length;

    await Promise.all(promises);

    if (reqCount > 0) {
      setTimeout(limitRequests, 1000);
    }
  };

  limitRequests();
});
