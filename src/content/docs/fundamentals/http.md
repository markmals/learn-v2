---
title: HTTP
---

HTTP (HyperText Transfer Protocol) is how browsers communicate with servers. As a UX designer building interactive websites, understanding HTTP helps you debug issues and build better user experiences.

## What is HTTP?

HTTP is like a conversation between your browser and a web server:

1. **Browser**: "Hey server, can I have the homepage?"
2. **Server**: "Sure! Here's the HTML, CSS, and images."
3. **Browser**: "Thanks! Now can I submit this form data?"
4. **Server**: "Got it! Here's a success page."

## HTTP Methods

Different types of requests use different **methods**:

- **GET** - Retrieve data (like loading a webpage)
- **POST** - Send data (like submitting a form)
- **PUT** - Update existing data
- **DELETE** - Remove data
- [And more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)

## Try It Yourself with curl

`curl` is a command-line tool for making HTTP requests. Let's explore:

### Basic GET Request

```bash
curl https://jsonplaceholder.typicode.com/posts/1
```

**What's happening step by step:**
1. `curl` makes an HTTP request to the URL
2. The server at jsonplaceholder.typicode.com receives the request
3. It looks for post with ID 1 in its database
4. It returns the post data as JSON
5. curl displays the response in your terminal

You'll see JSON data returned:

```json
{
  "userId": 1,
  "id": 1,
  "title": "sample post title",
  "body": "sample post content..."
}
```

### See the Full HTTP Conversation

Add `-v` (verbose) to see the complete exchange:

```bash
curl -v https://jsonplaceholder.typicode.com/posts/1
```

**What's happening step by step:**
1. curl connects to the server (you'll see connection details)
2. curl sends HTTP request headers (what your browser would send)
3. The server responds with HTTP response headers (metadata about the response)
4. The server sends the response body (the actual content)
5. curl displays all of this information so you can see the complete conversation

You'll see:
- **Request headers** - What your client sends (`> GET /posts/1 HTTP/1.1`)
- **Response headers** - What the server sends back (`< HTTP/1.1 200 OK`)
- **Response body** - The actual content (the JSON data)

### POST Request (Sending Data)

```bash
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My New Post",
    "body": "This is the content",
    "userId": 1
  }'
```

**What's happening step by step:**
1. `-X POST` tells curl to use the POST method (instead of default GET)
2. `-H "Content-Type: application/json"` adds a header telling the server we're sending JSON data
3. `-d '{ ... }'` provides the data to send in the request body
4. The server receives this data and processes it (in this case, simulating creating a new post)
5. The server responds with the created post data, including a new ID

This simulates submitting a form or creating content through an API.

## Status Codes

HTTP responses include [status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) that tell you what happened:

### Success (2xx)

- **200 OK** - Everything worked
- **201 Created** - New resource created

### Client Errors (4xx)

- **400 Bad Request** - Invalid request
- **401 Unauthorized** - Login required
- **404 Not Found** - Page doesn't exist
- **429 Too Many Requests** - Rate limited

### Server Errors (5xx)

- **500 Internal Server Error** - Server broke
- **503 Service Unavailable** - Server overloaded

Try getting a 404 error:

```bash
curl -v https://jsonplaceholder.typicode.com/this-is-not-an-endpoint
```

**What's happening step by step:**
1. curl makes a request to a URL that doesn't exist
2. The server searches for the requested resource
3. It can't find anything at that path
4. The server responds with a `404 Not Found` status code
5. You'll see this in the response headers: `< HTTP/1.1 404 Not Found`

## Headers

HTTP headers carry metadata about requests and responses:

### Common Request Headers

- `User-Agent` - What browser/app you're using
- `Accept` - What content types you can handle
- `Authorization` - Authentication credentials

### Common Response Headers

- `Content-Type` - What kind of data is being sent
- `Cache-Control` - How long to cache the response
- `Set-Cookie` - Store data in the browser

See headers in action:

```bash
curl -I https://github.com
```

**What's happening step by step:**
1. `-I` tells curl to make a HEAD request (headers only, no body)
2. curl connects to GitHub's server
3. The server responds with just the headers (no page content)
4. You'll see headers like `Content-Type`, `Server`, `Cache-Control`, etc.
5. This is useful for checking if a resource exists without downloading the full content

## HTTPS vs HTTP

- **HTTP** - Data travels in plain text (insecure)
- **HTTPS** - Data is encrypted (secure)

Always use HTTPS for:

- Login forms
- Payment processing
- Any sensitive data

## Debugging Tips

When something doesn't work:

1. **Check the Network tab** in browser dev tools
2. **Look for red entries** (failed requests)
3. **Check status codes** (not everything needs to be 200)
4. **Verify request headers** (especially authentication)

Try it: Open your browser's dev tools, go to the Network tab, and refresh this webpage. You'll see all the HTTP requests happening behind the scenes!