import axios from "axios"

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/v1/user/details")
	return response.data;
}

const Page = async() => {
  
  const data=await getUserDetails()
  //  await new Promise(r=>setTimeout(r,5000))
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

    <div className="border-2 border-red-500 p-4 rounded-xl">
      {data.user}
      <br />
      {data.email}
      <br />

    </div>
    </div>
  )
}

export default Page
