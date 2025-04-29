async function fetcher(url) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });

  const contentType = response.headers.get('content-type');

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.status = response.status;

    if (contentType && contentType.includes('application/json')) {
      error.info = await response.json();
    } else {
      error.info = await response.text();
    }

    throw error;
  }

  if (contentType && contentType.includes('application/json')) {
    return response.json();
  } else {
    throw new Error('Invalid response format: expected JSON');
  }
}

export default fetcher;
