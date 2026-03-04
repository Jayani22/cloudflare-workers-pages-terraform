async function calculate() {

  const num1 = document.getElementById("num1").value
  const num2 = document.getElementById("num2").value
  const operation = document.getElementById("operation").value

  const response = await fetch(
    `https://my-backend-worker.mutcherlajayani.workers.dev?num1=${num1}&num2=${num2}&operation=${operation}`
  )

  const data = await response.json()

  document.getElementById("result").innerText =
    data.result !== undefined
      ? "Result: " + data.result
      : data.error
}