addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  const num1 = parseFloat(url.searchParams.get("num1"))
  const num2 = parseFloat(url.searchParams.get("num2"))
  const operation = url.searchParams.get("operation")

  if (isNaN(num1) || isNaN(num2) || !operation) {
    return jsonResponse({ error: "Invalid input parameters" })
  }

  let result

  switch (operation) {
    case "add":
      result = num1 + num2
      break
    case "sub":
      result = num1 - num2
      break
    case "mul":
      result = num1 * num2
      break
    case "div":
      if (num2 === 0) {
        return jsonResponse({ error: "Cannot divide by zero" })
      }
      result = num1 / num2
      break
    default:
      return jsonResponse({ error: "Unsupported operation" })
  }

  return jsonResponse({ result })
}

function jsonResponse(data) {
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  })
}