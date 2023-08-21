import { useEffect, useState } from "react"

const UserPage = () => {
  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  // const [username, setUsername] = useState("")
  // const [email, setEmail] = useState("")
  // const [dateJoined, setDateJoined] = useState("")
  // const [error, setError] = useState()
  const url = "http://127.0.0.1:8000"

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    let fullUrl = `${url}/api/v1/user_list`
    let result = await fetch(fullUrl)
    result = await result.json()
    console.log("result", result)
  }

  return <></>
}

export default UserPage
