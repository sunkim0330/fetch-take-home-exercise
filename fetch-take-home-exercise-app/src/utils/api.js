export async function login(name, email) {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
}

export async function searchDogs(query) {
  const response = await fetch(`/api/dogsSearch?${query}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  console.log("repsponse in api", response);
  const data = await response.json();
  return data;
}

export async function fetchDogsInformation(ids) {
  const response = await fetch("/api/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ids),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
}
