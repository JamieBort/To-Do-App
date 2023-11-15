// ./src/APIs/Airtable_API.js

const airtableBaseId = process.env.REACT_APP_AIRTABLE_BASE_ID;
const airtableApiKey = process.env.REACT_APP_AIRTABLE_API_KEY; // NOTE: not used.
const airtableApiToken = process.env.REACT_APP_AIRTABLE_API_TOKEN;
const apiUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

// API call to AirTable for all records. (GET)
// NOTE: when I start to use more than one table, the name of the table will need to be passed into this async function
export const requestGetAllTodo = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };
    const response = await fetch(`${apiUrl}`, options);
    // console.log("response requestGetAllTodo:", response);
    const body = await response.json();
    // console.log("body requestGetAllTodo:", body);
    return body.records;
  } catch (error) {
    console.error("There was an error:", error);
    throw error;
  }
};

// API call to AirTable to post a record. (POST)
// NOTE: when I start to use more than one table, the name of the table will need to be passed into this async function
export const requestAddATodo = async (newTodo) => {
  try {
    // console.log("newTodo:", newTodo);
    const payload = JSON.stringify({
      fields: { title: newTodo.title },
    });

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: payload,
    };

    const response = await fetch(`${apiUrl}`, options);
    // console.log("response requestAddATodo:", response);
    const body = await response.json();
    // console.log("body requestAddATodo:", body);
    return body;
  } catch (error) {
    console.error("There was an error:", error);
    throw error;
  }
};

// API call to AirTable to remove a record. (DELETE)
export const requestDeleteATodo = async (id) => {
  try {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    const response = await fetch(`${apiUrl}/${id}`, options);
    // console.log("response requestAddATodo:", response);
    const body = await response.json();
    // console.log("body requestAddATodo:", body);
    return body;
  } catch (error) {
    console.error("There was an error:", error);
    throw error;
  }
};
