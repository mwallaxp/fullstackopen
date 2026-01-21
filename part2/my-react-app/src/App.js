import { useState, useEffect } from "react"
import services from "./services"
import Notification from "./notification"

import Filter from "./filter"
import PersonsForm from "./PersonsForm"
import Persons from "./Persons"

function App() {
  const [persons, setPersons] = useState([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState(null)
  const [notificationType, setNotificationType] = useState(null)

  useEffect(() => {
    services
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])


  const handelNameChange = (event) => {
    setName(event.target.value)
  }
  const handelPhoneChange = (event) => {
    setPhone(event.target.value)
  }
  const handelSearchChange = (event) => {
    setSearch(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    const ExitName = persons.find(person =>
      person.name.toLowerCase() === name.toLowerCase()
    );
    if (ExitName) {
      const shouldReplace = window.confirm(`${name} has aready been added to the phonebook, replace the number with this one? `)

      if (!shouldReplace) {
        return;
      }

      const changeNumber = {
        ...ExitName,
        phone: phone
      }

      services
        .update(ExitName.id, changeNumber)
        .then(response => {
          setPersons(persons.map(person =>
            person.id !== ExitName.id ? person : response.data))
          console.log(response.data)
        })
        .catch(() => {
          setNotification(
            `Note '${persons.content}' was already removed from server`
          )
          setNotificationType("error")
          setTimeout(() => {
            setNotification(null)
          }, 5000)

          setPersons(persons.filter(n => n.name !== name))
        }


        )


    } else {

      const newPerson = {
        name,
        phone

      }
      services
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNotification(
            `'${name}' add successfull`

          )
          setNotificationType("success")
          setTimeout(() => {
            // setErrorMessage(null)
          }, 5000)
        })
    }
  }

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      services
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          console.error("Error deleting person:", error)
        })
    }
  }

  const filteredData = persons.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div>
      <h1>Phone book</h1>
      <Notification message={notification} 
      type={notificationType}
      />
      <Filter name={search}
        handelSearchChange={handelSearchChange}
      />
      <h1>add a new</h1>
      <PersonsForm
        handleSubmit={handleSubmit}
        handelNameChange={handelNameChange}
        handelPhoneChange={handelPhoneChange}
        name={name}
        phone={phone}
      />
      <h2>Numbers</h2>

      <Persons
        filteredData={filteredData}
        handleDelete={handleDelete}
      />

    </div>
  )
}

export default App