export async function modelTrigger(i) {
    const response = await fetch(`http://127.0.0.1:8000/api/${i}/triggered`);
    const json_response = await response.json();
    console.log(json_response)
  }