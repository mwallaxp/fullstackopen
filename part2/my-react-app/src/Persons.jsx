const Persons =({filteredData, handleDelete})=>{

    return(
        <div>
          {filteredData.map((user) => (
        <div key={user.id}>
          {user.name} {user.phone}<button onClick={()=>handleDelete(user.id, user.name)}>delete</button>
        </div>
      ))}
        </div>
    )
}
export default Persons