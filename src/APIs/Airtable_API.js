// ./src/APIs/Airtable_API.js

const airtableBaseId = process.env.REACT_APP_AIRTABLE_BASE_ID; // NOTE: not used.
const airtableApiToken = process.env.REACT_APP_AIRTABLE_API_TOKEN; // NOTE: not used.
const airtableTableName = process.env.REACT_APP_TABLE_NAME; // NOTE: not used (yet).
const apiUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

// NOTE: when I start to use more than one table, the name of the table will need to be passed into the async functions.

// API call to AirTable for all records. (GET)
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

// API call to AirTable to edit a record. (PUT)
export const requestEditATodo = async (item) => {
  try {
    // console.log("item:", item);

    const payload = JSON.stringify({ fields: { title: item.title } });

    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: payload,
    };

    const response = await fetch(`${apiUrl}/${item.id}`, options);
    console.log("response requestAddATodo:", response);
    const body = await response.json();
    console.log("body requestAddATodo:", body);
  } catch (error) {
    console.error("There was an error:", error);
    throw error;
  }
};
