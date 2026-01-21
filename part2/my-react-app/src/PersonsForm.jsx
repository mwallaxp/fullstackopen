const PersonsForm =({handleSubmit,handelNameChange,handelPhoneChange,name, phone})=>{

    return(
         <form onSubmit={handleSubmit}>       

        <div>
          name :<input type="text" value={name} onChange={handelNameChange} />
        </div>

        <div>
          phone :<input type="text" value={phone} onChange={handelPhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}
export default PersonsForm