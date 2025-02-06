import React from "react";

const API_BASE_URL = "https://webhook.site/86949e51-9eb1-4995-817f-e670792ae7af"; // Replace with your API URL

// Function to perform API requests
const apiRequest = async (endpoint, method = "GET", body = null, auth = false) => {
  const token = localStorage.getItem("authToken");

  const headers = {
    "Content-Type": "application/json",
  };

  if (auth && token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, options);
    return await response.json();
  } catch (error) {
    console.error("API Request Error:", error);
    return { error: "Something went wrong. Please try again." };
  }
};

// Login function
export const login = async (email, password) => {
  const data = await apiRequest("a6645cb0-1c46-4fda-acbf-759fe60dbc0b", "POST", { email, password });

  if (data.token) {
    localStorage.setItem("authToken", data.token); // Store token
    return { success: true };
  } else {
    return { success: false, message: data.message || "Invalid credentials" };
  }
};

// Function to fetch user data (Example)
export const getUserData = async () => {
  return await apiRequest("user", "GET", null, true);
};

const Api = () => {
//   return ;
};

export default Api;
